
let myCity = document.getElementById('myCity');

function setLocalStorage() {
  localStorage.setItem('city', myCity.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {

  if(localStorage.getItem('city')) 
  myCity.value = localStorage.getItem('city');
    else myCity.value = 'Rostov-on-Don';
  
}
window.addEventListener('load', getLocalStorage);

async function getWeather() {
// let url = `http://api.openweathermap.org/geo/1.0/direct?q=${myCity.value},724&limit=5&appid=c9ea127026edaf65fdee79a0f962c585`;
// let response = await fetch(url);
// if (response.ok) { 
//   let data = await response.json();
//   let lat = data[0].lat;
//   let lon = data[0].lon;
// let lat = 37.9775416;
// let lon = -0.6828446
let lat = 37.98
let lon = -0.68


  // document.querySelector('.main').textContent = lat.toString() + lon.toString();
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=c9ea127026edaf65fdee79a0f962c585`
  let response = await fetch(url);
  if (response.ok) { 
    let data = await response.json();
    let str = '';
    for (let i = 0; i < data.cnt; i++)
      str = str + data.list[i].weather[0].description + ', ' + data.list[i].cloude.all + ', ';
      document.querySelector('.main').textContent = str;  
  }

 
  // document.querySelector('.weather-icon').className = 'weather-icon owf';
  // document.querySelector('.weather-icon').classList.add(`owf-${data.weather[0].id}`);
 
  // document.querySelector('.weather-description').textContent = data.weather[0].description;
  // document.querySelector('.weather-error').textContent ='';
  // let wDirection = Math.round(data.wind.deg/45);
  // let wSpeed = Math.round(data.wind.speed);
  // if (wSpeed == 0) document.querySelector('.wind').textContent = `Штиль`;
  // else document.querySelector('.wind').textContent = `Ветер ${wind[wDirection]}, ${wSpeed} м/с`;
  // document.querySelector('.humidity').textContent = `Влажность ${data.main.humidity.toFixed(0)}%`;

 else {
  // document.querySelector('.weather-icon').className = 'weather-icon owf';
  // document.querySelector('.temperature').textContent ='';
  // document.querySelector('.weather-description').textContent = '';
  // document.querySelector('.wind').textContent = '';
  // document.querySelector('.humidity').textContent = '';
  document.querySelector('.main').textContent = `Ошибка в названии города ${myCity.value}`;
  myCity.focus();
}
}
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    myCity.blur();
  }
}

window.addEventListener('load', getWeather);
// document.addEventListener('DOMContentLoaded', getWeather);
myCity.addEventListener('keypress', setCity);


