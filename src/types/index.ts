export interface QuizAnswer {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  answers: QuizAnswer[];
  /** Map from answerId -> resultKey, with weights */
  weights: Record<string, Record<string, number>>;
}

export interface QuizResult {
  key: string;
  name: string;
  archetype: string;
  description: string;
  traits: string[];
  strength: string;
  weakness: string;
  movieEnergy: string;
  humorousObservation: string;
  imagePromptBase: string;
}

export interface Quiz {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  emoji: string;
  accentColor: string;
  gradient: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

export interface GeneratedResultContent {
  resultTitle: string;
  description: string;
  traits: string[];
  strength: string;
  weakness: string;
  movieEnergy: string;
  humorousObservation: string;
  shareCaption: string;
  imagePrompt: string;
}

export interface ResultRow {
  id: string;
  quiz_id: string;
  result_key: string;
  score_percentage: number;
  result_title: string;
  description: string;
  traits_json: string;
  strength: string;
  weakness: string;
  movie_energy: string;
  humorous_observation: string;
  share_caption: string;
  image_prompt: string;
  image_url: string;
  share_image_url: string;
  created_at: string;
}

export interface RateLimitRow {
  identifier: string;
  date_key: string;
  generation_count: number;
  last_generation_at: string;
  created_at: string;
  updated_at: string;
}
