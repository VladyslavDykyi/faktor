$(document).ready(function () {
	$('.content-carts-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		arrows: true,
		prevArrow: '<div class="prevArrow"></div>',
		nextArrow: '<div class="nextArrow"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true,
					centerPaging: '0px',
					arrows: false,
				}
			}
		]
	});
	$('.product-for').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		infinite: false,
		asNavFor: '.product-nav',
	});
	const elem_nav = $('.product-nav-item').length
	if (elem_nav === 2) {
		$('.product-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			vertical: true,
			infinite: false,
			arrows: true,
			prevArrow: '<div class="prevArrow"></div>',
			nextArrow: '<div class="nextArrow"></div>',
			responsive: [
				{
					breakpoint: 530,
					settings: {
						vertical: false,
						arrows: false,
					}
				},
			]
		});
	} else if(elem_nav === 3) {
		$('.product-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			vertical: true,
			infinite: false,
			arrows: true,
			prevArrow: '<div class="prevArrow"></div>',
			nextArrow: '<div class="nextArrow"></div>',
			responsive: [
				{
					breakpoint: 530,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						vertical: false,
						arrows: false,
					}
				},
			]
		});
	} else if(elem_nav === 4) {
		$('.product-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			vertical: true,
			infinite: false,
			arrows: true,
			prevArrow: '<div class="prevArrow"></div>',
			nextArrow: '<div class="nextArrow"></div>',
			responsive: [
				{
					breakpoint: 530,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						vertical: false,
						arrows: false,
					}
				},
			]
		});
	} else {
		$('.product-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.product-for',
			focusOnSelect: true,
			vertical: true,
			infinite: false,
			arrows: true,
			prevArrow: '<div class="prevArrow"></div>',
			nextArrow: '<div class="nextArrow"></div>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 530,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						vertical: false,
						arrows: false,
					}
				},
			]
		});
	}
});

window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		function mask(event) {
			let keyCode;
			event.keyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 1) event.preventDefault();
			let matrix = "+380(__) ___ __ __",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i !== -1) {
				i < 1 && (i = 2);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type === "blur" && this.value.length < 5) this.value = "";
		}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
});
Fancybox.bind('[data-fancybox="gallery"]', {});