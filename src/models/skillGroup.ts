export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Langage de conception/programmation",
    skills: ["HTML / CSS", "JavaScript", "Java", "C#", "SQL", "C++"],
  },
  {
    name: "Framework",
    skills: [
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "VueJS / Vuetify",
      "WPF MVVM",
    ],
  },
  {
    name: "Logiciels",
    skills: [
      "Visual Studio 2019, 2022",
      "Visual Studio Code",
      "ROS",
      "IntelliJ IDEA",
      "Android Studio",
    ],
  },
  {
    name: "Systèmes d'exploitation",
    skills: ["Windows 10, 11, Server", "Ubuntu"],
  },
  {
    name: "Méthode",
    skills: ["Agile", "Scrum", "DevOps"],
  },
];
