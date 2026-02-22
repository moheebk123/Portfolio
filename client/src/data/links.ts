import phone from "../assets/img/contact/phone.png";
import whatsapp from "../assets/img/contact/whatsapp.png";
import mail from "../assets/img/contact/mail.png";
import location from "../assets/img/contact/location.png";
import linkedIn from "../assets/img/contact/linkedIn.png";
import gitHub from "../assets/img/contact/github.png";

interface ContactLink {
  id: number;
  delay: number;
  imgUrl: string;
  alt: string;
  link: string;
  text: string;
}

export const contactLinks: ContactLink[] = [
  {
    id: 1,
    delay: 400,
    imgUrl: phone,
    alt: "Phone Icon",
    link: "tel:+917982831127",
    text: "+91 7982831127",
  },
  {
    id: 2,
    delay: 500,
    imgUrl: whatsapp,
    alt: "Whatsapp Icon",
    link: "https://wa.me/+917982831127",
    text: "+91 7982831127",
  },
  {
    id: 3,
    delay: 600,
    imgUrl: mail,
    alt: "Mail Icon",
    link: "mailto:moheebk522@gmail.com",
    text: "moheebk522@gmail.com",
  },
  {
    id: 4,
    delay: 700,
    imgUrl: location,
    alt: "Location Icon",
    link: "https://www.google.com/maps?q=Daryaganj,+Delhi,+India",
    text: "Daryaganj, New Delhi, Delhi, India",
  },
];

interface SocialLink {
  id: number;
  delay: number;
  imgUrl: string;
  alt: string;
  link: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    delay: 800,
    link: "https://www.linkedin.com/in/moheebkhan",
    imgUrl: linkedIn,
    alt: "LinkedIn Logo",
  },
  {
    id: 2,
    delay: 900,
    link: "https://github.com/moheebk123",
    imgUrl: gitHub,
    alt: "GitHub Logo",
  },
];
