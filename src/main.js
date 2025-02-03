import './style.css'
import githubLogo from '/icons/github.svg'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/PeterG-ithub" class="link-container github-container">
        <img src="${githubLogo}" class="github-icon" alt="github logo">
        GitHub
    </a>
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
                <p class="location">
                    Rancho Cucamonga, California
                </p>
                <p>8:28 AM</p>
            </div>
        </div>
    </section>
  </div>
`

setupCounter(document.querySelector('#counter'))
