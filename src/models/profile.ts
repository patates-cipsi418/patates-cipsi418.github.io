import { ContactInfo, contacts } from "./contactInfo";
import { Job, jobs } from "./job";
import { School, schools } from "./school";
import { SkillGroup, skillGroups } from "./skillGroup";
import { Implication, implications } from "./implication";
import { Project, projects } from "./projects";

export interface Profile {
  name: string;
  description: string;
  contacts: ContactInfo[];
  jobs: Job[];
  schools: School[];
  implications: Implication[];
  personalSkills: string[];
  skillGroups: SkillGroup[];
  interests: string[];
  languages: string[];
  projects: Project[];
}

export const profile: Profile = {
  name: "DENIS TURK",
  description:
    "Étudiant travailleur et déterminé, je m’investis pleinement pour obtenir des résultats concrets dans chacun de mes projets. " +
    "Passionné par la technologie et la programmation, j’ai eu l’occasion, au cours de mes expériences précédentes, de développer mes compétences en optimisant mon travail et en améliorant les processus en place. " +
    "Les postes que j’ai occupés, tant lors de mes emplois que de mon stage, m’ont permis de renforcer mon autonomie, mon sens du jugement et ma capacité d’adaptation face aux imprévus. " +
    "Par ailleurs, j’accorde une grande importance à la coopération et au travail d’équipe, essentiels à la réussite collective.",
  contacts: contacts,
  jobs: jobs,
  schools: schools,
  personalSkills: [
    "Autonomie / Adaptation",
    "Communication",
    "Créativité",
    "Esprit critique",
    "Résolution de problèmes",
    "Travail en équipe",
  ],
  skillGroups: skillGroups,
  implications: implications,
  interests: ["Jeux Vidéo", "Cuisine", "Montage", "Programmation"],
  languages: ["Français", "Anglais"],
  projects: projects,
};
