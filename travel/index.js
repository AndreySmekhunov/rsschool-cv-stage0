console.log("Итоговая оценка 59/75") 
console.log("1. Вёрстка соответствует макету 33 из 48")
console.log("2. нет горизонтальной полосы прокрутки. контент сохранен. не то, чтобы сильно красиво, но 15 из 15")
console.log("Адаптивность есть. Но начиная с 719 и до 320 (неверно понял задачу). Работа адаптивного меню не полностью соответствует описанию. 11/22")


let menuBtn = document.querySelector(".burger-button");
let menu = document.querySelector(".burger");
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
 