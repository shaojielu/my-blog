# My Personal Blog

This is a personal blog project built with Next.js, React, and Tailwind CSS. It's designed to be a simple and clean platform for publishing articles written in Markdown.

## Features

- **Next.js 15 App Router**: Modern, fast, and server-centric application structure.
- **MDX/Markdown Support**: Write blog posts using `.md` or `.mdx` files.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: For type safety and improved developer experience.
- **RSS Feed**: Automatically generated RSS feed for your posts.
- **Sitemap**: `sitemap.ts` for better SEO.
- **Dynamic OG Images**: `og/route.tsx` for generating social media preview images.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your system.

### Installation

1.  Clone the repository:
    ```sh
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd my-blog/blog
    ```
3.  Install the dependencies:
    ```sh
    pnpm install
    ```

### Running the Development Server

To start the development server, run the following command:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page will auto-update as you edit the files.

## Available Scripts

In the project directory, you can run:

-   `pnpm dev`: Runs the app in development mode.
-   `pnpm build`: Builds the app for production to the `.next` folder.
-   `pnpm start`: Starts a Next.js production server.

## Project Structure

-   `app/`: Contains all the routes, pages, and components for the application.
-   `app/blog/posts/`: Your blog posts live here as `.md` or `.mdx` files.
-   `app/components/`: Shared React components used across the application.
-   `public/`: Static assets like images and fonts.
-   `package.json`: Lists the project dependencies and scripts.
-   `tsconfig.json`: TypeScript compiler configuration.
-   `postcss.config.js`: PostCSS configuration, used by Tailwind CSS.