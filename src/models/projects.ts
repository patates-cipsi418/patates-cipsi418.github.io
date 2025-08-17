export interface Project {
  name: string;
  description: string;
  contribution?: string[];
  technologies: string[];
  link?: string;
}
export const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "Site web personnel pour présenter mes compétences et mes projets.",
    technologies: ["TypeScript", "Vue"],
    link: "",
  },
  {
    name: "Control Board",
    description:
      "Un PCB pour contrôler des éléments d'un robot comme des lumières et des moteurs.",
    contribution: ["Programmation de la carte."],
    technologies: ["C++", "Arduino", "CAN Bus"],
    link: "https://github.com/clubcapra/control_board",
  },
  {
    name: "Outil de configuration de ODrive",
    description:
      "Un outil pour configurer les paramètres de ODrive, calibrer et tester.",
    contribution: [
      "Programmation des outils de configuration.",
      "Programmation du contrôle de moteur.",
    ],
    technologies: ["Python", "CAN Bus", "ODrive"],
    link: "https://github.com/clubcapra/odrive-config",
  },
  {
    name: "Rove",
    description:
      "Un robot mobile pour explorer un terrain et collecter des données.",
    contribution: [
      "Intégration du contrôle de moteur.",
      "Intégration de différents capteurs (lidar, IMU, GPS).",
      "Intégration du roaming réseau.",
      "Intégration et visualisation des caméras.",
      "Exportation de la cartographie 3D.",
    ],
    technologies: [
      "Python",
      "C++",
      "ROS",
      "Nav2",
      "Gazebo",
      "Ubuntu",
      "OpenCV",
      "GStreamer",
    ],
    link: "https://github.com/clubcapra/rove",
  },
  {
    name: "Radiacode 103",
    description: "Un détecteur de radiation pour mesurer la radioactivité.",
    contribution: [
      "Programmation de l'interface ROS afin de lire les données.",
    ],
    technologies: ["Python", "ROS", "Ubuntu"],
    link: "https://github.com/clubcapra/radiacode_driver",
  },
];
