


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['news']);
		pageWidget(['people']);
		pageWidget(['policy']);
		pageWidget(['shop']);
		pageWidget(['contacts']);
		pageWidget(['single-news']);
		pageWidget(['single-people']);
		pageWidget(['single-products']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	// contactsMap();
	// mapSingle();
	// allDefautAnim();
	// burgerMobile();
	
	if(windowWidth > mediaPoint1) {
		popupForms('17px');
	} else {
		popupForms('0px');
		burgerMobile();

		if($('.shop_filter_trigger')[0]) {
			visibleSidebar('.shop_filter_trigger', '.shop_sidebar_w', '.bg', 'Параметры поиска');
		}
		if($('.singleproducts_info_trigger')[0]) {
			visibleSidebar('.singleproducts_info_trigger', '.singleproducts_sidebar', '.bg', 'Открыть параметры');
		}
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === true) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);

const reviewsSlider = new Swiper('.reviews_slider', {
	loop: true,
	pagination: {
		el: '.reviews_slide_pag'
	},
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    }
	}
});

if($('#map')[0]) {
	ymaps.ready(init);

	function init () {
			var myMap = new ymaps.Map("map", {
							center: [55.76, 37.64],
							zoom: 10,
							controls: []
					}),
					myPlacemark1 = new ymaps.Placemark([55.8, 37.6], {
							iconContent: '4.45 млн',
						}, {
							preset: 'islands#redStretchyIcon'
					});
			myMap.behaviors.disable('scrollZoom'); 
			myMap.geoObjects
					.add(myPlacemark1)
	}
	
}


// $(document).ready(function() {
// 	const btns = document.querySelectorAll('.btn')

// 	btns.forEach(el => {
// 			el.addEventListener('click', function(e) {
// 					let
// 							size = Math.max(this.offsetWidth, this.offsetHeight),
// 							x = e.offsetX - size / 2,
// 							y = e.offsetY - size / 2,
// 							wave = this.querySelector('.wave')
	
// 					// Create an element if it doesn't exist
// 					if (!wave) {
// 							wave = document.createElement('span')
// 							wave.className = 'wave'
// 					}
// 					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
// 					this.appendChild(wave)
// 			})
// 	})
// })



// const btnSubmit = document.querySelectorAll('button[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', () => {
// 		succes('.succes')
// 	})
// })



function popupForms(pr) {

	let popupForms = document.querySelector('.popup_form')
	let popupFormsTrigger = document.querySelectorAll('.call_action')
	let popupFormsClose = document.querySelectorAll('.close_popup')
	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
	// const burgerPopup = document.querySelector('.burger')
	
	Array.from(popupFormsTrigger).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.add('active');
			win.style.overflow = "hidden";
			win.style.paddingRight = pr; 
			// burgerPopup.classList.remove('active')
		})
	})


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	popupFormsSubmit.addEventListener('click', () => {
		popupForms.classList.remove('active')
		win.style.overflow = "";
		win.style.paddingRight = ""; 
	})
}

// function burgerMobile() {
// 	const triggerBurger = document.querySelector('.burger_trigger')
// 	const burgerPopup = document.querySelector('.burger')
// 	const burgerFail = document.querySelectorAll('.burger_closer')
	
// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	triggerBurger.addEventListener('click', () => {
// 		burgerPopup.classList.add('active')
// 		win.style.overflow = "";
// 	})

// 	Array.from(burgerFail).map((item) => {
// 		item.addEventListener('click', () => {
// 			burgerPopup.classList.remove('active')
// 			win.style.overflow = "";
// 		})
// 	})

// }

// $(document).ready(function() {

// 	$(".forms_action input").on("blur input focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this.value) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
	
// 	$(".forms_action input").on("focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
// })

// function accordion(title, content) {
// 	// hide all content	
// 	let accordionTitle = $(title),
// 		accordionContent = $(content);
// 	$(accordionContent).not(":nth-child(1)")
	
// 	$(accordionTitle).on('click', function () {
// 		let $this = $(this);
// 		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
// 		$(accordionContent).slideUp();

// 		if (!$this.next().is(":visible")) {
// 			$this.next().slideDown();
// 		}
// 	});
// };

// accordion('.faq_item_head', '.faq_item_content');

const hotSlider = new Swiper('.hot_slider', {
  // Default parameters
	loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
		1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
	pagination: {
		el: '.hot_slider_pug',
		clickable: true,
	}
})

const teamSlider = new Swiper('.teams_slider', {
  // Default parameters
	loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
		1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
	navigation: {
		nextEl: '.teams_slide_next',
		prevEl: '.teams_slide_prev',
	}
})








