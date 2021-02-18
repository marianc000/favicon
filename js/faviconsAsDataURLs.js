import { el, BLURRED_URL, FOCUSED_URL } from './shared.js';


function fetchSvg(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => 'data:image/svg+xml;utf8,' + encodeURIComponent(text));
}

fetchSvg(FOCUSED_URL)
    .then(img => window.onfocus = () => el.href = img);
fetchSvg(BLURRED_URL)
    .then(img => window.onblur = () => el.href = img);


