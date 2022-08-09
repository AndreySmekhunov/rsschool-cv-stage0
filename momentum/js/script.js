const time = document.querySelector('.time');
const dateString = document.querySelector('.date');
const greetingPhrase = document.querySelector('.greeting');
const dayTime = ['night', 'morning', 'afternoon', 'evening']
const days = ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentSlide = Math.round(Math.random() * 20);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
showSlide();
  showTime();
