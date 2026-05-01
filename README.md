<h1 align="center">sahilk.</h1>

<p align="center">
  A clean, minimal portfolio for my work, blogs, and journey as a frontend engineer.
</p>

<p align="center">
  <a href="https://sahilk.vercel.app/">Portfolio</a>
  ·
  <a href="https://drive.google.com/file/d/1gn0mdWCvPLU4E7scyytXGku4VhFIZNQ9/view?usp=drive_link">Resume</a>
  ·
  <a href="mailto:sahil511kumar@gmail.com">Email</a>
  ·
  <a href="https://www.linkedin.com/in/sahi11k/">LinkedIn</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111111" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

## About

Namaste, I'm Sahil, a frontend engineer focused on building thoughtful web experiences and scalable data visualization tools.

For the past 4+ years, I have been working at Playsimple Games, where I craft interactive dashboards, charts, and frontend systems that make data easier to understand and act on. Outside of work, I enjoy photography, trekking, and building small products that make everyday workflows better.

## Featured Projects

| Project | Description | Stack | Links |
| --- | --- | --- | --- |
| Kaizen | A personal growth app for Pomodoro sessions, journaling, habit tracking, and productivity analytics. | React, Supabase, Chart.js, Vite | [Live](https://gokaizen.app/) · [Code](https://github.com/sahi11k/kaizen) |
| Lyrics Finder | A lightweight web app for quickly searching and reading song lyrics with a clean interface. | React, Context API, Musixmatch API | [Live](https://lyric-finderr.vercel.app/) · [Code](https://github.com/sahi11k/lyricFinder) |
| Personal Portfolio | This website, built as a living home for my projects, blogs, resume, and professional story. | Next.js, Tailwind CSS, TypeScript | [Live](https://sahilk.vercel.app/) · [Code](https://github.com/sahi11k/portfolio) |

## Tech Stack

- **Framework:** Next.js, React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** JSON content files in `src/content`
- **Blogs:** Dev.to API
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

For a production check:

```bash
npm run build
```

## Updating Content

Most portfolio content lives in `src/content`, so regular updates do not require touching React components.

- Update hero text, metadata, email, and resume link in `src/content/profile.json`.
- Update project cards in `src/content/projects.json`.
- Update work and education highlights in `src/content/highlights.json`.
- Replace screenshots in `public/images`, or update the matching `image` field in the content JSON.

The resume button uses the Google Drive link from `src/content/profile.json`. Keep the Drive file permission set to "Anyone with the link can view".

## Connect

- Portfolio: [sahilk.vercel.app](https://sahilk.vercel.app/)
- GitHub: [github.com/sahi11k](https://github.com/sahi11k)
- LinkedIn: [linkedin.com/in/sahi11k](https://www.linkedin.com/in/sahi11k/)
- Email: [sahil511kumar@gmail.com](mailto:sahil511kumar@gmail.com)
