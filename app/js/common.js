$(document).ready(function() {

	//Mobile menu
	$(".burger").click(function() {
		$(this).children("span").toggleClass("active");
		$(".main-header .main-header__contacts").slideToggle("normal");
		$(".main-header .causes").toggleClass("z-padding");
		$(".thank-header .thank-header__contacts").slideToggle("normal");
		$(".buy-header .buy-header__contacts").slideToggle("normal");
	}); 

	// Paralax
	$(".scroll").on("click", function (event) {
		event.preventDefault();
		var even = event || window.event;
		var ev = event.target || event.srcElement;
		var id = ev.parentElement.getAttribute('href');
		if(!id) {id = ev.getAttribute('href');};
		var topParalax = $(id).offset().top;
		$('body,html').animate({scrollTop: topParalax}, 1500);
	});

	// Carusel
	function carousel() {
		var owl = $(".carusel-team");
		owl.owlCarousel({
			items : 4,
			loop : true,
			autoHeight : false,
			dots : true,
			singleItem : false,
			pagination: false,
			navigation : true,
			autoPlay : 2000,
			dots: false,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			]
		});
	};

	carousel();

	// Tabs
	$(".tabs-content__item").not(":first").hide();

	$(".tabs-top__item").click(function() {
		$(".tabs-top__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-bottom__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-content__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs-bottom__item").click(function() {
		$(".tabs-bottom__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-top__item").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs-content__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});