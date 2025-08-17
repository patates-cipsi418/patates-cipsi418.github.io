export interface School {
  title: string;
  name: string;
  link: string;
  city: string;
  begin: string;
  end: string;
  show: boolean;
  tasks: Task[];
}

export interface Task {
  title: string;
  link?: string;
}

export const schools: School[] = [
  {
    title: "Baccalauréat en génie logiciel",
    name: "École de technologie supérieure",
    link: "https://www.etsmtl.ca/etudes/premier-cycle/baccalaureat-genie-logiciel",
    city: "Montréal, Qc",
    begin: "09/2023",
    end: "En cours",
    show: true,
    tasks: [
      { title: "Club Capra - Robotique", link: "https://clubcapra.com" },
      { title: "CQI - Programmation", link: "https://cqi-qec.qc.ca" },
      { title: "Comité d'intégration 2024, 2025" },
    ],
  },
  {
    title: "Techniques de l’informatique (420.B0)",
    name: "Cégep de Granby",
    link: "https://cegepgranby.ca/programme/dec-techniques-de-linformatique/",
    city: "Granby, Qc",
    begin: "01/2020",
    end: "05/2023",
    show: true,
    tasks: [{ title: "Badminton" }, { title: "Tutorat en Web" }],
  },
  {
    title: "Immersion anglaise",
    name: "École Secondaire Verbe Divin",
    link: "https://verbedivin.com",
    city: "Granby, Qc",
    begin: "09/2013",
    end: "06/2019",
    show: false,
    tasks: [{ title: "Mathématique des Sciences Naturels" }],
  },
];
