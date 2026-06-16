
# My Portfolio

## Features

- Light / Dark Themes
- Headless CMS
- Cool background
- Profile page
- Skills page
- Projects page
- Contact form
- Download Resume

## Tech Stack

### Client

- Typescript
- React
- Next.js
- Tailwind

### Server

- Next.js
- Strapi CMS

## Run locally

1. Clone the project.

2. Go to the project directory:

    ```bash
      cd portfolio
    ```

3. Copy `.env.example` to `.env.local` and update environment variables

    ```bash
      cp .env.example .env.local
    ```

4. Install dependencies:

    ```bash
      pnpm install
      # or
      yarn install
      # or
      npm install
    ```

5. Run the development server:

    ```bash
      pnpm dev
      # or
      yarn dev
      # or
      npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API Routes can be accessed on [http://localhost:3000/api](http://localhost:3000/api)

## Build project

To build the project for production usage, run the following command:

```bash
  pnpm build
  # or
  yarn build
  # or
  npm run build
```

It will create a `.next` folder in root folder with all static files.

## Start project in production

To start the app in production, make sure you have built the project with the build command from the previous section, then run the following command:

```bash
  pnpm start
  # or
  yarn start
  # or
  npm start
```

## Routing

This project use [Next.js 13 App Router](https://beta.nextjs.org/docs/routing/fundamentals) built on top of React Server Components.

[Client Routes](https://beta.nextjs.org/docs/routing/defining-routes) are located in the folder `src/app`.

[API Routes](https://beta.nextjs.org/docs/routing/route-handlers) are located in the folder `src/pages/api`.
