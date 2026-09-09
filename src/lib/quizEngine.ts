import type { Quiz, QuizQuestion, QuizResult } from '../types';
import { QUIZZES } from '../data/quizzes';

export const QUIZZES_LIST: Quiz[] = QUIZZES;

export interface QuizScoreResult {
  resultKey: string;
  scorePercentage: number;
  result: QuizResult;
}

export function calculateResult(
  quiz: Quiz,
  answers: Record<string, string>
): QuizScoreResult | null {
  const scores: Record<string, number> = {};

  for (const question of quiz.questions) {
    const answerId = answers[question.id];
    if (!answerId) return null;
    const questionWeights = question.weights[answerId];
    if (!questionWeights) return null;

    for (const [resultKey, weight] of Object.entries(questionWeights)) {
      scores[resultKey] = (scores[resultKey] || 0) + weight;
    }
  }

  let topResultKey = '';
  let topScore = -1;

  for (const [key, score] of Object.entries(scores)) {
    if (score > topScore) {
      topScore = score;
      topResultKey = key;
    }
  }

  if (!topResultKey) return null;

  const result = quiz.results.find((r) => r.key === topResultKey);
  if (!result) return null;

  let maxPossible = 0;
  for (const question of quiz.questions) {
    let questionMax = 0;
    for (const answerWeights of Object.values(question.weights)) {
      for (const w of Object.values(answerWeights)) {
        if (w > questionMax) questionMax = w;
      }
    }
    maxPossible += questionMax;
  }

  const scorePercentage = maxPossible > 0
    ? Math.round((topScore / maxPossible) * 100)
    : 50;

  const clampedPercentage = Math.max(51, Math.min(99, scorePercentage));

  return {
    resultKey: topResultKey,
    scorePercentage: clampedPercentage,
    result,
  };
}

export function validateAnswers(
  quiz: Quiz,
  answers: Record<string, string>
): boolean {
  if (!answers || typeof answers !== 'object') return false;
  for (const question of quiz.questions) {
    const answerId = answers[question.id];
    if (!answerId || typeof answerId !== 'string') return false;
    const validAnswer = question.answers.find((a) => a.id === answerId);
    if (!validAnswer) return false;
  }
  return true;
}

export function getQuizById(quizId: string): Quiz | undefined {
  return QUIZZES_LIST.find((q) => q.id === quizId);
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return QUIZZES_LIST.find((q) => q.slug === slug);
}
