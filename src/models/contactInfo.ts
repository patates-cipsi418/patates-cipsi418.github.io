import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactInfo {
  icon: IconDefinition;
  text: string;
  link: string;
}

export const contacts: ContactInfo[] = [
  {
    icon: faEnvelope,
    text: "denis.turk.1@ens.etsmtl.ca",
    link: "mailto:denis.turk.1@ens.etsmtl.ca",
  },
  {
    icon: faEnvelope,
    text: "denis.turk2001@outlook.com",
    link: "mailto:denis.turk2001@outlook.com",
  },
  {
    icon: faLinkedin,
    text: "denis-turk-b2a52a239",
    link: "https://www.linkedin.com/in/denis-turk-b2a52a239/",
  },
  {
    icon: faGithub,
    text: "patates-cipsi418",
    link: "https://github.com/patates-cipsi418",
  },
];
