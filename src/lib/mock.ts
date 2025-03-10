import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  House,
  MessageSquareText,
  Send,
} from 'lucide-react';

export const socialMediaItems = [
  {
    link: 'https://www.github.com/muhammadrayhanr',
    icon: Github,
  },
  {
    link: 'https://www.linkedin.com/in/mrayhanr4869',
    icon: Linkedin,
  },
  {
    link: 'https://www.instagram.com/mrayhanrohadi',
    icon: Instagram,
  },
  {
    link: 'mailto:mrayhanr4869@gmail.com',
    icon: Mail,
  },
];

export const navbarItems = [
  {
    name: 'Home',
    link: '/',
    icon: House,
  },
  {
    name: 'Guestbook',
    link: '/guestbook',
    icon: MessageSquareText,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: Send,
  },
];

export const projectItems = [
  // {
  //   id: 1,
  //   label: 'Personal Website',
  //   image: 'personal-web.png',
  //   tech: 'typescript',
  //   summary: 'a digital space that showcases my best works, backgrounds, etc.',
  //   tags: ['NextJS'],
  //   link: 'https://mrayhanr.my.id',
  // },
  {
    id: 1,
    label: 'Book Wise',
    image: 'book-wise.png',
    tech: 'typescript',
    summary: 'a University Library where student can borrow books with authorization.',
    tags: ['NextJS', 'Neon', 'Drizzle', 'Postgresql'],
    link: 'https://borrow-book-library.vercel.app',
  },
  {
    id: 2,
    label: 'Dicoding Forum',
    image: 'dicoding-forum.png',
    tech: 'javascript',
    summary: 'a forum that I create as my final project at Dicoding.',
    tags: ['ReactJS', 'Redux'],
    link: 'https://dicoding-forum-mrayhanr.vercel.app',
  },
  {
    id: 3,
    label: 'SantAI',
    image: 'sant-ai.png',
    tech: 'javascript',
    summary: 'a ChatGPT clone that I create using Gemini.',
    tags: ['NextJS', 'Gemini'],
    link: 'https://chat-santai.vercel.app',
  },
];
