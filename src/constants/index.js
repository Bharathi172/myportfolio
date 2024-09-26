import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  northeasternuniversity,
  srmseal,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  healhub,
  fitometer,
  haven,
  sql,
  resort
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Northeastern University",
    company_name: "Master of Science in Information Systems (MS in Information Systems)",
    icon: northeasternuniversity,
    iconBg: "#383E56",
    date: "September 2023 - Present ",
    points: [
      "Pursuing a Master's degree in Information Systems, focusing on the integration of technology, business processes, and data management to solve complex problems.",
      "Gaining hands-on experience in software quality testing automation, software development and data analytics through comprehensive coursework and real-world projects.",
      "Developing a strong foundation in programming languages such as Java, Python, and JavaScript, along with expertise in full-stack web development and automation testing tools like Selenium.",
      "Engaging in collaborative projects that emphasize user experience design, database management, and the implementation of software quality testing automation to ensure the delivery of reliable and scalable software solutions.",
    ],
  },
  {
    title: "SRM Institute Of Science and Technology",
    company_name: "Bachelor of Technology in Electronics and Communication Engineering (B.Tech in ECE)",
    icon: srmseal,
    iconBg: "#E6DEDD",
    date: "July 2019 - May 2023",
    points: [
      "Earned a Bachelor's degree in Electronics and Communication Engineering, gaining a solid foundation in electronic circuits, signal processing, and communication systems.",
      "Gained hands-on experience with microprocessors, embedded systems, and digital communication, which developed a comprehensive understanding of how hardware and software interact",
      "Developed proficiency in data communication, networking, and signal processing, providing insights into the technical aspects of data management and transmission crucial for Information Systems",
      "Engaged in projects that combined electronics with software development, enhancing problem-solving skills and preparing, with a focus on systems integration and automation.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HealHub",
    description:
      "Heal Hub is a pharmacy wholesale ecommerce platform that I developed using React, Redux, MongoDB, Stripe API, Node.js, and Express.js. The project was designed with a REST architecture to ensure a mobile-friendly and responsive user experience, which led to a 30% increase in mobile traffic. By enabling seamless browsing and categorization of products, user engagement significantly improved. Additionally, integrating the Stripe API provided secure payment processing, reducing payment errors by 50%. The platform also features an admin functionality that streamlines product and user management, enhancing overall operational efficiency.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mern",
        color: "pink-text-gradient",
      },
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "webdevelopment",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: healhub,
    source_code_link: "https://github.com/gokul-ravi-16/heal_hub",
    icon_type: "github",
  },
  {
    name: "Resort-Management System",
    description:
      "The Resort Management System is a Java-based application I built using Apache NetBeans, designed to streamline operations across various departments within a resort. It features secure access controls, ensuring that users are directed to their respective portals and cannot access unauthorized areas. The system allows customers to raise issues that are then routed to the relevant department, with statuses updated upon resolution, providing real-time tracking. This project effectively improved operational efficiency by enabling department staff to address customer concerns promptly.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "netbeans",
        color: "green-text-gradient",
      },
      {
        name: "resortmanagement",
        color: "pink-text-gradient",
      },
      {
        name: "accesscontrol",
        color: "blue-text-gradient",
      },
      {
        name: "customerservice",
        color: "green-text-gradient",
      },
      {
        name: "issuetracking",
        color: "pink-text-gradient",
      },
      {
        name: "efficiency",
        color: "blue-text-gradient",
      }
    ],
    image: resort,
    source_code_link: "https://github.com/Bharathi172/Resort_Management_System",
    icon_type: "github",
  },
  {
    name: "FitOMeter",
    description:
      "FitOMeter is a feature-rich fitness app that I developed, applying user-centric techniques like the MoSCoW method, persona creation, and detailed use case analysis to enhance user engagement. The app's high-fidelity interface was designed and wireframed using Figma, leading to a 30% improvement in user satisfaction. FitOMeter includes workout recommendations for various body parts, complete with instructional videos, offering users a personalized fitness journey. These features collectively contributed to improved user retention and overall experience.",
    tags: [
      {
        name: "fitnessapp",
        color: "blue-text-gradient",
      },
      {
        name: "userexperience",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "moscow",
        color: "blue-text-gradient",
      },
      {
        name: "personalization",
        color: "green-text-gradient",
      },
      {
        name: "workoutvideos",
        color: "pink-text-gradient",
      },
      {
        name: "usecase",
        color: "blue-text-gradient",
      },
      {
        name: "wireframing",
        color: "green-text-gradient",
      },
      {
        name: "useronboarding",
        color: "pink-text-gradient",
      }
    ],
    image: fitometer,
    source_code_link: "https://www.figma.com/design/IfRzDAKr8UG018XQGM9hh0/fit-meter?node-id=0-1&t=9a2njm8ERY1ANbFv-1",
    icon_type: "figma",
},
{
  name: "Haven",
  description:
    "Haven is an adoption app that I designed using Figma with high-fidelity design principles to ensure a seamless user experience. The app features a streamlined adoption process, allowing users to adopt children from any location, simplifying the process by 35%. Additionally, I integrated donation functionality, which led to a 25% increase in contributions to adoption causes. Users can also connect with experts for valuable adoption-related suggestions. The intuitive interface design promotes user engagement and aligns with the app's mission of facilitating and supporting the adoption journey.",
  tags: [
    {
      name: "figma",
      color: "blue-text-gradient",
    },
    {
      name: "uxdesign",
      color: "green-text-gradient",
    },
    {
      name: "adoption",
      color: "pink-text-gradient",
    },
    {
      name: "highfidelity",
      color: "blue-text-gradient",
    },
    {
      name: "userexperience",
      color: "green-text-gradient",
    },
    {
      name: "donation",
      color: "pink-text-gradient",
    },
    {
      name: "expertconnect",
      color: "blue-text-gradient",
    },
    {
      name: "interfacedesign",
      color: "green-text-gradient",
    },
    {
      name: "userengagement",
      color: "pink-text-gradient",
    }
  ],
  image: haven,
  source_code_link: "https://www.figma.com/design/AIFelI9nnxWj74stLqRUw1/Untitled?node-id=0-1&t=YRHAbvJHuxBIIyjf-1",
  icon_type: "figma",
},
{
  name: "E-Learning Database",
  description:
    "I developed an E-Learning Database Management System using MySQL, incorporating advanced features such as stored procedures, user-defined functions, and triggers to streamline operations and enhance data integrity. This system effectively manages records for students, teachers, and courses while implementing robust authentication mechanisms to ensure secure access. The intuitive interface allows users to efficiently navigate and manage their learning activities, resulting in a 40% reduction in administrative overhead and improved user satisfaction.",
  tags: [
    {
      name: "mysql",
      color: "blue-text-gradient",
    },
    {
      name: "database",
      color: "green-text-gradient",
    },
    {
      name: "elearning",
      color: "pink-text-gradient",
    },
    {
      name: "storedprocedures",
      color: "blue-text-gradient",
    },
    {
      name: "triggers",
      color: "green-text-gradient",
    },
    {
      name: "authentication",
      color: "pink-text-gradient",
    },
    {
      name: "dataintegrity",
      color: "blue-text-gradient",
    },
    {
      name: "userinterface",
      color: "green-text-gradient",
    },
    {
      name: "efficiency",
      color: "pink-text-gradient",
    }
  ],
  image: sql,
}
];

export { services, technologies, experiences, testimonials, projects };