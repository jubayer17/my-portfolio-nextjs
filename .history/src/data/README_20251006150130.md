# Data Organization Structure

This folder contains all the data used throughout the portfolio application, organized into separate modules for better maintainability and reusability.

## Data Structure Overview

```
src/data/
├── index.ts                    # Barrel exports for easy imports
├── about.ts                    # About section data
├── contact.ts                  # Contact information and content
├── hero.ts                     # Hero section content and animations
├── navigation.ts               # Navigation menu items
├── projects.ts                 # Project information and details
├── skills.ts                   # Skills categories and items
├── socialLinks.ts              # Social media links
└── README.md                   # This documentation
```

## Data Files Description

### 1. **about.ts**

Contains all data for the About section:

- `statsData`: Statistics displayed (experience, projects, problems solved)
- `highlightsData`: Key skill highlights
- `aboutContent`: Descriptive text content for introduction, specialization, and personal info

### 2. **contact.ts**

Contains contact section data:

- `contactData`: Contact information (email, location, phone)
- `contactContent`: Section title and description

### 3. **hero.ts**

Contains hero section content:

- `heroContent`: Name, title, description, achievements, availability status
- `heroButtons`: Button configurations (primary and secondary)
- `codeParticleIcons`: Array of FontAwesome icons for animated background
- `floatingIcons`: Array of tech icons for floating animations

### 4. **navigation.ts**

Contains navigation menu configuration:

- `navigationItems`: Array of navigation menu items with icons and labels

### 5. **projects.ts**

Contains project showcase data:

- `Project` interface: TypeScript interface for project structure
- `projectsData`: Array of featured projects with descriptions, technologies, and links

### 6. **skills.ts**

Contains skills section data:

- `Skill` interface: TypeScript interface for individual skills
- `SkillCategory` interface: TypeScript interface for skill categories
- `skillsData`: Array of skill categories (Frontend, Backend, Tools & Others)

### 7. **socialLinks.ts**

Contains social media links:

- `socialLinksData`: Social links for hero section
- `footerSocialData`: Social links for footer section

## TypeScript Interfaces

### Core Interfaces

```typescript
// Skills
interface Skill {
  name: string;
  icon: string;
  class: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  animationClass: string;
  skills: Skill[];
}

// Projects
interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  animationClass?: string;
}

// Social Links
interface SocialLink {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}

// Navigation
interface NavigationItem {
  id: string;
  icon: string;
  label: string;
}

// Contact
interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isLink?: boolean;
}

// About
interface StatData {
  icon: string;
  label: string;
}
```

## Data Usage Examples

### Using Skills Data

```typescript
import { skillsData, Skill, SkillCategory } from "../data";

// Access all skill categories
skillsData.forEach((category: SkillCategory) => {
  console.log(category.title);
  category.skills.forEach((skill: Skill) => {
    console.log(skill.name);
  });
});
```

### Using Project Data

```typescript
import { projectsData, Project } from "../data";

// Access project information
projectsData.forEach((project: Project) => {
  console.log(project.title, project.technologies);
});
```

### Using Hero Content

```typescript
import { heroContent, heroButtons, codeParticleIcons } from "../data";

// Access hero information
console.log(heroContent.name);
console.log(heroButtons.primary.text);
```

## Adding New Data

### Adding a New Skill Category

```typescript
// In skills.ts
const newCategory: SkillCategory = {
  title: "Design",
  icon: "fas fa-palette",
  animationClass: "animate-on-scroll-scale",
  skills: [
    { name: "Photoshop", icon: "fab fa-adobe", class: "photoshop" },
    { name: "Illustrator", icon: "fab fa-adobe", class: "illustrator" },
  ],
};

// Add to skillsData array
```

### Adding a New Project

```typescript
// In projects.ts
const newProject: Project = {
  title: "My New Project",
  description: "Description of the project",
  image: "/assets/project-image.png",
  imageAlt: "Project Screenshot",
  icon: "fas fa-rocket",
  technologies: ["React", "TypeScript", "Node.js"],
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/username/repo",
  animationClass: "animate-on-scroll-left",
};

// Add to projectsData array
```

### Adding New Social Links

```typescript
// In socialLinks.ts
const newSocialLink: SocialLink = {
  href: "https://platform.com/username",
  icon: "fab fa-platform",
  label: "Platform Name",
  external: true,
};

// Add to socialLinksData or footerSocialData arrays
```

## Benefits of This Structure

1. **Separation of Concerns**: Data is separated from UI components
2. **Type Safety**: Full TypeScript support with proper interfaces
3. **Maintainability**: Easy to update content without touching component code
4. **Reusability**: Data can be shared across multiple components
5. **Scalability**: Easy to add new data types and categories
6. **Single Source of Truth**: All content centralized in one place
7. **Consistency**: Standardized data structures across the application

## Best Practices

1. **Always use TypeScript interfaces** for type safety
2. **Group related data** in the same file
3. **Use descriptive names** for data properties
4. **Include optional fields** where appropriate (liveUrl?, githubUrl?)
5. **Maintain consistency** in naming conventions
6. **Export interfaces** along with data for component usage
7. **Document any special requirements** or dependencies

This data structure makes the portfolio highly maintainable and allows for easy content updates without modifying component code.
