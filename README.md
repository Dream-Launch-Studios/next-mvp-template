# Next.js MVP Template

A full-stack web application template built with the [T3 Stack](https://create.t3.gg/). This template provides a solid foundation for building scalable, type-safe web applications with modern technologies.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for building full-stack web applications
- [NextAuth.js](https://next-auth.js.org) - Authentication for Next.js
- [Prisma](https://prisma.io) - Type-safe ORM for database access
- [Drizzle](https://orm.drizzle.team) - TypeScript ORM alternative
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com) - Re-usable UI components built with Radix UI and Tailwind
- [TypeScript](https://www.typescriptlang.org) - Static typing for JavaScript

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or newer)
- [pnpm](https://pnpm.io/) (v9.15.4 or newer)
- [PostgreSQL](https://www.postgresql.org/) (or use the included Docker setup)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/next-mvp-template.git
   cd next-mvp-template
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up your environment variables
   ```bash
   cp .env.example .env
   ```
   
4. Start the development database
   ```bash
   chmod +x start-database.sh
   ./start-database.sh
   ```

5. Run database migrations
   ```bash
   pnpm db:migrate
   ```

6. Start the development server
   ```bash
   pnpm dev
   ```

## Development Scripts

- `pnpm dev` - Start the development server with Turbo
- `pnpm build` - Build for production
- `pnpm start` - Start the production server
- `pnpm preview` - Build and preview the production build
- `pnpm lint` - Check for linting issues
- `pnpm lint:fix` - Fix linting issues
- `pnpm typecheck` - Check for TypeScript errors
- `pnpm db:generate` - Generate Prisma client after schema changes
- `pnpm db:push` - Push schema changes to the database
- `pnpm db:studio` - Open Prisma Studio to manage your database
- `pnpm format:check` - Check formatting
- `pnpm format:write` - Fix formatting issues

## Project Structure

```
next-mvp-template/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # Reusable components
│   │   └── ui/        # Shadcn UI components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and libraries
│   ├── server/        # Server-side code
│   ├── styles/        # Global styles
│   └── env.js         # Environment variables schema
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets
└── scripts/           # Utility scripts
```

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## Deployment

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.