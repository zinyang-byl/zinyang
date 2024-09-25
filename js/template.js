(function ($) {
	'use strict';
	$(function () {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			autoplay: true,
			autoplayTimeout: 2000,
			dots: false,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				1000: {
					items: 3
				},
				2000: {
					items: 4
				}
			}
		})
		var wWidth = $(window).width();
		var menuWidth = $(".navbar-collapse").width();
		$(".navbar-toggler").click(function () {
			$('.collapsing').toggleClass('show');
			$('body').addClass("sidebar-overlay");
		});
		$("#mobile-menu-overlay, .close-menu, .nav-link").click(function () {
			$('.collapse').toggleClass('show');
			$('body').removeClass("sidebar-overlay");
		});

		$("a.nav-link").on('click', function (event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					window.location.hash = hash;
				});
			}
		});
		$(document).ready(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() > $(window).height()) {
					$(".navbar").css({ "background": "#0077d8" });
				}
				else {
					$(".navbar").css({ "background": " transparent" });

				}

			})
		})

		AOS.init({
			offset: 0,
			duration: 800,
			easing: 'ease-in-quad',
			delay: 100,
		});

		$("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		$('.flipster-custom-nav-link').click(function () {
			var navlinkSelected = parseInt(this.title);
			$('.flipster-custom-nav-link').removeClass("active");
			$(this).addClass("active");
			$("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

		$('#toggle-switch').click(function () {
			if ($('#toggle-switch').is(':checked')) {
				$('.monthly').addClass("text-active");
				$('.yearly').removeClass("text-active");
				$("#toggle-switch").attr("checked", "checked");
			} else {
				$('.monthly').removeClass("text-active");
				$('.yearly').addClass("text-active");
				$("#toggle-switch").removeAttr("checked");
			}
		});

		// counter Satisfied clients
		var maxScVal = 97;
		var isc = parseInt($('.scVal').text());
		var tim;
		function run() {
			tim = setInterval(function () {
				if (isc >= maxScVal) {
					clearInterval(tim);
					return;
				}
				$('.scVal').text(++isc);
			}, 100);
		}
		run();
		//Counters

		// counter finished Projects
		var maxfPVal = 20;
		var ifP = parseInt($('.fpVal').text());
		var timfP;
		function runfP() {
			timfP = setInterval(function () {

				if (ifP >= maxfPVal) {
					clearInterval(timfP);
					return;
				}
				$('.fpVal').text(++ifP);

			}, 400);
		}
		runfP();
		//finished Projects

		//counter Team Members
		var maxtMVal = 125;
		var itm = parseInt($('.tMVal').text());
		var timtM;
		function runtM() {
			timtM = setInterval(function () {
				if (itm >= maxtMVal) {
					clearInterval(timtM);
					return;
				}
				$('.tMVal').text(++itm);
			}, 100);
		}
		runtM();


		//Team Members

		//counter blog post
		var maxbPVal = 2135;
		var ibP = parseInt($('.bPVal').text());
		var timbP;
		function runbP() {
			timbP = setInterval(function () {
				if (ibP >= maxbPVal) {
					clearInterval(timbP);
					return;
				}
				$('.bPVal').text(++ibP);

			}, 1);
		}
		runbP();


		//blog post

		$(window).resize(function () {
			var scrWidth = $(window).width();
			if (scrWidth > 991) {
				$('#subban').attr('src', 'images/group1.png');
			}
			if (scrWidth < 991) {
				$('#subban').attr('src', '');
			}
		});

		//=============================


		//=============================

	});
})(jQuery);


//==============sweper============
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	resizeObserver: true,
	parallax: true,
	effect: 'slide',
	autoplay: {
		delay: 3000,
	},
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	//   dynamicBullets: true,
	// },

	// Navigation arrows
	// navigation: {
	//   nextEl: '.swiper-button-next',
	//   prevEl: '.swiper-button-prev',
	// },

	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
});

//================================
$('img[data-enlargable]').addClass('img-enlargable').click(function () {
	var src = $(this).attr('src');
	$('<div>').css({
		background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
		backgroundSize: 'contain',
		width: '100%', height: '100%',
		position: 'fixed',
		zIndex: '10000',
		top: '0', left: '0',
		cursor: 'zoom-out'
	}).click(function () {
		$(this).remove();
	}).appendTo('body');
});


// =========================SWIPER PRODUCTS============================

var swiperr = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 1,
	loop: true,
});
//=========================END SWIPER PRODUCT==============================

//  =========================CARD FLOW DIRECTION=============================
$(window).resize(function () {
	var scrWidth = $(window).width();
	if (scrWidth > 1000) {
		$(".flex-container").css({ "display": "flex" });
	}
	if (scrWidth < 1000) {
		$(".flex-container").css({ "display": "block" });
	}
});
//  =========================END FLOW DIRECTION=============================

