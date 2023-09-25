import '../src/styles/style.css'
import { Title } from './components/Title.js';
import { Paragraph } from './components/Paragraph.js'
import { Card } from './components/Card.js'
import { Button } from './components/Button.js'
import { Href1, Href2 } from './components/Href.js';
import { Img1, Img2 } from './components/Img.js';

const App = () => {
  return `
  <div>
    ${Href1({ children: Img1() })}
    ${Href2({ children: Img2() })}
    ${Title({ title: "Good Morning!!! 💛💙💖" })}
    ${Title({ title: "Good Afternoon!!! 💛💙💖" })}
    ${Title({ title: "Good Evening!!! 💛💙💖" })}
    ${Card({ children: Button() })}
    ${Paragraph({ text: "You can forever!!!" })}
    ${Paragraph({ text: "Never say never ;)))" })}
  </div>
`
}

document.querySelector('#app').innerHTML = App();
