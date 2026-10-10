import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "chafik-charobim",
    title: "Chafik Charobim",
    year: 2025,
    company: "Ntsal",
    description:
      "Digital archive for Egyptian painter Chafik Charobim, with bilingual support and category-based artwork filtering.",
    image: "/images/projects/chafik-charobim.webp",
    url: "https://charobim.art",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Pinia"],
  },
  {
    id: "marsa-baghush",
    title: "Marsa Baghush",
    year: 2026,
    company: "Ntsal",
    description:
      "Luxury real estate website for a North Coast villa development, with cluster and unit browsing, facilities filtering, and Meta Pixel tracking.",
    image: "/images/projects/marsa-baghush.webp",
    url: "https://marsabaghush.com",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Pinia", "JavaScript"],
  },
  {
    id: "design-avenue",
    title: "Design Avenue",
    year: 2026,
    company: "Ntsal",
    description:
      "Website for a design studio specializing in interior, architecture, and landscape, with categorized work pages and individual project showcases.",
    image: "/images/projects/design-avenue.webp",
    url: "https://thedesignavenue.net",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Pinia", "JavaScript"],
  },
  {
    id: "the-local-show",
    title: "The Local Show",
    year: 2026,
    company: "Ntsal",
    description:
      "Digital docuseries website showcasing Egyptian architectural landmarks, featuring CMS-driven episode layouts, interactive storytelling, and custom navigation.",
    image: "/images/projects/the-local-show.webp",
    url: "https://www.thelocalshow.net",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Pinia"],
  },
];
