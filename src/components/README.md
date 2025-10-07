# Portfolio Component Structure

This portfolio application has been modularized into small, reusable components for better maintainability and organization.

## Component Hierarchy

```
src/
├── app/
│   ├── page.tsx                    # Main Portfolio component (orchestrates all sections)
│   ├── layout.tsx                  # Root layout with metadata and fonts
│   └── globals.css                 # Global styles and CSS variables
├── components/
│   ├── index.ts                    # Barrel exports for easy imports
│   ├── ClientScript.tsx            # Client-side interactive features
│   ├── Navbar.tsx                  # Navigation bar with mobile menu
│   ├── HeroSection.tsx             # Hero section with animations
│   ├── AboutSection.tsx            # About me section
│   ├── SkillsSection.tsx           # Skills and technologies showcase
│   ├── ProjectsSection.tsx         # Featured projects display
│   ├── ContactSection.tsx          # Contact form and information
│   ├── Footer.tsx                  # Footer with social links
│   └── ui/                         # Reusable UI components
│       ├── ScrollProgressIndicator.tsx
│       ├── TechBackgroundAnimation.tsx
│       ├── SocialLinks.tsx
│       ├── StatItem.tsx
│       ├── HighlightItem.tsx
│       ├── SkillItem.tsx
│       ├── SkillCategory.tsx
│       ├── TechTag.tsx
│       ├── ProjectCard.tsx
│       ├── ContactItem.tsx
│       └── ContactForm.tsx
└── types/
    └── globals.d.ts                # TypeScript global declarations
```

## Main Sections

### 1. **Navbar** (`Navbar.tsx`)

- Responsive navigation with mobile hamburger menu
- Active section highlighting
- Dark mode toggle
- Logo with smooth scrolling navigation

### 2. **HeroSection** (`HeroSection.tsx`)

- Animated tech background with floating icons
- Hero content with typing animation
- Social links and call-to-action buttons
- Uses: `TechBackgroundAnimation`, `SocialLinks`

### 3. **AboutSection** (`AboutSection.tsx`)

- Profile image with hover effects
- Statistics cards showing experience
- Highlight items for key skills
- Uses: `StatItem`, `HighlightItem`

### 4. **SkillsSection** (`SkillsSection.tsx`)

- Three skill categories (Frontend, Backend, Tools)
- Animated skill items with icons
- Responsive grid layout
- Uses: `SkillCategory`, `SkillItem`

### 5. **ProjectsSection** (`ProjectsSection.tsx`)

- Featured project cards with images
- Technology tags and project links
- Hover effects and animations
- Uses: `ProjectCard`, `TechTag`

### 6. **ContactSection** (`ContactSection.tsx`)

- Contact information display
- Interactive contact form
- Responsive two-column layout
- Uses: `ContactItem`, `ContactForm`

### 7. **Footer** (`Footer.tsx`)

- Developer information
- Social media links
- Copyright information

## UI Components

### Core UI Components (`ui/`)

1. **ScrollProgressIndicator** - Shows page scroll progress
2. **TechBackgroundAnimation** - Animated background with floating tech icons
3. **SocialLinks** - Reusable social media links component
4. **StatItem** - Statistics display for about section
5. **HighlightItem** - Highlight badges for skills
6. **SkillItem** - Individual skill with icon and name
7. **SkillCategory** - Container for grouped skills
8. **TechTag** - Technology badges for projects
9. **ProjectCard** - Complete project showcase card
10. **ContactItem** - Contact information display
11. **ContactForm** - Interactive contact form

## Key Features

- **Modular Architecture**: Each section is a separate component
- **Reusable UI Components**: Small, focused components in `/ui` folder
- **TypeScript Support**: Full type safety with proper interfaces
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Mode**: Theme switching with localStorage persistence
- **Smooth Animations**: Intersection Observer for scroll animations
- **SEO Optimized**: Meta tags and semantic HTML structure

## Props & Interfaces

Each component uses TypeScript interfaces for type safety:

```typescript
// Example interfaces
interface NavbarProps {
  activeSection: string;
  scrollProgress: number;
  darkMode: boolean;
  onNavigate: (sectionId: string) => void;
  onToggleDarkMode: () => void;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

## Data Management

- **Static Data**: Project info, skills, and contact details are defined as constants
- **State Management**: React hooks for theme, active section, and scroll progress
- **Local Storage**: Theme preferences persist across sessions

## Styling Approach

- **CSS Variables**: For consistent theming and dark mode
- **Utility Classes**: For animations and responsive behavior
- **Component-Specific**: Scoped styles using CSS classes
- **Font Integration**: Google Fonts (Inter, Outfit, JetBrains Mono)

## Benefits of This Structure

1. **Maintainability**: Easy to update individual sections
2. **Reusability**: UI components can be used across different sections
3. **Testing**: Each component can be tested independently
4. **Performance**: Code splitting and lazy loading potential
5. **Scalability**: Easy to add new sections or modify existing ones
6. **Developer Experience**: Clear separation of concerns and TypeScript support

This modular approach makes the portfolio highly maintainable and allows for easy expansion or modification of individual features without affecting the entire application.
