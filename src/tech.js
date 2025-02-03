// tech.js

// Tech data
const techStack = [
    {
        name: "Git",
        icon: "/icons/git-icon.svg", // Path to the icon
        description: "Version control system",
    },
    {
        name: "Tailwind CSS",
        icon: "/icons/tailwind-icon.svg",
        description: "CSS framework",
    },
    {
        name: "JavaScript",
        icon: "/icons/js-icon.svg",
        description: "Programming language for the web",
    },
    // Add more techs here
];

// Function to create a tech card
function createTechCard(tech) {
    const card = document.createElement("div");
    card.classList.add("tech-card");

    card.innerHTML = `
        <img src="${tech.icon}" alt="${tech.name}">
        <h3>${tech.name}</h3>
        <p>${tech.description}</p>
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