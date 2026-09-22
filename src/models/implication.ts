export interface Implication {
  title: string;
  club: string;
  link: string;
  type: string;
  begin: string;
  end?: string;
  show: boolean;
  tasks: string[];
}

export const implications: Implication[] = [
  {
    title: 'VP Machine',
    club: "Jeux de Génie",
    link: "https://jeuxdegenie.qc.ca",
    type: "compétition",
    begin: "02/2026",
    end: "01/2027",
    show: true,
    tasks: [
      "Implémentation de capteurs et de moteurs",
      "Maintenance d'imprimantes 3D et de stations de soudure",
      "Conception 3D et impression de pièces esthétiques et fonctionnelles",
      "Programmation de microcontrôleurs",
      "Gestion d'équipe et de projet"
    ],
  },
  { 
    title: "Responsable communication (Crieur publique)",
    club: "Fraternité du Piranha", 
    link: "https://www.fraternitedupiranha.com", 
    type: "club étudiant", 
    begin: "10/2025", 
    end: "Actuel", 
    show: true, 
    tasks: [
      "Communication et organisation d'événements",
      "Promotion de l'implication étudiante",
      "Nourir des piranhas",
    ] 
  },
  {
    title: "Gestionnaire de projet",
    club: "Capra",
    link: "https://clubcapra.com",
    type: "club étudiant",
    begin: "04/2026",
    end: "Actuel",
    show: true,
    tasks: [
      "Programmation de robot",
      "Gestion de projet/équipe",
      "Intégration de technologies",
      "Gestion d'équipe et de projet",
    ],
  },
  {
    title: 'Délégué',
    club: "CQI",
    link: "https://cqi-qec.qc.ca",
    type: "compétition",
    begin: "2025, 2026",
    show: true,
    tasks: ["Conception de bot", "Algorithmie et Programmation"],
  },
];
