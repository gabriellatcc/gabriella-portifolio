export const SITE = {
    author: "Gabriella Corrêa",
    name: "GABRIELLA CORRÊA'S PORTIFOLIO",
    shortName: "GABRIELLA' PORTIFOLIO",
    domain: "https://gabriellatcc.github.io/gabriella-portifolio/",
    description: "A personal portfolio website showcasing skills, projects, and experience in the field of technology. The site provides an overview of my professional background, technical expertise, and educational achievements, serving as a platform to connect with potential employers and collaborators.",
    mainDescription: "Welcome to my personal portfolio! I'm a passionate developer with a strong background in technology and a keen interest in creating innovative solutions."
} as const;

export const CONTACT = {
    email: "gabriellatccorrea@gmail.com",
    linkedin: "https://www.linkedin.com/in/gabriellatccorrea/",
    githubAlias: "gabriellatcc",
    whatsapp: "5535992708720",
} as const;

export const LOCATION = {
    label: "Cruzeiro, SP - Brazil (LATAM)",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cruzeiro%2C+SP%2C+Brazil",
} as const;

export const SCHEDULE = {
    days: "Monday - Saturday",
    hours: "9:00 AM - 6:00 PM (GMT-3)",
} as const;

export const FOOTER_TEXT = {
    freelanceTitle: "Freelance Services",
    freelanceBody:"I am available for freelance work. If you have a project in mind, feel free to reach out to me via email or LinkedIn.",
    contactTitle: "Get in Touch",
    contactBody: "Let's connect and discuss how we can work together.",
} as const;

export const LINKS = {
    email: `mailto:${CONTACT.email}`,
    whatsapp: `https://wa.me/${CONTACT.whatsapp}`,
    github: `https://github.com/${CONTACT.githubAlias}`,
    linkedin: CONTACT.linkedin,
} as const;