import {
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  treasury,
  decoration,
  arthy,
  ramya
 
} from "../assets";

const experiences = [
  {
    title: "Overall event Coordinators",
    company_name: " Coordinators",
    icon: starbucks,
    iconBg: "#383E56",
    date: "KRANTI",
    points: [
      "YAZHINI PARVATHAM A",
      "HARI PRASAD S",
    ],
   
  },
  {
    title: "Treasurers",
    company_name: " Coordinators",
    icon: treasury,
    iconBg: "#383E56",
    date: "Treasurers",
    points: [
      "SRIGANESH S",
      "MEENATCHI V",
    ],
   
  },
  {
    title: "Sponsors Team",
    company_name: "coordinators",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sponsors Team",
    points: [
      "SANTHOSH M",
      "CHAARUKESH ABHI C H",
      "JHAYASURI K ",
      "MATHAN M ",
    ],
  },
  {
    title: "Media Team",
    company_name: "coordinators",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Media Team",
    points: [
      "MOHIDEEN ABDUL AZIZ M",
      "KEERTHANA P",
      "VIKRAM S ",
      "SHANMUGAHARINI S",
    ],
  },
  {
    title: "Food Team",
    company_name: "coordinators",
    icon: shopify,
    iconBg: "#383E56",
    date: "Food Team",
    points: [
      "MAGESHWARAN R",
      "MOHAMMED ABRAR",
      "SRIHARI N",
      "DINESH P",
    ],
  },
  {
    title: "Help Desk Team",
    company_name: "coordinators",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Help Desk Team",
    points: [
      "YUVASREE P",
      "BHARNI SHREE B",
      "ABINAYA S",
      "GNANALAKSHMI R",
    ],
  },
  {
    title: "Decoration Team",
    company_name: "coordinators",
    icon: decoration,
    iconBg: "#E6DEDD",
    date: "Decoration Team",
    points: [
      "SOORYAPRIYA S ",
      "ANJANA RAO S",
      "NIROSHINI S",
      "SENTAMIL MUKILAN R M",
      "SRIMATHI E",
      " VISHANTH V",
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
    name: "RAMYA DEVI R",
    description:
      "Full-stack developer",
    tags: [
      { name: "react js", color: "blue-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "MySql", color: "green-text-gradient" }

    ],
    image: ramya,
    source_code_link: "https://www.linkedin.com/in/ramya-devi-ramesh-139841263/",
    linkedin_link: "https://www.linkedin.com/in/johndoe/",
  },
  {
    name: "VEDHA SREE G ",
    description:
      "Front end developer",
    tags: [
      { name: "react js", color: "blue-text-gradient" },
      
      { name: "tailwind", color: "green-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/vedha-sree-g-858366245/",
    linkedin_link: "https://www.linkedin.com/in/janedoe/",
  },
  {
    name: "AARTHI A P",
    description:
      "Front end developer",
    tags: [
      { name: "react js", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "UI/UX", color: "green-text-gradient" },
    ],
    image: arthy,
    source_code_link: "https://www.linkedin.com/in/aarthi-arulprakasam-46bab6259/",
    linkedin_link: "https://www.linkedin.com/in/alexsmith/",
  },
  {
    name: "CHANDAN C S",
    description:
      "Full-stack developer",
    tags: [
      { name: "react js", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/c-s-chandan-86a8b2249/",
    linkedin_link: "https://www.linkedin.com/in/vishnu/",
  },
  {
    name: "THIRUMURUGAN M B",
    description:
      "Full-stack developer",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "django", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/thirumurugan-m-b-7084a6325/",
    linkedin_link: "https://www.linkedin.com/in/sarah/",
  },
  {
    name: "VISHNUVARDHAN K ",
    description:
      "Full-stack developer",
    tags: [
      { name: "react js", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "PHP and Mysql", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/vish2005/",
    linkedin_link: "https://www.linkedin.com/in/vishnuvardhan/",
  },
];




export { experiences, testimonials, projects };
