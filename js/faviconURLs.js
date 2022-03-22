import { BLURRED_URL, FOCUSED_URL } from './shared.js';

window.onfocus = () => favLink.href = FOCUSED_URL;
window.onblur = () => favLink.href = BLURRED_URL;


