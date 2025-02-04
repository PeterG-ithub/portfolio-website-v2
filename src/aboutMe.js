import locationIcon from '/icons/location.png';

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
                <p class="availability">
                    <span class="online-indicator"></span> <!-- Green circle -->
                    Available to work
                </p>
            </div>
            <div class="about-me-right">
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
