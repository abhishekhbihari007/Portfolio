# Portfolio Project

A Next.js portfolio project with TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

This project follows the shadcn/ui project structure:
- **Components**: Located in `/components/ui` - This is the standard location for shadcn/ui components
- **Utilities**: Located in `/lib/utils.ts` - Contains utility functions like `cn()` for className merging
- **Styles**: Located in `/app/globals.css` - Global Tailwind CSS styles and CSS variables

## Why `/components/ui`?

The `/components/ui` folder is the default location for shadcn/ui components. This structure:
- Keeps UI components organized and separate from page-specific components
- Follows shadcn/ui conventions, making it easier to add/remove components via CLI
- Maintains consistency with the shadcn/ui ecosystem
- Makes components easily reusable across the application

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js, React, TypeScript
- Tailwind CSS and related plugins
- shadcn/ui dependencies (clsx, tailwind-merge, class-variance-authority)
- Spline 3D components (@splinetool/runtime, @splinetool/react-spline)
- Framer Motion for animations

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### 3. Using shadcn/ui CLI (Optional)

If you want to add more shadcn/ui components in the future:

```bash
npx shadcn@latest add [component-name]
```

The `components.json` file is already configured, so components will automatically be added to `/components/ui`.

## Project Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom theme
- ✅ shadcn/ui component structure
- ✅ Spline 3D integration
- ✅ Framer Motion animations
- ✅ Spotlight effect component

## Components

### SplineScene
Located in `/components/ui/splite.tsx` - A wrapper component for Spline 3D scenes with loading state.

### SplineSceneBasic
Located in `/components/ui/demo.tsx` - A demo component showcasing the SplineScene with a spotlight effect.

### Card
Located in `/components/ui/card.tsx` - shadcn/ui Card component.

### Spotlight
Located in `/components/ui/spotlight.tsx` - Spotlight effect component from Aceternity UI.

## Build for Production

```bash
npm run build
npm start
```

