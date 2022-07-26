
let menuBtn = document.querySelector(".burger-button");
let menu = document.querySelector(".burger");
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let section = document.querySelector('.destination-content');
let divs = section.querySelectorAll('.destination-image');
let l = divs.length;
let counter = 1;


let dotLine = document.querySelector(".section-button")
let dots = dotLine.querySelectorAll('.dot');
console.log(dots);
let selected = dots[1]; 
let unselected = dots[0];
let unselected1 = dots[2];
console.log(selected);
console.log(unselected);
console.log(counter);



for (let i = 0; i < l; i++) {
	divs[i].onclick = function(event){
		let pointer = 0;
		for (let i = 0; i < l; i++){
			if (divs[i] === event.target) pointer = i;
		}
	if (pointer == 0) {
		section.appendChild(divs[2]);
		section.appendChild(divs[0]);
		section.appendChild(divs[1]);
		counter -= 1;
		if (counter < 0) counter = 2;
	}
	if (pointer == 2) {
		section.appendChild(divs[0]);
		counter += 1;
		if (counter > 2) counter = 0;

	}
	divs = section.querySelectorAll('.destination-image');

	dotLine = document.querySelector(".section-button")
	dots = dotLine.querySelectorAll('.dot');
	console.log(dots);
	console.log('counter = ', counter);
	for (let i = 0; i < l; i++){
		dotLine.removeChild(dots[i]);
		console.log(dotLine.querySelectorAll('.dot'))
	}
	switch (counter) {
		case 0:
			dotLine.appendChild(selected);
			dotLine.appendChild(unselected);
			dotLine.appendChild(unselected1);
			break;
		case 1:	
		dotLine.appendChild(unselected);
		dotLine.appendChild(selected);
		dotLine.appendChild(unselected1);
		break;
		case 2:
			dotLine.appendChild(unselected);
			dotLine.appendChild(unselected1);
			dotLine.appendChild(selected);
		break;
	}
	console.log(dotLine.querySelectorAll('.dot'))



	}
}	


