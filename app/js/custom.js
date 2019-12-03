$(document).ready(function() {
	// fixed menu
	let heightHeader = $(".header").outerHeight();

	$(window).scroll(function() {
		let currentPosition = $(window).scrollTop();
		if (currentPosition >= heightHeader) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});

	// menu dropdown
	function openSubMenuOnHover() {
		$(".menu__item").hover(
			function() {
				$(this)
					.find(".dropdown")
					.stop(true, true)
					.delay(200)
					.fadeIn();
			},
			function() {
				$(this)
					.find(".dropdown")
					.stop(true, true)
					.delay(200)
					.fadeOut();
			}
		);
	}

	function openSubMenuOnClick() {
		$(".dropdown__toggle").click(function() {
			$(this)
				.parent()
				.next(".dropdown")
				.slideToggle();
			$(this)
				.closest("li")
				.siblings("li")
				.find(".dropdown")
				.slideUp();
		});
	}

	if ($(window).width() >= 1200) {
		openSubMenuOnHover();
	} else {
		openSubMenuOnClick();
	}

	$("body").click(function() {
		$(".dropdown").slideUp();
	});

	$(".dropdown__toggle, .menu__dropdown").click(function(e) {
		e.stopPropagation();
	});

	// open menu on mobile screen
	$(".menu__btn").on("click", function() {
		$(this).toggleClass("active");
		$(".menu").toggleClass("open");
		$(".dropdown").slideUp();
		$("body").toggleClass("overflow-hidden");
	});

	// scroll to section
	let scrollLink = $(".scroll-down");
	scrollLink.click(function(e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(".company").offset().top
			},
			1000
		);
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
				speed: 1000
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
						breakpoint: 768,
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
						settings: { adaptiveHeight: true }
					},
					{
						breakpoint: 576,
						settings: { adaptiveHeight: true, arrows: false }
					}
				]
			})
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(nextSlide + 1);
			});
	});

	// slider slider three image
	$(function() {
		$(".slider-three-pics")
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
				// autoplay: true,
				dots: true,
				arrows: false,
				autoplaySpeed: 2000,
				focusOnSelect: false,
				speed: 1000
			})
			.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
				let findCurrentBlock = $(this).find(".current");
				findCurrentBlock.text(nextSlide + 1);
			});
	});

	// slider
	$(".slider-examples-goods").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		arrows: true,
		autoplaySpeed: 2000
	});

	// animation on page
	new WOW().init();
});
