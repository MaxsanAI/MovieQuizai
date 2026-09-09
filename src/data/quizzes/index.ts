import type { Quiz } from '../../types';
import { movieCharacterQuiz } from './movie-character';
import { movieVillainQuiz } from './movie-villain';
import { actionHeroQuiz } from './action-hero';
import { horrorSurvivalQuiz } from './horror-survival';
import { superheroQuiz } from './superhero';
import { sciFiCharacterQuiz } from './sci-fi-character';
import { fantasyCharacterQuiz } from './fantasy-character';
import { netflixCharacterQuiz } from './netflix-character';
import { moviePersonalityQuiz } from './movie-personality';
import { movieUniverseQuiz } from './movie-universe';

export const QUIZZES: Quiz[] = [
  movieCharacterQuiz,
  movieVillainQuiz,
  actionHeroQuiz,
  horrorSurvivalQuiz,
  superheroQuiz,
  sciFiCharacterQuiz,
  fantasyCharacterQuiz,
  netflixCharacterQuiz,
  moviePersonalityQuiz,
  movieUniverseQuiz,
];

export { movieCharacterQuiz, movieVillainQuiz, actionHeroQuiz, horrorSurvivalQuiz, superheroQuiz, sciFiCharacterQuiz, fantasyCharacterQuiz, netflixCharacterQuiz, moviePersonalityQuiz, movieUniverseQuiz };
