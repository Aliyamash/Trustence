import portfolio from '@/public/images/portfolio.png'
import creativeShop from '@/public/images/shahriarh.png'
import { link } from 'framer-motion/client'

export const projects = [
  {
    id:1,
    banner: portfolio,
    link:"https://ali-ashrafi.vercel.app/",
    title: "Animated Portfolio Website",
    category: "Web Design / Portfolio",
    intro:
      "A clean, animated portfolio showcasing work with modern design and smooth interactions.",
  },
  {
    id:2,
    banner: creativeShop,
    link:"https://ali-ashrafi.vercel.app/",
    title: "Creative Portfolio & Shop Website",
    category: "Portfolio / E-commerce / Web Design",
    intro:
      "A stylish hybrid website that showcases work while offering products for sale, built with modern layouts and creative visual elements."
  },
]
