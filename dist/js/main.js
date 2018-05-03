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

	var next = function next() {
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		currentSlideNumber++;

		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}

		$slides[currentSlideNumber].classList.add("active");
	};

	var prev = function prev() {
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		currentSlideNumber--;

		if (currentSlideNumber < 0) {
			currentSlideNumber = $slides.length - 1;
		}

		$slides[currentSlideNumber].classList.add("active");
	};

	var jumpOne = function jumpOne() {
		stop();
		imageOne.classList.add("active");
		imageTwo.classList.remove("active");
		imageThree.classList.remove("active");
		imageFour.classList.remove("active");
	};

	var jumpTwo = function jumpTwo() {
		stop();
		imageOne.classList.remove("active");
		imageTwo.classList.add("active");
		imageThree.classList.remove("active");
		imageFour.classList.remove("active");
	};

	var jumpThree = function jumpThree() {
		stop();
		imageOne.classList.remove("active");
		imageTwo.classList.remove("active");
		imageThree.classList.add("active");
		imageFour.classList.remove("active");
	};

	var jumpFour = function jumpFour() {
		stop();
		imageOne.classList.remove("active");
		imageTwo.classList.remove("active");
		imageThree.classList.remove("active");
		imageFour.classList.add("active");
	};

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
