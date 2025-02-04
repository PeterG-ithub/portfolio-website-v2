import { renderAboutMe } from './aboutMe'
import './style.css'
import githubLogo from '/icons/github.svg'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/PeterG-ithub" class="link-container github-container">
        <img src="${githubLogo}" class="github-icon" alt="github logo">
        GitHub
    </a>
    ${renderAboutMe()}
  </div>
`
