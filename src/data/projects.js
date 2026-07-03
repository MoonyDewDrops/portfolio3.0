import focus from "../assets/images/focus6.webp";
import remote from "../assets/images/remotecontrol.webp";
import happy from "../assets/images/happyherbivore.webp";
import portfolio from "../assets/images/oldportfolio.webp";

export const projects = [
    {
        key: "remote",
        title: "Remote Control",
        featured: true,
        image: remote,
        tech: ["Python", "Flask", "Socket.IO", "JavaScript"],
        description: "Een browsergebaseerd spel-lobbiesysteem waar gebruikers multiplayer-sessies kunnen hosten of eraan kunnen deelnemen. Bevat momenteel een reactietijdspel en is gebouwd om meer spellen te ondersteunen die ik in de toekomst zal maken.",
        github: "https://github.com/MoonyDewDrops/remoteControl2",
        demo: "https://remotecontrol2.onrender.com/",
    },

    {
        key: "focus6",
        title: "Focus 6",
        image: focus,
        tech: ["PHP", "MySQL", "JavaScript"],
        description: "Bedrijfswebsite met een zelfgebouwd CMS zodat de klant zelf pagina's kon beheren en toevoegen.",
        github: "https://github.com/MoonyDewDrops/focus6",
        demo: "https://u230067.gluwebsite.nl/focus6/?view",
    },

    {
        key: "portfolio",
        title: "Portfolio v2",
        image: portfolio,
        tech: ["HTML", "CSS", "JavaScript"],
        description: "Mijn oude portfolio, gemaakt met HTML, CSS en JavaScript. Het is een statische website die mijn projecten en vaardigheden laat zien.",
        github: "https://github.com/MoonyDewDrops/portfolio2.0",
        demo: "https://juliabrouwer.onrender.com/home",
    },

    {
        key: "happy",
        title: "Happy Herbivore",
        featured: true,
        image: happy,
        tech: ["PHP", "JS", "Figma"],
        description: "Een volledig werkend kiosksysteem voor een fictief plantaardig foodmerk, met verbeterd design, taalwisseling en bonprinting op het testapparaat van school.",
        github: "https://github.com/MoonyDewDrops/happyherbivore",
        demo: "https://u240660.gluwebsite.nl/kiosk/",
    },
];