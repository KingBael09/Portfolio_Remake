import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiNextdotjs,
  SiLinux,
  SiGit,
  SiPython,
  SiTypescript,
  SiMaterialui,
  SiBootstrap,
  SiExpress,
  SiSass,
} from "react-icons/si";

export type skillType = {
  name: string;
  icon: JSX.Element;
  level: string;
  intNode: SubSkillType[] | null;
  type: string | null;
  isFav: boolean;
  isLearning: boolean;
};

// TODO: Learn difference between interface and type
// TODO: Try dynamic prop passing in icon TS

export type SubSkillType = {
  name: string;
  icon: JSX.Element | null;
  level: string;
  isLearning: boolean;
};

export const SkillData: skillType[] = [
  {
    name: "C",
    icon: <SiC style={{ color: "#fff" }} />,
    level: "Intermediate",
    intNode: null,
    type: "Language",
    isFav: false,
    isLearning: false,
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#0086d4" }} />,
    level: "Intermediate",
    intNode: null,
    type: "Language",
    isFav: false,
    isLearning: false,
  },

  {
    name: "HTML",
    icon: <SiHtml5 style={{ color: "#ff6d00" }} />,
    level: "Expert",
    intNode: null,
    type: null,
    isFav: false,
    isLearning: false,
  },
  {
    name: "CSS",
    icon: <SiCss3 style={{ color: "#2196f3" }} />,
    level: "Expert",
    intNode: [
      {
        name: "BootStrap",
        icon: <SiBootstrap style={{ color: "#a87cff" }} />,
        level: "Intermediate",
        isLearning: false,
      },
      {
        name: "Sass",
        icon: <SiSass style={{ color: "#bf4080" }} />,
        level: "Beginner",
        isLearning: true,
      },
    ],
    type: null,
    isFav: false,
    isLearning: false,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#f7df1e" }} />,
    level: "Intermediate",
    intNode: [
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
        level: "Beginner",
        isLearning: false,
      },
    ],
    type: "Language",
    isFav: true,
    isLearning: false,
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs style={{ color: "#83cd29" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "ExpressJS",
        icon: <SiExpress style={{ color: "#353535" }} />,
        level: "Beginner",
        isLearning: true,
      },
    ],
    type: "Backend",
    isFav: true,
    isLearning: true,
  },
  {
    name: "React",
    icon: <SiReact style={{ color: "#61dbfb" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "Material UI",
        icon: <SiMaterialui style={{ color: "#007fff" }} />,
        level: "Beginner",
        isLearning: true,
      },
    ],
    type: "FrontEnd",
    isFav: true,
    isLearning: true,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#4faa41" }} />,
    level: "Beginner",
    intNode: null,
    type: "Database",
    isFav: true,
    isLearning: true,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs style={{ color: "#fff" }} />,
    level: "Beginner",
    intNode: null,
    type: "React Framework",
    isFav: true,
    isLearning: true,
  },

  {
    name: "Python",
    icon: <SiPython style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: null,
    type: "Language",
    isFav: true,
    isLearning: true,
  },
];

export const ToolData: skillType[] = [
  {
    name: "Linux",
    icon: <SiLinux style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: null,
    type: "Operating System",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Git",
    icon: <SiGit style={{ color: "#f05033" }} />,
    level: "Beginner",
    intNode: null,
    type: "Version Control",
    isFav: true,
    isLearning: true,
  },
];
