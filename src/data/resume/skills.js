// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Heroku',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQL',
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Express.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git Version Control',
    category: ['Tools'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Bootstrap + Material UI',
    category: ['Web Development', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#fec801',
  '#4acbf9',
  '#fd71ae',
  '#7b68ee',
  '#8ed27f',
  '#5deccc',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
