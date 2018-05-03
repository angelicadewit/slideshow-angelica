

let slideshow = function(time, selector) {
	let intervalID;
	let currentSlideNumber = 0;
	let $slideshowContainer = document.querySelector(selector);
	let $slides = $slideshowContainer.querySelectorAll(".slide");
	let imageOne = document.querySelector(".one");
	let imageTwo = document.querySelector(".two");
	let imageThree = document.querySelector(".three");
	let imageFour = document.querySelector(".four");
	

	// find the element we're going to build the slideshow inside
	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}

	let hideOldSlide = function(){
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
	}

	let showNewSlide = function(){
		$slides[currentSlideNumber].classList.add("active")
	}

	let next = function(){
		hideOldSlide()
		currentSlideNumber++;

		if (currentSlideNumber === $slides.length){
			currentSlideNumber = 0;
		}
		showNewSlide()
	}

	let prev = function(){
		hideOldSlide()
		currentSlideNumber--;

		if (currentSlideNumber < 0){
			currentSlideNumber = $slides.length -1;
		}
		
		showNewSlide()
	}

	let jump = function(slideNum){
		hideOldSlide()
		stop()
		currentSlideNumber = slideNum;
		showNewSlide()
	}

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



	let start = function(){
		stop()
		intervalID = setInterval(next, time)
	}

	let stop = function(){
		clearInterval(intervalID)
	}

	start()

	return {
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jump: jump,
	}

}

/* 

write jump function


*/