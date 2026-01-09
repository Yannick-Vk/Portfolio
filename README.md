# Yannick's Portfolio

A personal portfolio built with Astro and React showcasing my projects and skills.

## Live Demo

Explore the live version of my portfolio
here: [https://yannick-vk.github.io/Portfolio/](https://yannick-vk.github.io/Portfolio)

## Features

- **Dynamic Project Showcase:** Browse through a collection of my projects with detailed descriptions.
- **Categorized Skills:** Skills are organized into categories with visual icons for quick overview.
- **Theme-Aware Design:** Supports both light and dark modes for a comfortable viewing experience.
- **Resume/CV Download:** Easily download my resume in PDF format.
- **Responsive Layout:** Optimized for various devices, from mobile to desktop.

## Tech Stack

This project is built using a modern web development stack:

- **Framework:** [Astro](https://astro.build/) - For fast content-focused websites.
- **UI Components:** [React](https://react.dev/) - For interactive user interface elements.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- **Package Manager:** [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have [Bun](https://bun.sh/docs/installation) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://https://github.com/Yannick-VK/portfolio-website.git
   cd portfolio-website
   ```
2. Install dependencies:
   ```bash
   bun install
   ```

### Development Server

Start the development server with hot-reloading:

```bash
bun run dev
```

This will typically run the site at `http://localhost:4321`.

### Build for Production

To build the project for deployment:

```bash
bun run build
```

This command generates a `dist/` directory with all the static assets for your production site.

## Project Structure

A high-level overview of the important directories and files:

- `src/`: Contains all project source code.
    - `pages/`: Defines the site's routes. Each `.astro` file becomes a page.
    - `components/`: Holds reusable UI components, including React (`.tsx`) and Astro (`.astro`) components. Icon
      components are centralized here.
    - `layouts/`: Contains master templates for page layouts.
    - `data/`: Stores content collections, such as the Markdown files for individual projects.
    - `styles/`: Global stylesheets.
- `public/`: For static assets like images, fonts, and PDFs (e.g., `Yannick-Resume.pdf`) that are served directly.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a
pull request.

## License

This project is licensed under the [MIT License](LICENSE).
