const colors = [{id: 'rose', color: '#FFC0CB'},{id: 'magenta', color: '#FF00FF'},{id: 'purple', color: '#800080'},
    {id: 'red', color: '#FF0000'},{id: 'orange', color: '#FFA500'},{id: 'yellow', color: '#FFFF00'},
    {id: 'green', color: '#00FF00'},{id: 'cyan', color: '#00FFFF'},{id: 'blue', color: '#0000FF'}];
let colorSub = '';
let colorArr = [];
let array = [];
let isPlay = false;
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
        let selectId = target.id;
        colors.forEach(function(a) 
        {if (a.id == selectId) {if (colorSub) colorSub = colorSub + ', ' + a.id
        else colorSub = a.id; colorArr.push(a.color); document.querySelector('.demo').style.backgroundColor = a.color}});
        document.querySelector('.text').textContent = colorSub;
        
}

document.querySelector('.play').addEventListener('click', playColor);
document.querySelector('.pause').addEventListener('click', stopColor);
document.querySelector('.clear').addEventListener('click', clearColor);

function clearColor() {
    if (isPlay) clearInterval(timeId);
    colorSub = '';
    isPlay = false;
    document.querySelector('.text').textContent = colorSub;

}

function playColor() {
    createColors(); 
    console.log(array);
    console.log(array.length);
    showColor();

}

function showColor() {
    isPlay = true;
    console.log(array.length);
    document.querySelector('.demo').style.backgroundColor = array[array.length - 1];
    array.pop();
    if (array.length) timeId = setTimeout(showColor,100);
}

function stopColor() {
    if (isPlay) { 
        clearInterval(timeId); 
        isPlay = false
    }
    else {
        isPlay = true;
        showColor();

    }

}

function createColors() {
array = [];
// console.log(colorArr);
let a,b;
for (let i = 0; i < colorArr.length - 1; i++) {
    a = getRgb(colorArr[i]);
    b = getRgb(colorArr[i+1]);
    // console.log(colorArr[i], a, colorArr[i + 1], b);
    addColorList(a, b);
    }
array.reverse();
// console.log(array);
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
    for (let i = 1; i < 11; i++) {
        r = Math.round(rgb1[0] + dif[0] / 10 * i);
        g = Math.round(rgb1[1] + dif[1] / 10 * i);
        b = Math.round(rgb1[2] + dif[2] / 10 * i);
        array.push(rgbToHex(r,g,b));
    }
}

function rgbToHex(r,g,b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}