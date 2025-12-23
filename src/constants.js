// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import wordpressLogo from './assets/tech_logo/wordpress.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import sardaritLogo from './assets/company_logo/sardarit.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/IUBAT.jfif';
import bsaLogo from './assets/education_logo/AAMC.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/tourBooking.JPG';
import csprepLogo from './assets/work_logo/food_delivary.JPG';
import movierecLogo from './assets/work_logo/Ecommerce_clothing.JPG';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
  
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo }]
      
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Wordpress', logo: wordpressLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: sardaritLogo,
      role: "Frontend Developer",
      company: "Sardar IT",
      date: "March 2025 - May 2025",
      desc: "Developed and maintained client websites using HTML, CSS, JavaScript, WordPress, and Elementor Pro, delivering responsive UI updates based on client requirements. Worked directly with clients to gather specifications, support project planning, and deliver updates on time.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Wordpress",
        "Elementor Pro"
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "IUBAT - International University of Business Agriculture and Technology, Dhaka, Bangladesh",
      date: "March 2021 - February 2025",
      grade: "3.70 out of 4.00 CGPA",
      desc: "I have completed my Bachelor’s degree in Computer Science and Engineering (BCSE) from IUBAT. During my studies, I built a strong foundation in programming, software development, and core computer science concepts, including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My academic experience helped strengthen my technical skills and prepare me for professional growth.",
      degree: "Bachelor of Computer Science and Engineering - BCSE",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Adhyapak Abdul Majid College, Cumilla, Bangladesh",
      date: "July 2017 - April 2019",
      grade: "5.00 out of 5.00",
      desc: "I completed my Higher Secondary Certificate (HSC) from Adhyapak Abdul Majid College in the Science group, where I developed a strong foundation in mathematics, physics, and basic computing concepts.",
      degree: "Higher Secondary Certificate - HSC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Tour Booking Web App",
      description:
        "Built a tour booking web application with user authentication, search, booking management, customer reviews, and MongoDB-based data storage.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express Js","mongodb"],
      github: "https://github.com/md-shafiuddin-shajib/travelbooking",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Food Delivery Website ",
      description:
        "Developed a food ordering platform with menu browsing and cart management, using Redux for state management and Tailwind CSS for a fully responsive UI.",
      image: csprepLogo,
      tags: ["React JS", "Redux", "TailwindCSS", "JavaScript"],
      github: "https://github.com/md-shafiuddin-shajib/Food-Delivery",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Clothing E-Commerce Platform",
      description:
        "Built a clothing-based e-commerce website featuring product listings, cart and checkout functionality, along with search and filtering for an optimized shopping experience.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS","TailwindCSS", "JavaScript"],
      github: "https://github.com/md-shafiuddin-shajib/Ecommer-react",
      webapp: "https://github.com/md-shafiuddin-shajib/Ecommer-react",
    }
  ];  