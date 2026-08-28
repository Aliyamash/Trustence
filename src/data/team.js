// data/team.js

// Import همه تصاویر
import aliImage from '@/public/images/team/alinew.jpg';
import maziarImage from '@/public/images/team/maziarnew.jpg';
import mohammadImage from '@/public/images/team/mmdnew.jpg';
import sinaImage from '@/public/images/team/sina.jpg';
import eliasImage from '@/public/images/team/elias.jpg';
import arianImage from '@/public/images/team/arian.jpg';
import jawadImage from '@/public/images/team/jawad.png'; // دقت کنید فرمت .png هست

export const team = [
  {
    id: 1,
    name: "Maziar Dehghani",
    position: "Software Engineer",
    bio: "Translates ambitious ideas into dependable software, with a disciplined focus on clean architecture, performance, and systems that remain easy to own.",
    image: maziarImage,
    github: "https://github.com/maziardehghani",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Ali Ashrafi",
    position: "Software Engineer",
    bio: "Combines software engineering with a strong visual instinct to create distinctive web experiences, thoughtful interaction, and technically refined digital products.",
    image: aliImage, // استفاده از متغیر import شده
    github: "https://github.com/Aliyamash",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/ali-ashrafi-b24943299",
  },
  {
    id: 3,
    name: "Mohammad Shekarchian",
    position: "Marketing Specialist",
    bio: "Shapes focused marketing direction, turning audience insight and performance signals into campaigns that strengthen relevance and commercial momentum.",
    image: mohammadImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Sina Norozi",
    position: "Marketing Assistant",
    bio: "Supports campaign delivery and content operations with close attention to audience, consistency, and the details that move interest towards action.",
    image: sinaImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Elias Kiloua",
    position: "Graphic Designer",
    bio: "Builds considered visual systems that give ideas clarity, character, and a consistent presence across every important brand touchpoint.",
    image: eliasImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Arian Shahrestani",
    position: "Strategic Partner",
    bio: "Connects business direction with delivery, helping the team evaluate opportunities, develop meaningful partnerships, and make decisions with clarity and purpose.",
    image: arianImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Javad Mostatabi",
    position: "Visual Content Creator",
    bio: "Transforms raw footage into polished visual narratives, using pacing, sound, and precise editing to hold attention and communicate the intended message with confidence.",
    image: jawadImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
];
