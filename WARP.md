# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for Softec Technologies, built with TypeScript, React 19, and Tailwind CSS 4. The project uses the App Router architecture.

## Development Commands

### Core Commands
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

### Type Checking
While there's no dedicated `typecheck` script, TypeScript validation happens during:
- Development (via Next.js dev server)
- Build process (`npm run build`)

To explicitly check types: `npx tsc --noEmit`

## Architecture

### Directory Structure
The codebase follows Next.js App Router conventions with a modular component architecture:

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── layout.tsx    # Root layout with Navbar and Footer
│   └── page.tsx      # Homepage (renders Hero component)
├── components/
│   ├── ui/           # Reusable UI components (Button, etc.)
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── features/     # Feature-specific components (Hero, etc.)
├── lib/              # Utility functions and helpers
├── hooks/            # Custom React hooks (currently empty)
├── services/         # API services and external integrations (currently empty)
└── types/            # TypeScript type definitions (currently empty)
```

### Key Architectural Patterns

**Component Organization**:
- `ui/` - Generic, reusable UI components built with `class-variance-authority` for variant management
- `layout/` - Structural components that define page layouts (Navbar, Footer)
- `features/` - Business logic components tied to specific features or pages

**Styling System**:
- Tailwind CSS 4 with PostCSS plugin
- `cn()` utility in `lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional class management
- UI components use `class-variance-authority` (CVA) for type-safe variant props

**Path Aliases**:
- `@/*` maps to `src/*` for clean imports
- Example: `import { Button } from "@/components/ui/button"`

**Client/Server Components**:
- Interactive components (like Navbar with state) are marked `"use client"`
- Default is Server Components for better performance

### Styling Conventions
- Tailwind utility classes are preferred over custom CSS
- Components use the `cn()` utility for merging class names
- UI components expose variant props through CVA for consistent styling APIs

### Dependencies
- **UI**: `class-variance-authority`, `lucide-react` (icons), `tailwind-merge`, `clsx`
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4 with PostCSS
- **Type Safety**: TypeScript with strict mode enabled

## Code Standards

### TypeScript
- Strict mode is enabled
- Use `type` for props and interfaces
- Target: ES2017

### Component Patterns
- Use `React.forwardRef` for components that need ref forwarding (see Button)
- Export both component and related utilities (e.g., `buttonVariants`)
- Prefer named exports over default exports for components (except page components)

### Imports
- Always use `@/` path alias for src imports
- Keep imports organized: external deps → internal components → utilities
