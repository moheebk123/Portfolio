import twelfth from "../assets/img/achievements/twelfth.png";
import darkCoding from "../assets/img/achievements/dark-coding.png";
import webHive from "../assets/img/achievements/web-hive.png";
import blindCoding from "../assets/img/achievements/blind-coding.png";
import cncf from "../assets/img/achievements/cncf.png";

interface Achievements {
  imgUrl: string;
  heading: string;
  detail: string;
}

export const achievements: Achievements[] = [
  {
    imgUrl: twelfth,
    heading: "Academic Excellence - 12th Standard",
    detail:
      "Secured 3rd position in 12th standard, demonstrating dedication to academic growth.",
  },
  {
    imgUrl: darkCoding,
    heading: "Dark Coding - Python Expert",
    detail:
    "Third position in the Dark Coding solo competition out of 30 participants, showcasing expertise in Python.",
  },
  {
    imgUrl: webHive,
    heading: "Web-Hive - Team Leader",
    detail:
    "Third position in Web-Hive with a team of 3, where I led the team and excelled in HTML and CSS development.",
  },
  {
    imgUrl: blindCoding,
    heading: "Blind Coding Champion",
    detail:
      "First position in a solo Blind Coding competition among 50 participants, highlighting Java programming skills.",
  },
  {
    imgUrl: cncf,
    heading: "Cloud Native Community Group Event Attendee",
    detail:
      "Attended the 'Secure-i-ous Solutions: Secrets to Cloud Native Security' event at Microsoft Gurgaon, gaining insights on cloud-native security from industry experts and networking with fellow cloud enthusiasts.",
  },
];

