export interface NavigationItem {
  id: string;
  icon: string;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", icon: "fas fa-home", label: "Home" },
  { id: "about", icon: "fas fa-user", label: "About" },
  { id: "skills", icon: "fas fa-tools", label: "Skills" },
  { id: "projects", icon: "fas fa-folder-open", label: "Projects" },
  { id: "contact", icon: "fas fa-envelope", label: "Contact" },
];
