# MovieQuiz — Viral AI Movie Personality Platform

MovieQuiz is a complete, production-ready viral entertainment platform. Users take movie personality quizzes, get AI-generated cinematic results with unique AI images, and share them via unique URLs with social media previews.

## Tech Stack

- **Astro** — Static site generation with minimal client JavaScript
- **TypeScript** — Type-safe code throughout
- **Cloudflare Pages** — Hosting and deployment
- **Cloudflare Pages Functions** — Server-side API endpoints
- **Cloudflare Workers AI** — AI text and image generation
- **Cloudflare D1** — Result metadata storage
- **Cloudflare R2** — Generated image storage

## Quick Start

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output is in the `dist/` directory.

## Project Structure

```
/
├── functions/              # Cloudflare Pages Functions (server-side)
│   ├── api/
│   │   ├── generate-result.ts   # POST: Quiz submission → AI generation
│   │   ├── result/[id].ts       # GET: Fetch result metadata as JSON
│   │   ├── image/[id].ts        # GET: Serve generated image from R2
│   │   └── quota.ts             # GET: Check daily generation quota
│   └── result/
│       └── [id].ts              # GET: Server-rendered result page with OG metadata
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── manifest.json       # PWA manifest
│   ├── og-default.svg      # Default social share image
│   ├── robots.txt
│   └── sw.js               # Service worker
├── schema.sql              # D1 database schema
├── src/
│   ├── components/         # Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── QuizCard.astro
│   │   ├── QuizPlayer.astro     # Interactive quiz engine
│   │   └── ShareButtons.astro
│   ├── config/
│   │   └── index.ts        # Central config (AI models, quota, site)
│   ├── data/
│   │   └── quizzes/        # 10 quiz data files (content separated from code)
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML layout with SEO metadata
│   ├── lib/
│   │   ├── ai.ts           # AI text & image generation
│   │   ├── database.ts     # D1 queries
│   │   ├── quizEngine.ts   # Deterministic scoring engine
│   │   ├── quota.ts        # Daily limit enforcement
│   │   └── storage.ts      # R2 image storage
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── quiz/[slug].astro    # Quiz pages
│   │   ├── result/[id].astro    # Result page (client-side)
│   │   ├── privacy.astro        # Privacy policy
│   │   ├── terms.astro          # Terms of service
│   │   └── sitemap.xml.astro    # Sitemap
│   └── types/
│       └── index.ts        # TypeScript types
└── types/
    └── env.d.ts            # Cloudflare environment types
```

## Cloudflare Configuration

### Step 1: Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select your GitHub repository.
4. Set the build configuration:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Deploy.

### Step 2: Create D1 Database

1. In the Cloudflare dashboard, go to **D1 → Create database**.
2. Name it `moviequiz` (or any name).
3. Open the database console and run the SQL from `schema.sql` in this repository.
4. Note the **Database ID** — you'll need it for the binding.

### Step 3: Create R2 Bucket

1. In the Cloudflare dashboard, go to **R2 → Create bucket**.
2. Name it `moviequiz-images` (or any name).
3. Note the bucket name.

### Step 4: Configure Bindings

In your Cloudflare Pages project, go to **Settings → Functions → Bindings** and add:

| Binding Type | Variable Name | Resource |
|---|---|---|
| **AI** | `AI` | (Automatically available — Workers AI is built in) |
| **D1 database** | `DB` | Select your `moviequiz` database |
| **R2 bucket** | `IMAGES` | Select your `moviequiz-images` bucket |

You can also set an environment variable:

| Type | Name | Value |
|---|---|---|
| **Plain text** | `SITE_URL` | `https://your-domain.pages.dev` (or your custom domain) |

### Step 5: Verify

After deployment:
1. Visit your site and take a quiz.
2. Complete the quiz to trigger AI generation.
3. Check that the result page loads with the generated image.
4. Copy the result URL and test it in a social media preview tool.
5. Verify `og:image` points to the generated image.

## AI Model Configuration

AI models are configured in `src/config/index.ts`:

```typescript
export const AI_CONFIG = {
  textModel: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  imageModel: '@cf/black-forest-labs/flux-1-schnell',
  imageSteps: 4,
  textMaxTokens: 1200,
  generationTimeoutMs: 45000,
  maxRetries: 1,
};
```

To change models, update the `textModel` or `imageModel` values. Verify model availability at [Cloudflare Workers AI Models](https://developers.cloudflare.com/workers-ai/models/).

## Quota System

- **3 AI results per user per day** (server-side enforced)
- Uses IP-based anonymous identification
- No registration, email, or account required
- Quota is only consumed on successful new generation
- Viewing, refreshing, or sharing a result does NOT consume quota

## Adding New Quizzes

Quiz content is separated from UI code. To add a new quiz:

1. Create a new file in `src/data/quizzes/` (e.g., `romantic-comedy.ts`).
2. Export a `Quiz` object with questions, answers, weights, and results.
3. Import and add it to the `QUIZZES` array in `src/data/quizzes/index.ts`.

No changes to the quiz engine or UI are needed.

## Social Media Previews

When a result URL is shared, social crawlers receive server-rendered HTML with:
- `og:title` — Result title and match percentage
- `og:description` — AI-generated share caption
- `og:image` — Direct URL to the generated image in R2
- `og:url` — Permanent result URL
- `twitter:card` — `summary_large_image`
- `twitter:title`, `twitter:description`, `twitter:image`

The `functions/result/[id].ts` Pages Function handles this by querying D1 and returning HTML with the correct metadata embedded.

## API Endpoints

| Method | Path | Description |
|---|---|---|
| POST | `/api/generate-result` | Submit quiz answers, generate AI result |
| GET | `/api/result/:id` | Get result metadata as JSON |
| GET | `/api/image/:id` | Get generated image (from R2) |
| GET | `/api/quota` | Check remaining daily generations |
| GET | `/result/:id` | Server-rendered result page with OG metadata |

## Privacy

- No accounts, emails, or personal data required
- Anonymous IP-based identifier for quota only
- No advertising cookies or third-party tracking
