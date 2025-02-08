// tech.js

// Tech data
const techStack = [
    {
        name: "Git",
        icon: "/icons/git.svg",
        background: "#45251e",
        description: "Version control system",
        size: "32px",  // You can add the size here if you want
    },
    {
        name: "Tailwind",
        background: "#123b4e",
        icon: "/icons/tailwind.svg",
        description: "CSS framework",
        size: "32px",  // Add size if needed
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        background: "#4a4308",
        description: "Programming language",
        size: "32px",  // Add size if needed
    },
    {
        name: "C++",
        icon: "/icons/cpp.png",
        background: "#041d40",
        description: "Programming language",
        size: "32px",  // Add size if needed
    },
    {
        name: "Python",
        icon: "/icons/python.svg",
        size: "60px",  // Already included here
        background: "#c5ebe4",
        description: "Programming language",
    },
    {
        name: "PostgreSQL",
        icon: "/icons/psql.svg",
        background: "#99b3c8",
        description: "Work in Progress",
        size: "36px",  // Add size if needed
    },
    {
        name: "Ruby on Rails",
        icon: "/icons/ruby-on-rails.svg",
        background: "#eb9999",
        description: "Work in Progress",
        size: "36px",  // Add size if needed
    },
    {
        name: "Vite",
        icon: "/icons/vite.svg",
        background: "#1c1733",
        description: "Work in Progress",
        size: "32px",  // Add size if needed
    },
    {
        name: "Kotlin",
        icon: "/icons/kotlin.svg",
        background: "#1c1733",
        description: "Work in Progress",
        size: "32px",  // Add size if needed
    },
];

// Function to create a tech card
function createTechCard(tech) {
    const card = document.createElement("div");
    card.classList.add("tech-card");

    card.innerHTML = `
        <div class="img-container" style="background-color: ${tech.background};">
            <img src="${tech.icon}" alt="${tech.name}" style="width: ${tech.size}; height: ${tech.size};">
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