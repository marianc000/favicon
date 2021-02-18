import { el, BLURRED_URL, FOCUSED_URL } from './shared.js';

async function fetchSvg(url) {
    const response = await fetch(url);
    const text = await response.text();
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(text);
}

(async () => {
    const [blurred, focused] = await Promise.all([
        fetchSvg(BLURRED_URL),
        fetchSvg(FOCUSED_URL)
    ]);

    window.onfocus = () => el.href = focused;
    window.onblur = () => el.href = blurred;
})();

