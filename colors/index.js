const colors = [{id: 'rose', color: '#FFC0CB'},{id: 'magenta', color: '#FF00FF'},{id: 'purple', color: '#800080'},
    {id: 'red', color: '#FF0000'},{id: 'orange', color: '#FFA500'},{id: 'yellow', color: '#FFFF00'},
    {id: 'green', color: '#00FF00'},{id: 'cyan', color: '#00FFFF'},{id: 'blue', color: '#0000FF'},
    {id:'white', color:'#FFFFFF'}];
let lastColor = '#FFFFFF';
let lastColorId = 'white';
let currentColor;
let currentColorId;
let array = [];
let timeId;
for (let i = 0; i < colors.length; i++) {
    let newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.id = colors[i].id;
    newItem.style.backgroundColor = colors[i].color;
    circles.append(newItem);
    }
document.querySelector('.palette').addEventListener('click', addColor);

function addColor(e) {
        let target = e.target;
        if (target.id == 'circles') return;
        currentColorId = target.id;
        if (currentColorId == lastColorId) return;
        console.log(lastColorId, currentColorId);
        colors.forEach(function(a) {if (a.id == currentColorId) currentColor = a.color})
        console.log(lastColor, currentColor);
        createColors(); 
        showColor();
        lastColor = currentColor;
        lastColorId = currentColorId;
        
}


function showColor() {
    document.querySelector('.demo').style.backgroundColor = array[array.length - 1];
    array.pop();
    if (array.length) timeId = setTimeout(showColor,100);
}

function createColors() {
array = [];
let a = getRgb(lastColor);
let b = getRgb(currentColor);
addColorList(a, b);
array.reverse();

}

function getRgb(color) {
    let rgb = [0,0,0];
    // console.log(color);
    rgb[0] = parseInt(color.slice(1,3),16);
    rgb[1] = parseInt(color.slice(3,5),16);
    rgb[2] = parseInt(color.slice(5),16);
    return rgb;
}

function addColorList(rgb1, rgb2) {
    let dif = [0,0,0];
    // console.log(rgb1, rgb2);
    for (let i = 0; i < 3; i++) {
        dif[i] = rgb2[i] - rgb1[i];
    }
    for (let i = 1; i < 21; i++) {
        r = Math.round(rgb1[0] + dif[0] / 20 * i);
        g = Math.round(rgb1[1] + dif[1] / 20 * i);
        b = Math.round(rgb1[2] + dif[2] / 20 * i);
        array.push(rgbToHex(r,g,b));
    }
}

function rgbToHex(r,g,b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // эту строку я спер, сам бы написал в три строки
}