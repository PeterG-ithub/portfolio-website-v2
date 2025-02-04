import locationIcon from '/icons/location.png'

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
                    <p class="time">
                        ${currentTime} AM
                    </p>
                </div>
            </div>
        </section>
    `;
}

const currentTime = '8:29'