export type SectionKey =
  | 'about'
  | 'vision'
  | 'work'
  | 'toolkit'
  | 'build'
  | 'beyond'
  | 'contact'

export const NAV_ITEMS: { key: SectionKey; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'vision', label: 'Vision' },
  { key: 'work', label: 'Work' },
  { key: 'toolkit', label: 'Toolkit' },
  { key: 'build', label: 'What I Like To Build' },
  { key: 'beyond', label: 'Beyond' },
  { key: 'contact', label: 'Contact' },
]

export const EXPLORE_PANELS: {
  key: SectionKey
  number: string
  title: string
  caption: string
}[] = [
  { key: 'about', number: '01', title: 'About', caption: 'Who I am.' },
  { key: 'vision', number: '02', title: 'Vision', caption: "Where I'm going." },
  { key: 'work', number: '03', title: 'Work', caption: "What I've built." },
  { key: 'toolkit', number: '04', title: 'Toolkit', caption: 'What I know.' },
  {
    key: 'build',
    number: '05',
    title: 'What I Like To Build',
    caption: 'What I want to create.',
  },
  {
    key: 'beyond',
    number: '06',
    title: 'Beyond the Code',
    caption: "What I'm curious about.",
  },
]

export const PROJECTS = [
  {
    number: '01',
    title: 'Netflix Data Analysis',
    category: 'Data × Analytics × Visualization',
    description:
      "An exploration of Netflix's content library, using data to uncover patterns across titles, genres, countries, release years and content trends.",
    tech: ['Python', 'Data Analysis', 'Visualization'],
    href: 'https://github.com/manyamehta07/netflix-data-',
  },
  {
    number: '02',
    title: 'IPL Analysis',
    category: 'Data × Sports × Analytics',
    description:
      'A data-driven exploration of the Indian Premier League, turning match and player data into insights around performances, trends and statistics.',
    tech: ['Python', 'Data Analysis', 'Visualization'],
    href: 'https://github.com/manyamehta07/IPL-analysis',
  },
    {
    number: '03',
    title: 'THE LUXURY EDIT',
    category: 'Web × Editorial × Luxury',
    description:
      'An immersive digital fashion editorial exploring what luxury means, how fashion houses create desire, and the stories behind the world’s most influential luxury brands.',
    tech: ['Next.js', 'React', 'Editorial Design', 'Web Development'],
    href: 'https://luxury-edit.vercel.app/',
  },
]

export const TOOLKIT_COLUMNS = [
  {
    label: 'Technology',
    items: ['C++', 'Python', 'Java', 'HTML', 'CSS', 'Operating Systems — fundamentals'],
  },
  {
    label: 'Data & Analytics',
    items: ['Data Analysis', 'Excel', 'SQL', 'Data Visualization', 'Analytical Thinking'],
  },
  {
    label: 'Creative',
    items: [
      'Visual Design',
      'UI Design',
      'Canva',
      'Content & Creative Direction',
      'Presentation Design',
    ],
  },
  {
    label: 'Currently Exploring',
    items: [
      'Web Development',
      'Advanced Data Analytics',
      'UI/UX',
      'Digital Products',
      'Creative Technology',
    ],
  },
]

export const EDUCATION = [
  {
    place: 'VIT Vellore',
    detail: 'B.Tech — Information Technology',
    status: 'Currently pursuing',
  },
  {
    place: 'Rankers International School, Indore',
    detail: 'Senior Secondary — Class XII',
    status: '',
  },
  {
    place: 'St. Paul Senior Secondary School, Pali, Rajasthan',
    detail: 'Secondary — Class X',
    status: '',
  },
]

export const INTERESTS = [
  'Sports',
  'Fashion',
  'Bollywood',
  'Music',
  'Technology',
  'Business',
  'Culture',
  'Travel',
  'Design',
]

export const BUILD_CATEGORIES = [
  {
    label: 'Web',
    text: 'Websites, landing pages & digital experiences',
  },
  {
    label: 'Design',
    text: 'Visual design, UI & creative direction',
  },
  {
    label: 'Content',
    text: 'Content design, organization & creative strategy',
  },
  {
    label: 'Data',
    text: 'Analytics, visualization & turning information into something understandable',
  },
]

export const PERSONALITY = [
  {
    label: 'Ambivert',
    text: 'I can talk to anyone, and I also love my own space.',
  },
  {
    label: 'Observer',
    text: 'I notice patterns, people, details and everything in between.',
  },
  {
    label: 'Creative Mind',
    text: 'I love ideas, design, storytelling and meaningful details.',
  },
  {
    label: 'Lifelong Learner',
    text: 'Always curious. Always exploring. Always growing.',
  },
]

export const CONTACT = {
  email: 'manyamehta0708@gmail.com',
  phone: '8003744447',
  location: 'India',
  socials: [
    { label: 'GitHub', href: 'https://github.com/manyamehta07' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manya-mehta-220398324/' },
    { label: 'Instagram', href: 'https://www.instagram.com/manya_mehta07' },
  ],
  instagramHandle: '@manya_mehta07',
}
