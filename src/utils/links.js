import package1 from "../assets/images/package-1.jpg";
import package2 from "../assets/images/package-2.jpg";
import package3 from "../assets/images/package-3.jpg";
import package4 from "../assets/images/package-4.jpg";
import package5 from "../assets/images/package-5.jpg";

// https://ownersprideoma.com/services
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#packages", text: "packages" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-car",
    title: "Thorough Wash",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fa-solid fa-magnifying-glass",
    title: "Complete Detail",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fa-solid fa-shield",
    title: "Ceramic Protection",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const packages = [
  {
    id: 1,
    image: package1,
    type: "wash",
    title: "Deluxe Hand Wash",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Exterior",
    duration: 1,
    cost: 95,
  },
  {
    id: 2,
    image: package2,
    type: "correction and protection",
    title: "double diamond wash",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Exterior",
    duration: 1.5,
    cost: 150,
  },

  {
    id: 3,
    image: package3,
    type: "Clean",
    title: "Ultimate Interior",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Interior",
    duration: 2,
    cost: 155,
  },
  {
    id: 4,
    image: package4,
    type: "Complete Makeover",
    title: "diamond  detail",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Interior/Exterior",
    duration: 3,
    cost: 270,
  },
  {
    id: 5,
    image: package5,
    type: "Ceramic Gloss & Shine",
    title: "Correction and Protection",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "3 year coating",
    duration: 2,
    cost: 599,
  },
];
