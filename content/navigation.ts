import type { NavigationItem } from "@/lib/content/types";

export const primaryNav: NavigationItem[] = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Perspective", href: "/perspective" },
  { label: "Our Story", href: "/our-story" },
  { label: "Collective", href: "/collective" },
];

export const primaryCta: NavigationItem = {
  label: "Start a Project",
  href: "/connect/start-a-project",
};

export const footerNav = {
  worlds: [
    { label: "Create", href: "/capabilities/create" },
    { label: "Build", href: "/capabilities/build" },
    { label: "Grow", href: "/capabilities/grow" },
  ],
  explore: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Solutions", href: "/solutions" },
    { label: "Work", href: "/work" },
    { label: "Perspective", href: "/perspective" },
    { label: "Our Story", href: "/our-story" },
    { label: "Collective", href: "/collective" },
    { label: "Careers", href: "/careers" },
  ],
  connect: [
    { label: "Start a Project", href: "/connect/start-a-project" },
    { label: "Discovery", href: "/connect/discovery" },
    { label: "Partnerships", href: "/connect/partnerships" },
    { label: "General", href: "/connect/general" },
    { label: "Support", href: "/connect/support" },
    { label: "India", href: "/connect/india" },
    { label: "Canada", href: "/connect/canada" },
  ],
  legal: [
    { label: "Privacy", href: "/connect/general" },
    { label: "Terms", href: "/connect/general" },
    { label: "Accessibility", href: "/connect/general" },
  ],
};
