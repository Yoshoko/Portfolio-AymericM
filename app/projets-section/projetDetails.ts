export type ProjetProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  available: boolean;
};

export const devProjets = [
  {
    id: 0,
    name: "MicroCars",
    description:
      "Ce projet UX/UI design moderne et intuitif est destiné à présenter un catalogue interactif dédié aux microcars innovantes.",
    technologies: ["Figma", "Photoshop", "Adobe XD"],
    github: "https://www.youtube.com/watch?v=A1E8sE9blDA",
    image: require(".//../../public/projects/microcar.png"),
    available: true,
  },
  {
    id: 1,
    name: "Mérovingiens",
    description:
      "Création d'un site web pour un restaurant, conçu pour refléter son identité culinaire à travers une navigation fluide et un design immersif.",
    technologies: ["Figma", "Photoshop", "Adobe XD"],
    github: "https://www.youtube.com/watch?v=l_Xq-jnoq3Y",
    image: require(".//../../public/projects/lesmerovingiens.png"),
    available: true,
  },
  {
    id: 2,
    name: "Plasir Gourmet",
    description:
      "Création d’un site web pour Plaisir Gourmet, cuisinier à domicile, conçu pour refléter son univers culinaire à travers une navigation fluide et un design chaleureux.",
    technologies: ["Figma", "Illustrator", "React"],
    github: "https://github/yoshoko",
    image: require(".//../../public/projects/jeu.png"),
    available: true,
  },
  {
    id: 3,
    name: "Plaisir Gourmet",
    description:
      "Conception d'un site web sur mesure pour un chef à domicile, avec pour objectif de refléter son identité culinaire unique, mettre en valeur ses prestations et faciliter les réservations.",
    technologies: ["React", "Tailwind CSS", "Gsap"],
    github: "https://www.youtube.com/watch?v=l_Xq-jnoq3Y",
    image: require(".//../../public/projects/gilles.png"),
    available: true,
  },
  
];
