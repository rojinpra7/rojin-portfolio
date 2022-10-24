import {
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
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
 * Section definition
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
      href: 'https://drive.google.com/file/d/17QxNHvm2GgDwvY8RNVceSBskW5v_lcL_/view?usp=sharing',
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
      I am a senior studying Computer Science at Western Michigan University. I'm an <strong className="text-stone-100">athlete</strong> at heart with an entrepreneurial spirit and a passion to <strong className="text-stone-100">create</strong>. I want to indulge myself in areas that will not limit my <strong className="text-stone-100">creative freedom</strong> but will instead inspire me to achieve greater heights. This is why I chose the field of computer science because of its limitless opportunities and freedom to create and innovate new ideas.
      <br></br><br></br>I'm looking for opportunities to work on a project that will help me to expand and grow my skills. Ultimately, my purpose is to involve in projects that will help improve the lives and community. 
    </>

  ),
  aboutItems: [
    {label: 'Location', text: 'Kalamazoo, MI', Icon: MapIcon},
    {label: 'Interests', text: 'Soccer, Trekking, Videography, Filmmaking', Icon: SparklesIcon},
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
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Javascript',
      },
      {
        name: 'Python',
      },
      {
        name: 'Django',
      },
      {
        name: 'SQL',
      },
      {
        name: 'PHP',
      },
      {
        name: 'Swift',
      },
      {
        name: 'C',
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
    title: 'Online Shopping',
    description: 'A website for E-Commerce platform for buying variety of products.',
    url: 'https://github.com/rojinpra7/OnlineWebsite',
    image: porfolioImage3,
  },
  {
    
    title: 'Instagram Clone',
    description: 'Instagram clone app that allows users to log in/log out, upload/comment on photos.',
    url: 'https://github.com/rojinpra7/Parstagrams',
    image: porfolioImage1,
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
      <p> • GPA: 3.76 <br></br>
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
        • Developed a Pranos media control Mobile app using JavaScript and TypeScript in React Native Framework that connects to a device with Bluetooth Low Energy.<br></br>
        • Optimized the codebase, worked on Bluetooth related code on the front end using React Native BLE Library. <br></br>
        • Implemented iOS Bluetooth permission functionalities. <br></br>
      </p>
    ),
  },
  {
    date: 'September 2021 - Present',
    location: 'Office of Diversity and Inclusion at WMU',
    title: 'Web Content Manager',
    content: (
      <p>
        • Collaborated with marketing and design teams to plan and develop site content, style, and layout. <br></br>
        • Managed content distribution and social media platforms to increase web traffic.
      </p>
    ),
  },
  {
    date: 'Jan 2021 - May 2021',
    location: 'CS Department at WMU',
    title: 'Grader Assistant',
    content: (
      <p>
        • Reviewed and graded the code for the C programming for Engineers/ Cybersecurity course (CS1200) including assignments, exams, and quizzes.
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
