import { BLURRED_URL, FOCUSED_URL } from './shared.js';

function fetchSvg(url) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob));
}

fetchSvg(FOCUSED_URL).then(img => window.onfocus = () => favLink.href = img);
fetchSvg(BLURRED_URL).then(img => window.onblur = () => favLink.href = img);

 

