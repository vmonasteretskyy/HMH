$(document).ready(function() {
	// fixed menu
	let heightHeader = $(".header").outerHeight();
	console.log(heightHeader);

	$(window).scroll(function() {
		let currentPosition = $(window).scrollTop();
		if (currentPosition >= heightHeader) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});

	// menu dropdown
	$(".dropdown__toggle").click(function(e) {
		e.preventDefault();
		// $(".menu__dropdown").slideUp();
		$(this)
			.next(".menu__dropdown")
			.slideToggle();
	});

	$("body").click(function() {
		$(".menu__dropdown").slideUp();
	});

	$(".dropdown__toggle, .menu__dropdown").click(function(e) {
		e.stopPropagation();
	});

	// slider first screen
	$(function() {
		$(".slider-first")
			.on("init", function(event, slick) {
				$(this).append(
					'<div class="slick-counter"><span class="current"></span><span class="total"></span></div>'
				);
				let findBlock = $(this).find(".total");
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(slick.currentSlide + 1);
				findBlock.text(slick.slideCount);
			})
			.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				autoplay: true,
				dots: true,
				arrows: false,
				autoplaySpeed: 2000,
				focusOnSelect: false,
				speed: 1000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							dots: false
						}
					}
				]
			})
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(nextSlide + 1);
			});
	});

	// slider category
	$(function() {
		$(".slider-category")
			.on("init", function(event, slick) {
				$(this).append(
					'<div class="slick-counter"><span class="current"></span><span class="total"></span></div>'
				);
				let findBlock = $(this).find(".total");
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(slick.currentSlide + 1);
				findBlock.text(slick.slideCount);
			})
			.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				dots: true,
				arrows: true,
				autoplaySpeed: 2000,
				focusOnSelect: false,
				slide: ".slider-category__item",
				nextArrow: ".next-slider",
				prevArrow: ".prev-slider",
				speed: 1000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							dots: false
						}
					}
				]
			})
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(nextSlide + 1);
			});
	});

	// slider gallery
	$(function() {
		$(".slider-gallery")
			.on("init", function(event, slick) {
				$(this).append(
					'<div class="slick-counter"><span class="current"></span><span class="total"></span></div>'
				);
				let findBlock = $(this).find(".total");
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(slick.currentSlide + 1);
				findBlock.text(slick.slideCount);
			})
			.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				autoplaySpeed: 2000,
				slide: ".slider-gallery__item",
				nextArrow: ".slider-gallery-next",
				prevArrow: ".slider-gallery-prev",
				speed: 1000,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							dots: false
						}
					}
				]
			})
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(nextSlide + 1);
			});
	});
});
