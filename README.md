# Mindful Neurology — Modern Website Rebuild

A responsive, accessible rebuild of **mindfulneuro.com** using a modern React/Next.js stack. The project is standalone and does not require WordPress to run.

## Technology

- Next.js 16 App Router and Turbopack
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- Next/Image for local image optimization
- Responsive mobile navigation and testimonials
- SEO metadata and generated favicon
- Server-side contact API with Formspree email delivery
- Reduced-motion accessibility support

## Included sections

- Modern hero and consultation calls to action
- Trust indicators and clinic information
- Services
- Four-step integrative approach
- Neuroplasticity and research education
- Mind-body practice gallery
- Team profiles
- Testimonials
- Partner and certification logos
- Contact form and medical disclaimer
- Responsive footer

## Requirements

- Node.js **20.9 or newer**
- npm 10 or newer is recommended

Check your versions:

```bash
node -v
npm -v
```

## Run locally

1. Extract the ZIP file.
2. Open Terminal inside the extracted folder.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000
```

Stop the server with `Control + C`.

## Contact-form email delivery with Formspree

The form submits through the local `/api/contact` route and forwards validated inquiries to Formspree. No Resend key or domain DNS access is required.

1. Create or sign in to a Formspree account.
2. Create a new form for the Mindful Neurology website.
3. In Formspree, link and verify the clinic email address that should receive inquiries.
4. Copy the form endpoint shown in the Integration tab. It looks like:

```text
https://formspree.io/f/abcdwxyz
```

5. Copy the environment template:

```bash
cp .env.example .env.local
```

6. Put only the ID after `/f/` into `.env.local`:

```env
FORMSPREE_FORM_ID=abcdwxyz
```

7. Restart the development server.

The recipient address is managed in the Formspree dashboard, not in this codebase. Never commit `.env.local` to GitHub.

## Production test

```bash
npm run typecheck
npm run build
npm run start
```

Then open `http://localhost:3000`.

## Deploy to Vercel

### GitHub method

1. Create a new GitHub repository.
2. Upload this project.
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the repository.
5. Keep the detected framework as **Next.js**.
6. Add `FORMSPREE_FORM_ID` under **Project Settings → Environment Variables**.
7. Deploy.
8. Review the Vercel preview URL before connecting the live domain.

### Command-line method

```bash
npx vercel
```

For production:

```bash
npx vercel --prod
```

## Safely replace the WordPress site

1. Make a complete WordPress files-and-database backup.
2. Deploy this rebuild to a temporary Vercel URL first.
3. Review all clinical wording, contact details, privacy language, images, partner logos, and testimonials with the site owner.
4. Add or migrate any required Privacy Policy, Accessibility, Terms, cookie-consent, analytics, and HIPAA-related workflows.
5. Test the contact form with the real clinic inbox.
6. Record existing WordPress URLs and create redirects for pages that will change.
7. Add `mindfulneuro.com` and `www.mindfulneuro.com` to the Vercel project.
8. Update DNS only after approval.
9. Keep the WordPress hosting available temporarily in case rollback is required.

## Important content review

The redesign preserves and reorganizes content available on the current public website, but medical wording, credentials, affiliations, patient statements, dates, phone numbers, privacy requirements, and legal disclaimers must be reviewed by the clinic before launch.

## Project structure

```text
app/
  api/contact/route.ts   Contact endpoint
  globals.css            Global styles and animation
  icon.svg               Browser icon
  layout.tsx             SEO metadata and root layout
  page.tsx               Main website
components/
  contact-form.tsx
  header.tsx
  icons.tsx
  logo.tsx
  testimonials.tsx
public/images/           Local website imagery
.env.example             Formspree configuration template
```

## Light and dark appearance

The header includes an appearance toggle. The selected theme is saved in the visitor's browser under `mindful-neuro-theme`. On a visitor's first visit, the site follows their operating-system light/dark preference. No external theme package is required.
