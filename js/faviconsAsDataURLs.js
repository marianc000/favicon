import {  BLURRED_URL, FOCUSED_URL } from './shared.js';

function fetchSvg(url) {
    return fetch(url)
        .then(res  => res .text() 
        .then(text => 'data:image/svg+xml;utf8,' + encodeURIComponent(text)));
}

fetchSvg(FOCUSED_URL).then(img => window.onfocus = () => favLink.href = img);
fetchSvg(BLURRED_URL).then(img => window.onblur = () => favLink.href = img);


