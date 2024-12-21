import "@fortawesome/fontawesome-free/css/all.css";
import  ArgusSafetyIcon  from "../assets/images/icons/ArgusSafetyIcon.png"; // For Argus Safety
import  MedDRAIcon  from "../assets/images/icons/MedDRAIcon.jpg"; // For MedDRA
import  GraphPadPrismIcon  from "../assets/images/icons/GraphPadPrismIcon.jpg"; // For GraphPad Prism
import  ChemdrawIcon  from "../assets/images/icons/ChemdrawIcon.jpg"; // For ChemDraw
import  MendeleyIcon  from "../assets/images/icons/MendeleyIcon.png"; // For Mendeley
import  ExcelIcon  from "../assets/images/icons/ExcelIcon.jpg"; // For Microsoft Excel
import  WordIcon  from "../assets/images/icons/WordIcon.jpg"; // For Microsoft Word
import  PowerPointIcon  from "../assets/images/icons/PowerPointIcon.jpg"; // For Microsoft PowerPoint
import  LiteratureMonitoringIcon  from "../assets/images/icons/LiteratureMonitoringIcon.png"; // For Literature Monitoring
import  SOPIcon  from "../assets/images/icons/SOPIcon.jpg"; // For SOP (Standard Operating Procedures)
import  RegulatorySubmissionIcon  from "../assets/images/icons/RegulatorySubmissionIcon.jpg"; // For Regulatory Submissions
export const Links = [
  
  {

    id: "2",
    title: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/akansh_goel619?igsh=YnVicGlmbXp6bG1l",
  },
  {
    id: "3",
    title: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in/akansh-goel-280818152/",
  },
  {
    id: "4",
    title: "Contact",
    icon: "fa-solid fa-phone",
    url: "https://wa.me/7015403367",
  },
];

export const head = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const menuLinks = [
  {
    id: "1",
    title: "Home",
    toggle: "Home-Section",
  },
  {
    id: "2",
    title: "About Me",
    toggle: "#AboutSection",
  },
  {
    id: "3",
    title: "Practical Skills",
    toggle: "#SkillsSection",
  },
  {
    id: "4",
    title: "Work Experience",
    toggle: "#ProjectsSection",
  },
  
  
  
  
];

export const qualities = [
  { id: "01.", title: "Attention to Detail", skill: "Accurate Documentation & Archiving" },
  { id: "02.", title: "Regulatory Expertise", skill: "Compliance & Reporting" },
  { id: "03.", title: "Team Training & Leadership", skill: "Guidance & Knowledge Sharing" },
  { id: "04.", title: "Technical Proficiency", skill: "Argus Safety & MedDRA Coding" },
];

export const skills1 = [
  { name: "DSUR Preparation", percentage: "90%" },
  { name: "Signal Management", percentage: "85%" },
  { name: "Regulatory Submissions", percentage: "80%" },
  { name: "Reconciliation Activities", percentage: "75%" },
  { name: "ICSR Case Processing (Argus Safety)", percentage: "88%" },
];

export const skills2 = [
  { name: "MedDRA Coding", percentage: "80%" },
  { name: "Follow-up Query Management", percentage: "75%" },
  { name: "Literature Monitoring", percentage: "70%" },
  { name: "Training & Team Management", percentage: "85%" },
];

export const technologyIconsFixed = [
  {
    id: 1,
    iconFlex: ArgusSafetyIcon, // Argus Safety (used for ICSR case processing)
    width: 200,
  },
  {
    id: 2,
    iconFlex: MedDRAIcon, // MedDRA (used for medical coding)
    width: 200,
  },
  {
    id: 3,
    iconFlex: GraphPadPrismIcon, // GraphPad Prism (for statistical analysis)
    width: 200,
  },
  {
    id: 4,
    iconFlex: ChemdrawIcon, // ChemDraw (used for chemical structure drawing)
    width: 200,
  },
  {
    id: 5,
    iconFlex: MendeleyIcon, // Mendeley (reference management software)
    width: 200,
  },
  {
    id: 6,
    iconFlex: ExcelIcon, // Microsoft Excel (used for data management)
    width: 200,
  },
  {
    id: 7,
    iconFlex: WordIcon, // Microsoft Word (for report preparation)
    width: 200,
  },
  {
    id: 8,
    iconFlex: PowerPointIcon, // Microsoft PowerPoint (for presentations)
    width: 200,
  },
  {
    id: 9,
    iconFlex: LiteratureMonitoringIcon, // Literature Monitoring tools (used for literature search)
    width: 200,
  },
  {
    id: 10,
    iconFlex: SOPIcon, // SOP (Standard Operating Procedures, key in pharmacovigilance)
    width: 200,
  },
  {
    id: 11,
    iconFlex: RegulatorySubmissionIcon, // Regulatory Submissions (used for DSUR submissions)
    width: 200,
  },
];

const Constants = {
  Links,
  menuLinks,
  qualities,
  skills1,
  skills2,
  technologyIconsFixed
};

export default Constants;