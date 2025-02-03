// projects.js

// Project data
const projects = [
    {
        title: "Ant Simulation",
        image: "/images/ant-simulation-thumbnail.png",
        description: "A simulation of ant behavior using swarm intelligence algorithms.",
        tech: ["C++", "SFML", "Algorithms"],
        github: "https://github.com/PeterG-ithub/ant-simulation",
        demo: "https://peterg-ithub.github.io/ant-simulation", // Optional
    },
    {
        title: "SociWave",
        image: "/images/sociwave-thumbnail.png",
        description: "A social media analytics dashboard built with React and Node.js.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/PeterG-ithub/sociwave",
        demo: "https://sociwave.vercel.app", // Optional
    },
    // Add more projects here
];

// Function to create a project card
function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Tech chips
    const techChips = project.tech
        .map((tech) => `<div class="tech-chip">${tech}</div>`)
        .join("");

    // Buttons
    const buttons = `
        <a href="${project.github}" class="github" target="_blank">
            <img src="/icons/github-icon.svg" alt="GitHub" width="16">
            GitHub
        </a>
        ${
            project.demo
                ? `<a href="${project.demo}" class="demo" target="_blank">
                    <img src="/icons/live-demo-icon.svg" alt="Live Demo" width="16">
                    Live Demo
                </a>`
                : ""
        }
    `;

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-chips">${techChips}</div>
            <div class="project-buttons">${buttons}</div>
        </div>
    `;

    return card;
}

// Function to render all project cards
function renderProjectCards() {
    const projectCardsContainer = document.getElementById("project-cards");

    projects.forEach((project) => {
        const card = createProjectCard(project);
        projectCardsContainer.appendChild(card);
    });
}

// Render cards when the page loads
document.addEventListener("DOMContentLoaded", renderProjectCards);