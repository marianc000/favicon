import { el,BLURRED_URL,FOCUSED_URL } from './shared.js'; 

window.onfocus = () => el.href = FOCUSED_URL;
window.onblur = () => el.href = BLURRED_URL;


