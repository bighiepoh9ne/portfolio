const fs = require('fs');

const p = 'c:/Users/AKIKMANE/Documents/portfolio/src/data/project.js';
let s = fs.readFileSync(p, 'utf8');

if (s.includes('title: "Club Med"')) {
  console.log('Club Med already exists');
  process.exit(0);
}

const obj =
`  },
  {
    title: "Club Med",
    description: "Projet Club Med.",
    tech: [],
    github: "https://github.com/bighiepoh9ne/Projet-Club-Med-",
    demo: "https://github.com/bighiepoh9ne/Projet-Club-Med-"
`;

const idx = s.lastIndexOf('];');
if (idx < 0) throw new Error('Could not find end of projects array');

s = s.slice(0, idx) + obj + s.slice(idx);

fs.writeFileSync(p, s, 'utf8');
console.log('Added Club Med');
