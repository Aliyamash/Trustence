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
    bio: "Transforms ideas into functional and efficient code, ensuring every project runs smoothly with clean structure and smart solutions.",
    image: maziarImage,
    github: "https://github.com/maziardehghani",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Ali Ashrafi",
    position: "Software Engineer",
    bio: "One of the agency’s most skilled programmers, combining creative design with technical expertise to build unique and animated experiences.",
    image: aliImage, // استفاده از متغیر import شده
    github: "https://github.com/Aliyamash",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/ali-ashrafi-b24943299",
  },
  {
    id: 3,
    name: "Mohammad Shekarchian",
    position: "Marketing Specialist",
    bio: "A key part of the marketing team, leading campaign strategies, analyzing results, and helping the brand connect with the right audience.",
    image: mohammadImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Sina Norozi",
    position: "Marketing Assistant",
    bio: "Works closely with the marketing team to manage social media, create engaging content, and support customer acquisition efforts.",
    image: sinaImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Elias Kiloua",
    position: "Graphic Designer",
    bio: "Brings ideas to life through modern, user‑focused design and visually compelling concepts that strengthen the brand’s identity.",
    image: eliasImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Arian Shahrestani",
    position: "Strategic Partner",
    bio: "As the Strategic Partner at Trustence, he works closely with the team to support business direction, build valuable collaborations, and help the agency move forward with confidence and clarity.",
    image: arianImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Javad Mostatabi",
    position: "Visual Content Creator",
    bio: "A creative Video Editor who turns raw footage into engaging stories through strong pacing, music, and smooth transitions. Detail‑oriented and message‑focused, he delivers polished videos that capture the audience’s attention.",
    image: jawadImage,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
];
