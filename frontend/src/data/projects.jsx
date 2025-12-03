import shootemImage from '../assets/project-images/shootem.png'
import ecommerceImage from '../assets/project-images/ecommerce.png'

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    image: ecommerceImage,
    description: 'A full-stack e-commerce website.',
    tech: ['JavaScript', 'React', 'CSS', 'GraphQL', 'MySQL', 'PHP'],
    link: 'https://github.com/QuodImperator/scandiweb-Test',
  },
  {
    id: 2,
    title: "Shoot Em' Up game",
    image: shootemImage,
    description: 'A small, retro-style 2D shoot em up game.',
    tech: ['C#', 'Unity', 'Photoshop'],
    link: 'https://github.com/QuodImperator/Shoot-em-Up-Game',
  },
];

export default projects;