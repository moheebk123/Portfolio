import tenthMarksheet from "../assets/img/education/tenth-marksheet.jpg";
import twelfthMarksheet from "../assets/img/education/twelfth-marksheet.jpg";
import bcaMarksheet from "../assets/img/education/bca-marksheet.png";

interface Education {
  id: number;
  class?: string;
  course: string;
  institute: string;
  marks: string;
  year: string;
  marksheetUrl: string;
  imgUrl: string;
}

export const educations: Education[] = [
  {
    id: 1,
    course: "BCA",
    institute: "Guru Gobind Singh Indraprastha University",
    marks: "CGPA - 8.4",
    year: "2022-2025",
    marksheetUrl:
      "https://drive.google.com/file/d/1q6uQeGm3yL3q5Rn5Y0j3pCd-wzsw2-x6/view?usp=sharing",
    imgUrl: bcaMarksheet,
  },
  {
    id: 2,
    class: "XII",
    course: "CBSE",
    institute: "The Union Academy Senior Secondary School",
    marks: "Marks - 83%",
    year: "2021-2022",
    marksheetUrl:
      "https://drive.google.com/file/d/15syMez_TvVn9pxxfme779PSnLD-DNEsl/view?usp=drive_link",
    imgUrl: twelfthMarksheet,
  },
  {
    id: 3,
    class: "X",
    course: "CBSE",
    institute: "The Union Academy Senior Secondary School",
    marks: "Marks - 67%",
    year: "2019-2020",
    marksheetUrl:
      "https://drive.google.com/file/d/15ujcfxgp5cK82PZXEEi3hpUoTw68NdRn/view?usp=drive_link",
    imgUrl: tenthMarksheet,
  },
];
