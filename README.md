# justinpaige.com

Personal portfolio site for Justin Paige — Senior Software Engineer.

## Stack

| Layer         | Technology      |
| ------------- | --------------- |
| Framework     | React 19        |
| Language      | TypeScript      |
| Bundler       | Vite 7          |
| Styling       | Tailwind CSS v4 |
| Routing       | React Router v7 |
| UI Primitives | Radix UI        |
| Data Viz      | D3 v7           |
| Deployment    | Vercel          |
| Email         | Resend          |

## Routes

| Route | Description                             |
| ----- | --------------------------------------- |
| `/`   | Home — hero, about, experience, contact |
| `/*`  | Redirects to `/`                        |

**API (Vercel serverless)**

| Method | Path           | Description                   |
| ------ | -------------- | ----------------------------- |
| `POST` | `/api/contact` | Sends contact form via Resend |

## Dev

```bash
npm install
npm run dev    # Vite dev server (no API routes)
npm run start  # Vercel dev — use this if testing the contact form
```

## Env vars

The site works without these except where noted.

| Variable                | Required for                         |
| ----------------------- | ------------------------------------ |
| `VITE_CONTACT_TO_EMAIL` | mailto link + contact form recipient |
| `RESEND_API_KEY`        | Contact form sending                 |
| `CONTACT_FROM_EMAIL`    | Contact form sender address          |

Create a `.env` file at the root to set these locally:

```bash
VITE_CONTACT_TO_EMAIL=you@example.com
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=noreply@yourdomain.com
```
