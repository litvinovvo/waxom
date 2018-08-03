import svg4everybody from 'svg4everybody';
import Swiper from 'swiper';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

console.log('hello world');

window.onload = function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.slider', {
      // Optional parameters
	  direction: 'horizontal',
	  
	//   wrapperClass: 'slider__slides',
	//   slideClass: 'slide',
	//   slideActiveClass: 'slide_active',
	  pagination: {
		el: '.slider__indicators',
		bulletClass: 'slider__indicator',
		clickable: true,
		bulletActiveClass: 'slider__indicator_active',
		renderBullet: function (index, className) {
			return `<button class="slider__indicator">
						<svg ><use xlink:href="assets/images/icon.svg#icon_circle-outline"></use></svg>
					</button>
			
			`;
		}
	  },
  
	  // Navigation arrows
	  navigation: {
		nextEl: '.slider__arrow-right',
		prevEl: '.slider__arrow-left',
	  },	  
      loop: true
    })
  };