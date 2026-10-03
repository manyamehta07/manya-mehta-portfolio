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
  { key: 'toolkit', label: 'Capabilities' },
  { key: 'build', label: 'What I Want To Work On' },
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
  { key: 'toolkit', number: '04', title: 'Capabilities', caption: 'What I can work with.' },
  {
    key: 'build',
    number: '05',
    title: 'What I Want To Work On',
    caption: 'Where I want to contribute.',
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
]

export const TATTVA = {
  title: 'TATTVA × Past Modern',
  eyebrow: 'Speculative Launch Campaign',
  description:
    'A self-initiated brand strategy and creative campaign imagining how a contemporary Indian fashion brand could launch a new accessory category through consumer insight, positioning, creator strategy and experiential marketing.',
  capabilities: ['Consumer Insight', 'Brand Strategy', 'Campaign Development', 'Creator Strategy', 'Experiential', 'Measurement'],
    images: {
    hero: '/images/tattva-hero.png',
    element: '/images/tattva-elements.png',
    installation: '/images/tattva-installation.png',
    styling: '/images/tattva-styling.png',
  },

  deck: '/case-studies/TATTVA_Case_Study.pdf',
}


export const TOOLKIT_COLUMNS = [
  {
    label: 'Business & Strategy',
    items: ['Business Models', 'Market & Competitor Thinking', 'Consumer Insight', 'Problem Framing', 'Strategic Thinking'],
  },
  {
    label: 'Marketing & Brand',
    items: ['Brand Strategy', 'Campaign Development', 'Content Strategy', 'Creator / Influencer Thinking', 'Consumer Behaviour'],
  },
  {
    label: 'Data & Analytics',
    items: ['SQL', 'Excel', 'Python', 'Data Analysis', 'Visualization', 'Analytical Thinking'],
  },
  {
    label: 'Operations & Technology',
    items: ['Process Thinking', 'Project Organization', 'Technology Fundamentals', 'Web Development', 'C++ / Java'],
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
    label: 'Business Strategy',
    text: 'Understanding markets, customers, business models and the decisions that move an idea forward.',
  },
  {
    label: 'Marketing',
    text: 'Brand positioning, consumer insight, campaign thinking, creator strategy and communication.',
  },
  {
    label: 'Operations',
    text: 'Turning ideas into workable systems — planning, execution, coordination and continuous improvement.',
  },
  {
    label: 'Data',
    text: 'Using SQL, Excel and Python to turn business questions into evidence and actionable insight.',
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
