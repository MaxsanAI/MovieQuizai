-- MovieQuiz D1 Database Schema
-- Run this in the Cloudflare D1 console after creating your database

CREATE TABLE IF NOT EXISTS results (
  id TEXT PRIMARY KEY,
  quiz_id TEXT NOT NULL,
  result_key TEXT NOT NULL,
  score_percentage INTEGER NOT NULL,
  result_title TEXT NOT NULL,
  description TEXT NOT NULL,
  traits_json TEXT NOT NULL DEFAULT '[]',
  strength TEXT NOT NULL,
  weakness TEXT NOT NULL,
  movie_energy TEXT NOT NULL,
  humorous_observation TEXT NOT NULL,
  share_caption TEXT NOT NULL,
  image_prompt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  share_image_url TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_results_quiz_id ON results(quiz_id);
CREATE INDEX IF NOT EXISTS idx_results_created_at ON results(created_at DESC);

CREATE TABLE IF NOT EXISTS rate_limits (
  identifier TEXT NOT NULL,
  date_key TEXT NOT NULL,
  generation_count INTEGER NOT NULL DEFAULT 0,
  last_generation_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (identifier, date_key)
);

CREATE INDEX IF NOT EXISTS idx_rate_limits_date_key ON rate_limits(date_key);
