import { renderAboutMe, updateTime } from './aboutMe'
import './style.css'
import githubLogo from '/icons/github.svg'
document.querySelector('#app').innerHTML = `
  <div>
    ${renderAboutMe()}
  </div>
`

// Update the time every second
setInterval(updateTime, 1000);