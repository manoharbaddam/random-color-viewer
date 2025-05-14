const palette = document.getElementById("palette");
const button = document.getElementById("addMore");
const refresh = document.getElementById("refresh");

const MAX_COLORS = 10;
const INITIAL_COLORS = 5;
let colorCount = 0;

const getRandomColor = () =>
    '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase();

const hexToRgb = hex => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
};

const isLight = ([r, g, b]) => {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160;
};

const addColor = () => {

    const color = getRandomColor();
    const rgb = hexToRgb(color);

    const colorContainer = document.createElement('div');
    colorContainer.className = "color";
    colorContainer.textContent = color;
    colorContainer.style.backgroundColor = color;
    colorContainer.style.color = isLight(rgb) ? 'black' : 'white';
    palette.appendChild(colorContainer);
    colorCount++;
    if (colorCount >= MAX_COLORS) {
        button.disabled = true;
        button.textContent = "Limit Reached";
    }
}

const resetPalette = () => {
    palette.textContent = "";
    colorCount = 0;
    button.disabled = false;
    button.textContent = "Add More";
    for (let i = 0; i < INITIAL_COLORS; i++) {
        addColor();
    }
};

resetPalette();

button.addEventListener("click", () => {
    if (colorCount < MAX_COLORS) {
        addColor();
    }
});

refresh.addEventListener("click", resetPalette);

