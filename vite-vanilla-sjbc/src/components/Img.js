import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'

export const Img1 = () => {
  return `
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    `
};

export const Img2 = () => {
  return `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    `
};
