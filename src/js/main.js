

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

	let next = function(){
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		currentSlideNumber++;

		if (currentSlideNumber === $slides.length){
			currentSlideNumber = 0;
		}
		
		$slides[currentSlideNumber].classList.add("active")
	}

	let prev = function(){
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');

		currentSlideNumber--;

		if (currentSlideNumber < 0){
			currentSlideNumber = $slides.length -1;
		}
		
		$slides[currentSlideNumber].classList.add("active")
	}

	let jumpOne = function(){
		stop()
		imageOne.classList.add("active")
		imageTwo.classList.remove("active")
		imageThree.classList.remove("active")
		imageFour.classList.remove("active")
	}

	let jumpTwo = function(){
		stop()
		imageOne.classList.remove("active")
		imageTwo.classList.add("active")
		imageThree.classList.remove("active")
		imageFour.classList.remove("active")
	}

	let jumpThree = function(){
		stop()
		imageOne.classList.remove("active")
		imageTwo.classList.remove("active")
		imageThree.classList.add("active")
		imageFour.classList.remove("active")
	}

	let jumpFour = function(){
		stop()
		imageOne.classList.remove("active")
		imageTwo.classList.remove("active")
		imageThree.classList.remove("active")
		imageFour.classList.add("active")
	}



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
		jumpOne: jumpOne,
		jumpTwo: jumpTwo,
		jumpThree: jumpThree,
		jumpFour: jumpFour,
	}

}

/* 

write jump function


*/