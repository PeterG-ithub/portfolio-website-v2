// tech.js

// Tech data
const techStack = [
    {
        name: "Git",
        icon: "/icons/git.svg", // Path to the icon
        background: "#45251e",
        description: "Version control system",
    },
    {
        name: "Tailwind",
        background: "#123b4e",
        icon: "/icons/tailwind.svg",
        description: "CSS framework",
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        background: "#4a4308",
        description: "Programming language for the web",
    },
    {
        name: "C++",
        icon: "/icons/cpp.png",
        background: "#041d40",
        description: "Programming language",
    },
    {
        name: "WIP",
        icon: "/icons/wip.png",
        background: "#002e6d",
        description: "Work in Progress",
    },
    {
        name: "WIP",
        icon: "/icons/wip.png",
        background: "#002e6d",
        description: "Work in Progress",
    },
    {
        name: "WIP",
        icon: "/icons/wip.png",
        background: "#002e6d",
        description: "Work in Progress",
    },
    {
        name: "WIP",
        icon: "/icons/wip.png",
        background: "#002e6d",
        description: "Work in Progress",
    },
    
    // Add more techs here
];

// Function to create a tech card
function createTechCard(tech) {
    const card = document.createElement("div");
    card.classList.add("tech-card");

    card.innerHTML = `
        <div class="img-container" style="background-color: ${tech.background};">
            <img src="${tech.icon}" alt="${tech.name}">
        </div>
        <div>
            <h4>${tech.name}</h4>
            <p>${tech.description}</p>
        </div>
    `;

    return card;
}

// Function to render all tech cards
function renderTechCards() {
    const techCardsContainer = document.getElementById("tech-cards");

    techStack.forEach((tech) => {
        const card = createTechCard(tech);
        techCardsContainer.appendChild(card);
    });
}

// Render cards when the page loads
document.addEventListener("DOMContentLoaded", renderTechCards);