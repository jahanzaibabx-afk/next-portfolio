# Next Portfolio

A Next.js 14 App Router portfolio styled with Tailwind CSS v3. Project cards are
generated from Markdown files, and the visitor counter uses Redis when it is
configured.

## Run locally

Install dependencies with `npm install`, then start the development server with
`npm run dev`. In PowerShell on systems where script execution is restricted, use
`npm.cmd` instead (for example, `npm.cmd run dev`).

## Visitor counter

Set `REDIS_URL` in an untracked `.env.local` file for local development, or in
your hosting provider's environment settings for deployment. Copy the variable
name from `.env.example`; use the connection URL supplied by your Redis provider.
Use a TLS URL (`rediss://`) when required by that provider, and never commit
credentials.

Each request to `/api/visitors` atomically increments the Redis key
`portfolio:visitor-count`, so the value is an aggregate page-view count, not a
real-time count of currently active people. If Redis is not configured or is
unavailable, the route returns HTTP 200 with `{ "visitors": 0, "degraded": true }`
and the `X-Analytics-State: degraded` response header.

## Markdown projects

Add a `.md` file under `src/content/projects/`. Its YAML frontmatter must include
`title`, `description`, `date`, and a `tags` list. `githubLink` and `liveLink`
are optional. Projects are shown newest first. Optional presentation fields are
`category`, `accent` (`cyan`, `violet`, or `emerald`), and `mark`.
