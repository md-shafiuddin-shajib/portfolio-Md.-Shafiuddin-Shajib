// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';



import mysqlLogo from './assets/tech_logo/mysql.png';


import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';


import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import wordpressLogo from './assets/tech_logo/wordpress.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Experience Section Logo's
import sardaritLogo from './assets/company_logo/sardarit.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/IUBAT.jfif';
import bsaLogo from './assets/education_logo/AAMC.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/tourBooking.JPG';
import csprepLogo from './assets/work_logo/food_delivary.JPG';
import ModerSaSS from './assets/work_logo/ModerSaSS.JPG';
import movierecLogo from './assets/work_logo/Ecommerce_clothing.JPG';
import codeinspectLogo from './assets/work_logo/codeinspect.JPG';
import recipeAppLogo from './assets/work_logo/prochef.JPG';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'RTK', logo: reduxLogo },
   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
  
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'SQL', logo: mysqlLogo },
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
  title: "CodeInspect",
  description:
    "Built an AI-powered code review and auto-fix platform that analyzes source code with structured, senior-level feedback and applies improvements directly in the editor using Google Gemini.",
  image: codeinspectLogo,
  tags: ["React JS", "Vite", "Monaco Editor", "TailwindCSS", "AI"],
  github: "https://github.com/md-shafiuddin-shajib/codeinspect.git",
  webapp: "https://codeinspect-xeoi.vercel.app/",
},
    {
      id: 1,
      title: "Tour Booking Web App",
      description:
        "Built a Travel Bangladesh frontend web application using React, Redux Toolkit, and Tailwind CSS, featuring tour browsing, search and filtering, booking-style UI flows, and customer review displays using mock data for demonstration purposes.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux Toolkit", "React Router DOM","Tailwind"],
      github: "https://github.com/md-shafiuddin-shajib/TravelsBangladesh",
      webapp: "https://travels-bangladesh.vercel.app/",
    },
    {
  id: 2,
  title: "Modern SaaS Landing Page",
  description:
    "Built a modern single-page SaaS landing page featuring hero, services, pricing, testimonials, and newsletter sections using React.js and Tailwind CSS with a clean, responsive layout.",
  image: ModerSaSS,
  tags: ["React JS", "TailwindCSS", "JavaScript"],
  github: "https://github.com/md-shafiuddin-shajib/Moder-Landing-Page.git",
  webapp: "https://moder-landing-page.vercel.app/",
},
    {
      id: 3,
      title: "Clothing E-Commerce Platform",
      description:
        "Built a clothing-based e-commerce website featuring product listings, cart and checkout functionality, along with search and filtering for an optimized shopping experience.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS","TailwindCSS", "JavaScript"],
      github: "https://github.com/md-shafiuddin-shajib/Ecommer-react",
      webapp: "https://ecommer-react-ten.vercel.app/",
    },
     {
      id: 4,
      title: "Food Delivery Website ",
      description:
        "Developed a food ordering platform with menu browsing and cart management, using Redux for state management and Tailwind CSS for a fully responsive UI.",
      image: csprepLogo,
      tags: ["React JS", "Redux", "TailwindCSS", "JavaScript"],
      github: "https://github.com/md-shafiuddin-shajib/Food-Delivery",
      webapp: "https://food-delivery-three-bay.vercel.app/",
    },
    {
  id: 5,
  title: "Recipe App",
  description:
    "Developed a recipe application that lets users discover a wide variety of dish recipes using API-based data fetching and dynamic routing. Built with React JS and styled using Tailwind CSS to deliver a fully responsive and user-friendly interface.",
  image: recipeAppLogo,
  tags: ["React JS", "TailwindCSS", "JavaScript"],
  github: "https://github.com/md-shafiuddin-shajib/recipe_web_app.git",
  webapp: "https://recipe-web-app-tawny.vercel.app/",
},

  ];  