console.log("Итоговая оценка 78, 110 - 2 за заголовки, - 24 за макет,") 
console.log("- 6 за криворукость в css, перепишу полностью в след части travel")
console.log("Вёрстка валидная +10 (+10)")
console.log("Вёрстка семантическая +20 (+18)")
console.log("Вёрстка соответствует макету +48 ( +24)")
console.log("Требования к css + 12 (+6)")
console.log("Интерактивность, реализуемая через css +20 (+20)")

let menuBtn = document.querySelector(".burger-button");
let menu = document.querySelector(".burger");
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
 