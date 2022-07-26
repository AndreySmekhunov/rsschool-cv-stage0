let openLoginWindow = false;
let LW = document.getElementById('logButton');
LW.onclick = function(event) {
	let logForm = document.querySelector(".LoginWindow");
	logForm.style.display = 'flex';
	openLoginWindow = true;
	event.stopPropagation();
	}

let body = document.getElementsByTagName("body");

body[0].onclick = function(event){
	if(!openLoginWindow)
		return;
	let isLoginWindow = false;
	for(let i=0;i<event.path.length;i++){
		if( event.path[i].classList && event.path[i].classList[0] == "LoginWindow")
			isLoginWindow = true;
	}
	if(!isLoginWindow){
		let logForm = document.querySelector(".LoginWindow");
		logForm.style.display = 'none';
	}

	
}



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
let selected = dots[1]; 
let unselected = dots[0];
let unselected1 = dots[2];
let pointer = 0;


for (let i = 0; i < l; i++) {
	divs[i].onclick = function(event){
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
	colorDot();
	}
}	
let colorDot = function() {
	dotLine = document.querySelector(".section-button")
	dots = dotLine.querySelectorAll('.dot');

	for (let i = 0; i < l; i++){
		dotLine.removeChild(dots[i]);	}
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
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mobile-image");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
	counter = slideIndex - 1;
	colorDot();

}
