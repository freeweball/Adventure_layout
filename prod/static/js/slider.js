var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var ESC_KEYCODE = 27;
var CLASS_HIDDEN = 'visually-hidden';
var list = document.querySelector('.main-page__list');
var zoomButton = 'slider-control__button slider-control__button--increase';
var videoButton = 'slider-control__button slider-control__button--play';
var closeButton = 'popup__close';
var popupWrapper = document.querySelector('.popup__wrapper');
var popupVideo = document.querySelector('.popup__modal--video');
var popupZoom = document.querySelector('.popup__modal--zoom');

var delClass = function (nameElement) {
  nameElement.classList.remove(CLASS_HIDDEN);
};

var addClass = function (nameElement) {
  nameElement.classList.add(CLASS_HIDDEN);
};

document.addEventListener('click', function(evt) {
	if (evt.target.className == zoomButton) {
		delClass(popupWrapper);
		delClass(popupZoom);
	}

	if (evt.target.className == videoButton) {
		delClass(popupWrapper);
		delClass(popupVideo);
	}

	if (evt.target.className == closeButton) {
		addClass(popupWrapper);
    addClass(popupZoom);
    addClass(popupVideo)
	}
});


document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    addClass(popupWrapper);
    addClass(popupZoom);
    addClass(popupVideo)
  }
});