if($('#officeMap')[0]) {

	async function contactsMap() {
		async function init() {
				var myMap = await new ymaps.Map('officeMap', {
								center: [50.443705, 30.530946],
								zoom: 14
						}, {
								searchControlProvider: 'yandex#search'
						}),
						menu = document.querySelector('.contacts_office_list') 
				for (var i = 0, l = city.length; i < l; i++) {
						createCity(city[i]);
				}
		
		
				function createCity (city) {
						var menuItem = $('<li><a href="#result"><div class="contacts_item_icon"><svg class="icon icon-location "><use xlink:href="i/sprite/sprite.svg#location"></use></svg></div><p>' + city['name'] + '</p></a></li>'),
							collection = new ymaps.GeoObjectCollection(null, { preset: city.style }),
						 placemark = new ymaps.Placemark(city.center, { balloonContent: city.name });
						 collection.add(placemark);
						myMap.geoObjects.add(collection);
						menuItem
								.appendTo(menu)
								.find('a')
								.bind('click', function () {
									if (!placemark.balloon.isOpen()) {
											placemark.balloon.open();
									} else {
											placemark.balloon.close();
									}
									// return false;
							});
				}
		
		
				myMap.setBounds(myMap.geoObjects.getBounds());
			}
			await ymaps.ready(init);
	
	}

	contactsMap();
}

// Группы объектов

let city = [

	{
		center: [45.020572, 38.974689],
		name: "пгт. Джубга, ул. Советская 72 а",
		style: "islands#redIcon",
	},
	{
		center: [45.040711, 38.966384],
		name: "пгт. Новомихайловский, ул. Ленина 9б",
		style: "islands#redIcon",
	},
	{
		center: [45.041747, 38.984149],
		name: "с. Небуг, ул. Центральная 6",
		style: "islands#redIcon",
	},
	{
		center: [45.036301, 38.981436],
		name: "г. Туапсе, ул. Шаумяна 1",
		style: "islands#redIcon",
	}
]


$(function () {

	if($('.singleproducts_gallery')) {

		var galleryThumbs = new Swiper(".singleproducts_thumb_slider", {
			// centeredSlides: true,
			// centeredSlidesBounds: true, 
			// direction: "vertical",
			spaceBetween: 11,
			slidesPerView: 4,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			scrollbar: {
				el: '.singleproducts_thumb_scrollbar',
				draggable: true,
			},
			breakpoints: {
				480: {
					direction: "horizontal",
					slidesPerView: 4
				},
				768: {
					direction: "horizontal",
					slidesPerView: 4
				},
				1200: {
					direction: "vertical",
					slidesPerView: 4
				}
			},
		});
		var galleryTop = new Swiper(".singleproducts_slider", {
			direction: "horizontal",
			spaceBetween: 10,
			a11y: {
				prevSlideMessage: "Предыдущий слайд",
				nextSlideMessage: "Следущий слайд",
			},
			keyboard: {
				enabled: true,
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	}
});


function searchRequest() {
	const inputSearch = document.querySelectorAll('input[type="search"]')
	
	const searchResult = document.querySelector('.filter_geo_result')
	Array.from(inputSearch).map((item) => {
		
		item.addEventListener('input', function() {
	
			if(item.value) {
				console.log(item.value.length)
				
				getSearch();
	
				searchResult.classList.add('active')
			} else {
				searchResult.classList.remove('active')
			}
			// console.log(this.value)
		})
	})


}

searchRequest();

function getSearch() {
	const setSearch = new Promise(function(resolve) {
		const data =  {
			city: 'Krasnodar',
		}
		resolve(data)
		
	})
	setSearch.then(data => {
		console.log('Data resolver city:', data.city)
	})
}

function checkSubmenu() {
	const checkItem = document.querySelectorAll('.header_nav_list>li')

	Array.from(checkItem).map((item) => {
		const submenu = item.querySelector('.submenu_list')
		if(submenu) {
			item.classList.add('header_navItem_parent')
		} else {
			item.classList.remove('header_navItem_parent')
		}
	})
}


checkSubmenu();

function readReviews() {
	const read = document.querySelectorAll('.reviews_slide')
	
	Array.from(read).map((item) => {
		const readTxt = item.querySelector('.reviews_slide_content')
		const reaBtn = item.querySelector('.reviews_readmore')

		// console.log(readTxt.textContent.length)
		if(readTxt.textContent.length < 200) {
			readTxt.classList.add('hidden')
			reaBtn.style.display="none";
			// console.log('Good')
		} else {
			readTxt.classList.remove('hidden')
			reaBtn.style.display="inline-flex";
		}

		if(reaBtn) {
			reaBtn.addEventListener('click', () => {
				console.log('Good')
				readTxt.classList.add('hidden')
				reaBtn.style.display="none";
			})
		}
		
	})
}

readReviews();


$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})


document.addEventListener('DOMContentLoaded', () => {
	const loader = document.querySelector('.loader');
	loader.classList.add('hidden')

})


function visibleSidebar(trigger, side, background, name) {
	const triggerBar = document.querySelector(trigger)
	const sidebar = document.querySelector(side)
	const bg = document.querySelector(background)
	triggerBar.addEventListener('click', function() {
		this.classList.toggle('active')
		sidebar.classList.toggle('active')
		bg.classList.toggle('active')
		if(this.classList.contains('active')) {
			this.innerHTML="Закрыть"
		} else {
			this.innerHTML=name
		}
	})


	bg.addEventListener('click', function() {
		triggerBar.classList.remove('active')
		sidebar.classList.remove('active')
		bg.classList.remove('active')
	})
}




function burgerMobile() {
	const triggerBurger = document.querySelector('.header_burger')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.remove_popup')
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		win.style.overflow = "";
	})

	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		win.style.overflow = "";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			win.style.overflow = "";
		})
	})

}




























