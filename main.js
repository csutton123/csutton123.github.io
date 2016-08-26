$(document).ready(function(){


	// Automatic typing feature
	$(function(){
		$("#typed").typed({ 
			strings: [ 
						"Hi, I'm Chris and I'm a unicorn.", 
						"Hi, I'm Chris and I'm pretty good at building websites.",
						"Hi, I'm Chris and I'm a sales guru in training.",
						"Hi, I'm Chris and I'm a SaaS Salesperson + Front End Web Developer."
					],
			typeSpeed: 30,
			backDelay: 500,
		});
	});


	// Starts timer for makeshift logo transition on page load
	window.setTimeout('fadeTyped();', 15500);


	// Smooth scrolling 
	$('.navbar-nav a, .navbar-brand').on('click', function(event){
		$('.navbar-nav').find('.active').removeClass('active');
		$(this).addClass('active');
		if(this.hash !== ''){
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 500, function(){
				window.location.hash = hash;
			});
		}
	});


});


// Makeshift logo transition in
function fadeTyped(){
	$('#typescript').fadeOut('slow', function(){
		$('#title').css('display', 'table-cell');
		$('#title').fadeIn('slow', function(){
			$('#arrow-down').animate({top: '+=100px', opacity: '0'}, 2000, function(){
				$('#arrow-down').css('display', 'none');
			});
		});
	});
}