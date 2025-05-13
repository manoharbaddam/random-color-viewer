const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');


const valuesForHex = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','0'];


const getValue = ()=> valuesForHex[Math.floor(Math.random() * valuesForHex.length)];


const getColor = ()=>{
    let colorCode = "#";
    for(let i=0;i<6;i++){
        colorCode += getValue();
    }
    return colorCode;
}

console.log(getColor());

const colors = [color1, color2, color3, color4];
colors.forEach(colorBox => {
    const color = getColor();
    colorBox.textContent = color;
    colorBox.style.backgroundColor = color;
});




