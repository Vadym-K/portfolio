$(document).ready(function() {
	$("a.ancLinks").click(function() {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
});

$(function() {
	$('.circle_first').circleProgress({
		value: 0.85
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(90 * progress) + '<i>%</i>');
	});
	$('.second.circle').circleProgress({
		value: 0.60
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
	});
	$('.circle_third').circleProgress({
		value: 0.75
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(75 * progress) + '<i>%</i>');
	});
	$('.circle_fourth').circleProgress({
		value: 0.92
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(92 * progress) + '<i>%</i>');
	});
	$('.circle_five').circleProgress({
		value: 0.70
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(65 * progress) + '<i>%</i>');
	});
	$('.circle_six').circleProgress({
		value: 0.94
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(94 * progress) + '<i>%</i>');
	});
	$('.circle_seven').circleProgress({
		value: 0.80
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(72 * progress) + '<i>%</i>');
	});
	$('.circle_eight').circleProgress({
		value: 0.99
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(79 * progress) + '<i>%</i>');
	});
});

function circleInit() {
	$('.circle').circleProgress({
		size: 142,
		fill: "#ffe600",
		startAngle: -Math.PI / 6 * 9,
		emptyFill: "#fff"
	});
	$('.circle_first').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
	});
	$('.second.circle').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(60 * progress) + '<i>%</i>');
	});
	$('.circle_third').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(75 * progress) + '<i>%</i>');
	});
	$('.circle_fourth').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(92 * progress) + '<i>%</i>');
	});
	$('.circle_five').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(70 * progress) + '<i>%</i>');
	});
	$('.circle_six').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(94 * progress) + '<i>%</i>');
	});
	$('.circle_seven').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(80 * progress) + '<i>%</i>');
	});
	$('.circle_eight').circleProgress({}).on('circle-animation-progress', function(event, progress) {
		$(this).find('span').html(Math.round(99 * progress) + '<i>%</i>');
	});
	marker = false;
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
	var scrolled = $(this).scrollTop();
	if (scrolled >= 60) {
		$('#header').addClass('fix_header');
	}
	if (scrolled <= 60) {
		$('#header').removeClass('fix_header');
	}
});

$(document).ready(function($) {
	var sections = $("section");
	var navigation_links = $("#nav a");

	sections.waypoint({

		handler: function(event, direction) {

			var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav a[href="#' + active_section.attr("id") + '"]');

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '17%'

	});
});

var marker = true;

$(window).on('scroll', function() {
	if (isScrolledIntoView('.circle')) {
		if (marker) {
			circleInit();
		}
	}
})

let openBtn = document.querySelector('.btn-menu');
let removeBtnMenu = document.querySelectorAll('.remove');
let wrapper = document.querySelector('.wrapper');
openBtn.addEventListener('click', btnMenu);

function btnMenu() {
	wrapper.classList.toggle('open-btn');
};

function removeBtn() {
	wrapper.classList.remove('open-btn');
}


for (let i = 0; i < removeBtnMenu.length; i++) {
	removeBtnMenu[i].addEventListener("click", removeBtn);
};

let openBtnPopup = document.querySelector('#btn-popup');
let closeBtnPopup = document.querySelector('.close-btn-popup');

openBtnPopup.addEventListener('click', togglePopup);
closeBtnPopup.addEventListener('click', togglePopup);

function togglePopup() {
	wrapper.classList.toggle('active');
}

$(document).ready(function() {

	$("#form, #form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "../php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$("#form, #form2").trigger("reset");
		});
		return false;
	});
});


$('.js-close-thank-you').click(function() {
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function(e) {
	var popup = $('.popup2');
	if (e.target != popup[0] && popup.has(e.target).length === 0) {
		$('.js-overlay-thank-you').fadeOut();
	}
});

let closePopap = document.querySelector('.close-popup');
closePopap.addEventListener('click', closePopap2);

function closePopap2() {
	wrapper.classList.remove('active');
}