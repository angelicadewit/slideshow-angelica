"use strict";

var slideshow = function slideshow(time, selector) {
	var intervalID = void 0;
	var currentSlideNumber = 0;
	var $slideshowContainer = document.querySelector(selector);
	var $slides = $slideshowContainer.querySelectorAll(".slide");
	var imageOne = document.querySelector(".one");
	var imageTwo = document.querySelector(".two");
	var imageThree = document.querySelector(".three");
	var imageFour = document.querySelector(".four");

	// find the element we're going to build the slideshow inside
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector);
		return false;
	}

	var hideOldSlide = function hideOldSlide() {
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
	};

	var showNewSlide = function showNewSlide() {
		$slides[currentSlideNumber].classList.add("active");
	};

	var next = function next() {
		hideOldSlide();
		currentSlideNumber++;

		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}
		showNewSlide();
	};

	var prev = function prev() {
		hideOldSlide();
		currentSlideNumber--;

		if (currentSlideNumber < 0) {
			currentSlideNumber = $slides.length - 1;
		}

		showNewSlide();
	};

	var jump = function jump(slideNum) {
		hideOldSlide();
		currentSlideNumber = slideNum;
		showNewSlide();
	};

	// let jumpOne = function(){
	// 	stop()
	// 	imageOne.classList.add("active")
	// 	imageTwo.classList.remove("active")
	// 	imageThree.classList.remove("active")
	// 	imageFour.classList.remove("active")
	// }

	// let jumpTwo = function(){
	// 	stop()
	// 	imageOne.classList.remove("active")
	// 	imageTwo.classList.add("active")
	// 	imageThree.classList.remove("active")
	// 	imageFour.classList.remove("active")
	// }

	// let jumpThree = function(){
	// 	stop()
	// 	imageOne.classList.remove("active")
	// 	imageTwo.classList.remove("active")
	// 	imageThree.classList.add("active")
	// 	imageFour.classList.remove("active")
	// }

	// let jumpFour = function(){
	// 	stop()
	// 	imageOne.classList.remove("active")
	// 	imageTwo.classList.remove("active")
	// 	imageThree.classList.remove("active")
	// 	imageFour.classList.add("active")
	// }


	var start = function start() {
		stop();
		intervalID = setInterval(next, time);
	};

	var stop = function stop() {
		clearInterval(intervalID);
	};

	start();

	return {
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jumpOne: jumpOne,
		jumpTwo: jumpTwo,
		jumpThree: jumpThree,
		jumpFour: jumpFour
	};
};

/* 

write jump function


*/
//# sourceMappingURL=main.js.map
