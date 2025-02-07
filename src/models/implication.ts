export interface Implication {
  title: string;
  link: string;
  type: string;
  begin: string;
  end?: string;
  show: boolean;
  tasks: string[];
}

export const implications: Implication[] = [
  {
    title: "Capra",
    link: "https://clubcapra.com",
    type: "club étudiant",
    begin: "09/2023",
    end: "Actuel",
    show: true,
    tasks: [
      "Programmation de robot",
      "Gestion de projet/équipe",
      "Intégration de technologies",
    ],
  },
  {
    title: "CQI",
    link: "https://cqi-qec.qc.ca",
    type: "compétition",
    begin: "01/2025",
    show: true,
    tasks: ["Conception de bot", "Algorithmie", "Programmation"],
  },
];
