import locationIcon from '/icons/location.png';
import githubLogo from '/icons/github.svg';
import linkedInLogo from '/icons/linkedin.png'
import upworkLogo from '/icons/upwork.png'

// Function to get the current time in HH:MM AM/PM format
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Ensure two-digit minutes
    const ampm = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${hours}:${minutes} ${ampm}`;
}

// Function to render the About Me section
export function renderAboutMe() {
    return `
        <section class="about-me">
            <div class="about-me-left">
                <img src="images/doggo.png" alt="Your Name" class="headshot">
                
                <div class="link-container">
                    <a href="https://github.com/PeterG-ithub" target="_blank">
                        <img src="${githubLogo}" alt="GitHub Logo" class="github-icon">
                        <span class="tooltip">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/peter-gabradilla/" target="_blank">
                        <img src="${linkedInLogo}" alt="LinkedIn Logo" class="github-icon">
                        <span class="tooltip">LinkedIn</span>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01232c983ac1a4f353?mp_source=share" target="_blank">
                        <img src="${upworkLogo}" alt="Upwork Logo" class="github-icon">
                        <span class="tooltip">Upwork</span>
                    </a>
                </div>
            </div>
            <div class="about-me-right">
                <div class="header">
                    <h1>Hi, I am Peter</h1>
                    <div class="avail-container">
                        <img src="${locationIcon}" class="location-icon" alt="location icon">
                        <p class="location">
                            Rancho Cucamonga, California
                        </p>
                        <p class="time" id="current-time">
                            ${getCurrentTime()}
                        </p>
                    </div>
                </div>
                <div class="description">
                    <p class="text">
                        I am a developer and tinkerer passionate about building tools with code. 
                        I build apps, simulations, and AI experiments to understand how things work. 
                        Currently exploring AI-driven solutions.
                    </p>
                </div>
                
            </div>
        </section>
    `;
}

// Function to update the time dynamically every second
export function updateTime() {
    const timeElement = document.getElementById("current-time");
    if (timeElement) {
        timeElement.textContent = getCurrentTime();
    }
}
