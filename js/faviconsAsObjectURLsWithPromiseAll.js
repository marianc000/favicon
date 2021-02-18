import {el, BLURRED_URL, FOCUSED_URL } from './shared.js';

function fetchSvg(url) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob));
}

Promise.all([
    fetchSvg(BLURRED_URL),
    fetchSvg(FOCUSED_URL)
])
    .then(([blurred, focused]) => {
        window.onfocus = () => el.href = focused;
        window.onblur = () => el.href = blurred;
    });

