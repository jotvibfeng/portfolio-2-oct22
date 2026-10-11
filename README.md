# Portfolio 2

A responsive multi-page portfolio website built as part of the Noroff CSS
Framework and JavaScript Framework coursework. The site presents three project
case studies: CSS Framework, JavaScript Framework, and Semester Project.

Each project has a teaser card on the home page and a dedicated article page
with a detailed description, image caption, live-site link, README link, and a
copy-link action.

## Features

- Responsive profile, hero, navigation, and project layouts.
- Animated hero and project-card entrances using Motion.
- Dynamic project routes at `/projects/:slug`.
- Individual project pages with image captions, detailed content, and external
  live-site and repository links.
- Copy-link action for sharing a project page.
- Custom not-found page for invalid routes.
- Responsive styling with Tailwind CSS and shadcn/Base UI components.

## Built with

- React
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- shadcn/Base UI
- Motion
- Lucide and React Icons
- Nitro for server deployment output

## Getting started

### Prerequisites

- A current Node.js LTS release
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jotvibfeng/portfolio-2-oct22.git
   ```

2. Move into the project folder:

   ```bash
   cd portfolio-2-oct22
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal, normally:

   ```text
   http://localhost:3000
   ```

## Available scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Starts the local development server.                  |
| `npm run build` | Creates the production build and Nitro server output. |

## Project routes

| Route                            | Purpose                                                         |
| -------------------------------- | --------------------------------------------------------------- |
| `/`                              | Home page with profile, introduction, and project teaser cards. |
| `/projects/css-framework`        | CSS Framework case study.                                       |
| `/projects/javascript-framework` | JavaScript Framework case study.                                |
| `/projects/semester-project`     | Semester Project case study.                                    |

## Updating project content

Project data is stored in [`src/data/projects.ts`](./src/data/projects.ts).
Update each project object to change its title, teaser, article content, live
site URL, repository URL, caption, or image paths.

Place project images in:

```text
public/images/
```

Reference them from the project data with a root-relative path:

```ts
thumbnail: '/images/project-thumbnail.webp',
image: '/images/project.webp',
```

Do not include `/public` in the URL. Images inside `public/` are served from
the website root. For the assignment, keep project images in an accepted image
format and optimise them to 200 KB or less.

## Project structure

```text
src/
  components/
    ui/              Reusable interface components
  data/
    projects.ts      Project case-study content
  routes/
    index.tsx        Home page route
    projects/
      $slug.tsx      Dynamic project article route
  styles.css         Global Tailwind and theme styles
public/
  images/            Portfolio and project images
```

## Deployment

The project uses Nitro to create server deployment output for TanStack Start.
For Vercel:

1. Import this repository into Vercel.
2. Set the **Framework Preset** to **Other**.
3. Use `npm run build` as the build command.
4. Leave the output-directory setting empty so Nitro can supply the correct
   server deployment output.
5. Deploy the latest pushed commit.

## Featured projects

- [CSS Framework](https://css-framework-noroff.vercel.app)
- [JavaScript Framework](https://jsfw-2025-v1-joakim-jsfw-1.vercel.app)
- [Semester Project](https://semster-project-auction-house-9pgf.vercel.app)

## Author

Joakim TViberg Fengaas
