export interface Project {
  slug: string
  title: string
  teaser: string
  description: string
  thumbnail: string
  image: string
  imageCaption: string
  liveUrl: string
  readmeUrl: string
  content: string[]
}

export const projects: Project[] = [
  {
    slug: 'css-framework',
    title: 'CSS Framework',
    teaser: 'A custom CSS framework for rapid web development.',
    description:
      'This project involves creating a custom CSS framework that simplifies the process of building responsive and visually appealing web pages.',
    thumbnail: '/images/css-framework-thumbnail.jpg',
    image: '/images/css-framework.jpg',
    imageCaption: 'Overview of the CSS framework',
    liveUrl: 'https://example.com/css-framework',
    readmeUrl: 'https://github.com/example/css-framework',
    content: [
      'The CSS framework is designed to be lightweight and easy to use.',
      'It includes a set of predefined classes for common UI components.',
      'The framework is fully responsive and works well on all devices.',
    ],
  },
  {
    slug: 'javascript-framework',
    title: 'JavaScript Framework',
    teaser:
      'A custom JavaScript framework for building dynamic web applications.',
    description:
      'This project involves creating a custom JavaScript framework that simplifies the process of building dynamic and interactive web applications.',
    thumbnail: '/images/javascript-framework-thumbnail.jpg',
    image: '/images/javascript-framework.jpg',
    imageCaption: 'Overview of the JavaScript framework',
    liveUrl: 'https://example.com/javascript-framework',
    readmeUrl: 'https://github.com/example/javascript-framework',
    content: [
      'The JavaScript framework is designed to be modular and easy to extend.',
      'It includes a set of utilities for common tasks such as DOM manipulation and event handling.',
      'The framework is optimized for performance and works well across different browsers.',
    ],
  },
  {
    slug: 'semester-project',
    title: 'Semester Project',
    teaser: 'A comprehensive project developed during the semester.',
    description:
      'This project showcases the skills and knowledge acquired throughout the semester, combining various technologies and methodologies.',
    thumbnail: '/images/semester-project-thumbnail.jpg',
    image: '/images/semester-project.jpg',
    imageCaption: 'Overview of the semester project',
    liveUrl: 'https://example.com/semester-project',
    readmeUrl: 'https://github.com/example/semester-project',
    content: [
      'The semester project integrates multiple technologies learned during the course.',
      'It demonstrates the ability to design, develop, and deploy a complete web application.',
      'The project emphasizes best practices in coding, testing, and documentation.',
    ],
  },
]
