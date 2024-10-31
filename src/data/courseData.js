const colors = [
  { bg: '00BCD4', fg: 'ffffff' }, // Cyan
  { bg: 'FF9800', fg: 'ffffff' }, // Orange
  { bg: '8BC34A', fg: 'ffffff' }, // Green
  { bg: '3F51B5', fg: 'ffffff' }, // Indigo
  { bg: 'E91E63', fg: 'ffffff' }, // Pink
];

const generateImageURL = (text, index) => {
  const { bg, fg } = colors[index % colors.length];
  return `https://dummyimage.com/600x400/${bg}/${fg}&text=${encodeURIComponent(text)}`;
};

const courses = {
  'course 1: oh my zsh setup': {
    title: 'Course 1: OH MY ZSH Setup',
    author: 'Dev Gautam Kumar',
    image: generateImageURL('ZSH Setup', 0),
    description: 'Enhance your terminal experience with OH MY ZSH.',
    embed_link: 'https://www.youtube.com/embed/dCdX5v3IU60',
    contentFile: 'course1.md',
  },
  'course 2: getting started with cli': {
    title: 'Course 2: Getting Started with CLI',
    author: 'Dev Gautam Kumar',
    image: generateImageURL('CLI PART 1', 1),
    description: 'Kick your journey with CLI.',
    embed_link: 'https://www.youtube.com/embed/B4b9pX1lqU4',
    contentFile: 'course2.md',
  },
  'course 3: playing in the shell': {
    title: 'Course 3: Playing in the Shell',
    author: 'Dev Gautam Kumar',
    image: generateImageURL('Playing in the Shell', 2),
    description: 'Get familiar with UNIX Shell.',
    embed_link: 'https://www.canva.com/design/DAGTIaBPhDM/a_G7XN1OSANZPmkoR_vLnQ/view?embed',
    contentFile: 'course3.md',
  },
  'course 4: introduction to bourne shell': {
    title: 'Course 4: Introduction to Bourne Shell',
    author: 'Dev Gautam Kumar',
    image: generateImageURL('Bourne Shell', 3),
    description: 'Get started with Shell Scripts.',
    embed_link: 'https://www.canva.com/design/DAGS2jSbGgI/NHrTUX9491PY9e31licHrA/view?embed',
    contentFile: 'course4.md',
  },
  'course 5: bash scripting basics': {
    title: 'Course 5: Bash Scripting Basics',
    author: 'Sangharsh',
    image: generateImageURL('Bash Scripting Basics', 4),
    description: 'Learn the basics of Bash scripting and automate tasks.',
    embed_link: 'https://www.youtube.com/embed/SPwyp2NG-bE',
    contentFile: 'course5.md',
  },
  'course 6: termux for web testing': {
    title: 'Course 6: Termux For Web Testing',
    author: 'Dev Gautam Kumar',
    image: generateImageURL('Termux For Web Testing', 0),
    description: 'Hello there, I am dropping a Termux Guide mainly focused for Web Bug Hunting. It will help you to save time, esp if you are doing a full-time job like me. This might aid in your journey, especially to those who are starting this bug hunting journey on Android.',
    embed_link: 'https://dummyimage.com/600x400/8BC34A/fff&text=Termux+For+Web+Testing',
    contentFile: 'course6.md',
  },
};

export default courses;
