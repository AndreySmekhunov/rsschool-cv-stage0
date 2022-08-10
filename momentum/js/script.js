const time = document.querySelector('.time');
const dateString = document.querySelector('.date');
const greetingPhrase = document.querySelector('.greeting');
const dayTime = ['night', 'morning', 'afternoon', 'evening'];

let myName = document.getElementById('myName');
let myCity = document.getElementById('myCity');
const days = ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentSlide = Math.round(Math.random() * 20);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const wind = ['Северный', 'Северо-восточный', 'Восточный', 'Юго-восточный', 'Южный', 'Юго-западный', 'Западный', 'Северо-западный','Северный'];

function showTime() {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();    
    dateString.textContent = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
    greetingPhrase.textContent = `Good ${dayTime[Math.floor(date.getHours()/6)]},`
    setTimeout(showTime, 1000);
  }

function showSlide() {
  const date = new Date();
  let bgTime = dayTime[Math.floor(date.getHours()/6)] + '/';
  let bgNumber = String(currentSlide).padStart(2,'0') + '.jpg';
  let bgPath = bgTime + bgNumber;    
  let body = document.querySelector('body');
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${bgPath}')`;
}

function previousSlide() {
  currentSlide -= 1;
  if (currentSlide < 1) currentSlide = 20;
  showSlide();
}
function nextSlide() {
  currentSlide += 1;
  if (currentSlide > 20) currentSlide = 1;
  showSlide();
}


function setLocalStorage() {
  localStorage.setItem('name', myName.value);
  localStorage.setItem('city', myCity.value);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) 
    myName.value = localStorage.getItem('name');
    else myName.value = '[Enter Name]';

  if(localStorage.getItem('city')) 
  myCity.value = localStorage.getItem('city');
    else myCity.value = 'Rostov-on-Don';
  
}

window.addEventListener('load', getLocalStorage);

async function getWeather() {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity.value}&lang=ru&appid=c9ea127026edaf65fdee79a0f962c585&units=metric`;
let response = await fetch(url);
if (response.ok) { 
  let data = await response.json();
  document.querySelector('.weather-icon').className = 'weather-icon owf';
  document.querySelector('.weather-icon').classList.add(`owf-${data.weather[0].id}`);
  document.querySelector('.temperature').textContent = `${data.main.temp.toFixed(0)}°C`;
  document.querySelector('.weather-description').textContent = data.weather[0].description;
  document.querySelector('.weather-error').textContent ='';
  let wDirection = Math.round(data.wind.deg/45);
  let wSpeed = Math.round(data.wind.speed);
  if (wSpeed == 0) document.querySelector('.wind').textContent = `Штиль`;
  else document.querySelector('.wind').textContent = `Ветер ${wind[wDirection]}, ${wSpeed} м/с`;
  document.querySelector('.humidity').textContent = `Влажность ${data.main.humidity.toFixed(0)}%`;

} else {
  document.querySelector('.weather-icon').className = 'weather-icon owf';
  document.querySelector('.temperature').textContent ='';
  document.querySelector('.weather-description').textContent = '';
  document.querySelector('.wind').textContent = '';
  document.querySelector('.humidity').textContent = '';
  document.querySelector('.weather-error').textContent = `Ошибка в названии города ${myCity.value}`;
  myCity.focus();
}
}
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    myCity.blur();
  }
}
function getQuotes() {  
  const quotes = [
    {
  "text": "Ничто так не выдает принадлежность человека к низшим классам общества, как способность разбираться в дорогих часах и автомобилях",
"author": "Виктор Пелевин. Generation 'П'"
    },

    {
  "text": "Вера, которую не разделяет никто, называется шизофренией.",
  "author": "Виктор Пелевин. Generation 'П'"
},

    {
  "text": "Антирусский заговор, безусловно, существует – проблема только в том, что в нем участвует все взрослое население России.",
  "author": "Виктор Пелевин. Generation 'П'"
},

    {
  "text": "Когда не думаешь, многое становится ясно.",
  "author": "Виктор Пелевин. Generation 'П'"
},
    {
  "text": "В наше время люди узнают о том, что они думают, по телевизору.",
  "author": "Виктор Пелевин. Generation 'П'"
},

    {
  "text": "Милосердие в том, что вместо крематориев у вас телевизоры и супермаркеты. А истина в том, что функция у них одна.",
  "author": "Виктор Пелевин. Generation 'П'"
}

]  
let quoteNum = Math.round(Math.random()*(quotes.length - 1));
  document.querySelector('.quote').textContent = quotes[quoteNum].text;
  document.querySelector('.author').textContent = quotes[quoteNum].author;

}


getQuotes();
showSlide();
showTime();
window.addEventListener('load', getWeather);
// document.addEventListener('DOMContentLoaded', getWeather);
myCity.addEventListener('keypress', setCity);

showSlide();
showTime();

