export interface Job {
  title: string;
  buisness: string;
  link: string;
  city: string;
  type: string;
  begin: string;
  end: string;
  show: boolean;
  tasks: string[];
}

export const jobs: Job[] = [
  {
    title: "Programmeur en automatisation et robotique",
    buisness: "GE Aerospace Bromont",
    link: "https://gebromont.ca",
    city: "Bromont, Qc",
    type: "Stage",
    begin: "05/2025",
    end: "08/2025",
    show: true,
    tasks: [
      "Conception de services de transfert de données",
      "Maintenance d'une application d'inspection",
      "Intégration d'outils haptiques avec wrapper c++/c#",
      "Simulation d'un environnement dans un moteur de jeu",
    ],
  },
  {
    title: "Programmeur en automatisation et robotique",
    buisness: "GE Aerospace Bromont",
    link: "https://gebromont.ca",
    city: "Bromont, Qc",
    type: "Stage",
    begin: "01/2024",
    end: "08/2024",
    show: true,
    tasks: [
      "Conception de services web et d'applications de bureau",
      "Intégration standard d'outils de mesures",
      "Recherche et développement de solutions de communication",
      "Développemnt d'une application web",
    ],
  },
  {
    title: "Programmeur, Technicien en informatique",
    buisness: "Mat Tech",
    link: "https://mattech.ca",
    city: "Granby, Qc",
    type: "Stage",
    begin: "01/2023",
    end: "08/2023",
    show: true,
    tasks: [
      "Maintenance du système informatique.",
      "Programmation d'outil facilitant le travail et augmentant la productivité.",
      "Assurer la sécurité de l'information.",
    ],
  },
  {
    title: "Commis de charcuterie",
    buisness: "IGA Extra Bromont Famille Patry / Lambert",
    link: "https://www.facebook.com/IGALambertBromont/",
    city: "Bromont, Qc",
    type: "Temps partiel",
    begin: "03/2021",
    end: "01/2023",
    show: true,
    tasks: [
      "Contrôle de l'inventaire pour répondre à la demande des clients.",
      "Disposition des produits dans le magasin.",
      "Réponse aux questions et suggestion de produits complémentaires.",
    ],
  },
  {
    title: "Journalier de production",
    buisness: "KDC/ONE",
    link: "https://www.kdc-one.com",
    city: "Knowlton, Qc",
    type: "Contrat / Temps plein",
    begin: "06/2020",
    end: "08/2020",
    show: false,
    tasks: [
      "Conditionnement et à l'emballage du produit.",
      "Étiquetage et à la manutention générale sur le plancher de production.",
      "Maintenance de l'environnement de travail sécuritaire et appliquer les normes en vigueur.",
    ],
  },
  {
    title: "Cuisinier",
    buisness: "Pizza Lac Brome / Familial",
    link: "https://maps.app.goo.gl/fUkdsj2YVcMB5L9i7",
    city: "Knowlton, Qc",
    type: "Temps partiel",
    begin: "01/2014",
    end: "05/2020",
    show: false,
    tasks: [
      "Confection des commandes de manière efficace.",
      "Assurer la conformité des commandes.",
      "Préparation des ingrédients.",
    ],
  },
];
