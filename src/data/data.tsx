import {
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage5 from '../images/portfolio/Today.jpg';
import porfolioImage6 from '../images/portfolio/Scrumdinger.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem1,
  TimelineItem2,
} from './dataDef';


/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rojin Prajapati',
  description: "",
};

/**
 * Section definitionx
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rojin Prajapati.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Thank you for taking an interest in my journey!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1T5nekkFViX6tC8EPIeDj9csPvCuyANdJ/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      As a Computer Science graduate from Western Michigan University, I've honed my analytical and problem-solving skills. My passion for technology extends beyond the code; I also find creative outlets in videography and editing, bringing stories to life through visuals. My unique journey as a professional soccer player and my passion for creative videography have given me a diverse perspective that I bring into the world of software engineering. 
      <br></br><br></br>Being an athlete taught me the importance of discipline, teamwork, leadership, communication, and resilience. These values have seamlessly integrated into my professional life, making me a dependable and collaborative team player in software development. 
      <br></br><br></br>Whether on the pitch or behind the camera/computer desk, I thrive in dynamic environments, collaborating with diverse teams to achieve goals. I'm excited to combine my technical expertise, particularly in <strong className="text-stone-100">iOS app development</strong>, with my creative flair to drive innovation and deliver meaningful solutions. Let's connect and explore opportunities to work together.
    </>

  ),
  aboutItems: [
    {label: 'Location', text: 'Kalamazoo, MI', Icon: MapIcon},
    {label: 'Interests', text: 'Soccer, Hiking, Videography, Filmmaking', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming',
    skills: [
      {
        name: 'Java',
      },
      {
        name: 'React',
      },
      {
        name: 'Swift',
      },
      {
        name: 'SQL',
      },
      {
        name: 'Python',
      },
      {
        name: 'Django',
      },
      {
        name: 'HTML',
      },
      {
        name: 'C',
      },
      {
        name: 'CSS',
      },
      {
        name: 'PHP',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'React Native',
      },
      
      
      
    ],
  },
  {
    name: 'Toolbox',
    skills: [
      {
        name: 'MacOS',
      },
      {
        name: 'Linux',
      },
      {
        name: 'Git',
      },
      {
        name: 'Figma',
      },
      {
        name: 'Airtable',
      },
      {
        name: 'Adobe Suite',
      },
    ],
  },
];

/**
 * Portfolio section
 */




export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Today Reminder App',
    description: 'An iOS productivity app designed to present daily reminders and aid users in maintaining focus on their daily tasks.',
    url: 'https://github.com/rojinpra7/TodayReminder',
    image: porfolioImage5,
  },
  {
    
    title: 'Instagram Clone',
    description: 'Instagram clone app that allows users to log in/log out, upload/comment on photos.',
    url: 'https://github.com/rojinpra7/Parstagrams',
    image: porfolioImage1,
  },
  {
    title: 'Scrumdinger App',
    description: 'An iOS app that helps team manage their daily scrums.',
    url: 'https://github.com/rojinpra7/ScrumDinger',
    image: porfolioImage6,
  },
  
  {
    title: 'Flix Movie Browser',
    description: 'An iOS app that allows users to browse movies, view, and scroll through a list of movies.',
    url: 'https://github.com/rojinpra7/Flix',
    image: porfolioImage2,
  },
  {
    title: 'Twitter Clone',
    description: 'An iOS app that allows users to log in to their existing Twitter accounts, compose, favorite, log out, and retweet tweets.',
    url: 'https://github.com/rojinpra7/Flix',
    image: porfolioImage4,
  },
  {
    title: 'Online Shopping',
    description: 'A website for E-Commerce platform for buying variety of products.',
    url: 'https://github.com/rojinpra7/OnlineWebsite',
    image: porfolioImage3,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education1: TimelineItem1[] = [
  {
    date: 'September 2018 - December 2022',
    location: 'Kalamazoo, MI',
    title: 'Bachelors in Computer Science',
    content: 
      <p> • GPA: 3.71 <br></br>
          • Diether H. Haenicke Scholar
          • CS Departmental Scholar </p>
    ,
  },
];

export const education2: TimelineItem2[] = [
  {
    title: 'Relevant CourseWork',
    content: 
    <p> • Reusable Software Architecture <br></br>
        • Data Structures and Algorithms <br></br>
        • Web Framework <br></br>
        • Database Management <br></br>
        • Artificial Intelligence <br></br>
        • Introduction to Web Technologies <br></br> 
        • System programming with concepts <br></br>
        • Computer Systems 
    </p>
    ,
  },
];

export const experience: TimelineItem1[] = [
  {
    date: 'June 2022 - September 2022',
    location: 'Pranos',
    title: 'Software Engineer Intern',
    content: (
      <p>
        • Developed and maintained features for the Pranos Mobile App using Javascript and Typescript in React Native Framework, allowing users to publish and control multimedia on the HoloGlass system.<br></br>
        • Conducted research on React Native Bluetooth libraries and successfully implemented core functionality to request iOS Bluetooth permissions, ensuring compliance with App Store submission requirements.<br></br>
        • Enhanced code quality and app performance by optimizing the codebase and modularizing the navigation screen.<br></br>
      </p>
    ),
  },
  {
    date: 'September 2021 - December 2022',
    location: 'Office of Diversity and Inclusion at WMU',
    title: 'Web Content Manager',
    content: (
      <p>
        • Spearheaded digital content creation, website management, and social media updates by leveraging tools like Canva, Adobe Photoshop, and CMS to promote diversity and inclusion initiatives.<br></br>
        • Enhanced web traffic by approximately 15% through collaborative strategy development with senior managers, incorporating their feedback to consistently deliver innovative content.
      </p>
    ),
  },
  {
    date: 'February 2022 - April 2022',
    location: 'Develop for Good',
    title: 'Backend Developer Intern',
    content: (
      <p>
        • Designed and implemented a streamlined dashboard to meet the scaling need of a non-profit organization, resulting in an increase in operational efficiency and improved decision-making for a 6000-pound weekly produce distribution network.<br></br>
        • Collaborated with designers and developers to design features and wireframes in Figma, and to deliver mockups for an Airtable dashboard based on client needs and feedback.
      </p>
    ),
  },
  {
    date: 'Jan 2021 - May 2021',
    location: 'CS Department at WMU',
    title: 'Grader Assistant',
    content: (
      <p>
        • Assessed and graded code submissions from 120 students enrolled in the C Programming for Engineers/ Cybersecurity course at WMU using Visual Studio Code.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'rojin.prajapati7@gmail.com',
      href: 'mailto:rojin.prajapati7@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kalamazoo, MI',
      href: 'https://goo.gl/maps/xESCQ4pfQ1qQKegf7',
    },
    {
      type: ContactType.Instagram,
      text: '@rojinprazapati',
      href: 'https://www.instagram.com/rojinprazapati/',
    },
    {
      type: ContactType.Github,
      text: 'rojinpra7',
      href: 'https://github.com/rojinpra7',
    },
    {
      type: ContactType.LinkedIn,
      text: '',
      href: 'https://www.linkedin.com/in/rojinprajapati/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rojinpra7'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rojinprajapati/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rojinprazapati/'},
];
