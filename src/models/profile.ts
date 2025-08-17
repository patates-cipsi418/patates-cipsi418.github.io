import { ContactInfo, contacts } from "./contactInfo";
import { Job, jobs } from "./job";
import { School, schools } from "./school";
import { SkillGroup, skillGroups } from "./skillGroup";
import { Implication, implications } from "./implication";

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
}

export const profile: Profile = {
  name: "DENIS TURK",
  description:
    "Éutudiant travailleur et déterminer à obtenir des résultats partout où je travaille. J'ai pu accroitre l'efficacité de certains processus' à mon stage, comme l'entrée automatique de données dans un formulaire à partir d'un objet dans la base de données. En fait, les postes qui m'ont été attribués à mes emplois antérieurs et à mon stage m'ont permis de pratiquer mon autonomie, mon jugement et à m'adapter aux imprévus. Cependant, la coopération était autant importante pour le travail d'équipe. J'ai présentement un intérêt pour la robotique.",
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
};
