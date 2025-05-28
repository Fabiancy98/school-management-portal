# School Management Portal - Architecture

## Overview
This document outlines the architecture of the School Management Portal, a Next.js-based web application.

## Tech Stack
- **Frontend Framework**: Next.js 15.3.2 with React 19
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Package Manager**: npm

## Project Structure
```
/
├── app/                    # Next.js app directory
├── public/                 # Static files
├── node_modules/           # Dependencies
├── .gitignore
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
└── eslint.config.mjs      # ESLint configuration
```

## Key Features
- Server-side rendering (SSR) with Next.js
- Type-safe development with TypeScript
- Responsive design with Tailwind CSS
- Modern React features (Hooks, Server Components)

## Development Workflow
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`
4. Start production server: `npm start`

## Deployment
- The application is configured for Vercel deployment
- Environment variables should be set in the deployment environment
