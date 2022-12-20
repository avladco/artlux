/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
	/* --------------------- a mele ------------------------ */
	// Script language toggle
		var lang = 'ro';
	$('.rusla').click(function(){
		$('.romtext').slideUp(600);
		$('.rustext').slideDown(600);
		$('.romla').removeClass('lang-active');
		$('.rusla').addClass('lang-active');
		return lang = 'ru';
	});
	$('.romla').click(function(){
		$('.rustext').slideUp(600);
		$('.romtext').slideDown(600);
		$('.rusla').removeClass('lang-active');
		$('.romla').addClass('lang-active');
		return lang = 'ro';	
	});
	$('#hideButt').click(	function(){$('.partoftext').toggle('slow');			$(this).toggleClass('btnup');		});
	
	// Script language toggle end
	
	if ($(window).width() < 769) {
	    $('.portfolio-box-caption').addClass('fa fa-5x wow bounceIn');
	};
	
	$('#load-frame').mouseup(function(e) {
		var container = $('#load-page');
		if (!container.is(e.target) 
        && container.has(e.target).length === 0)
    {       container.parent().fadeOut(600);
			$('#load-page').fadeOut(600);	
			$('#page-top').css('overflow','visible');	}
	});	
	
	$('#close1').click(function() {		
		$('#load-frame, #load-page').fadeOut(600);	
		$('#page-top').css('overflow','visible');	
	});
	
	$('.gallery-show, #open-calc').click(function() {
		$('#load-frame').fadeIn(600);	
		$('#page-top').css('overflow','hidden');
	});
	
	
	
	$('.slider-1').click(function() {		$('#load-page').load("pages/page1.html", function() {  $('#load-page').fadeIn(600)		});		});
	$('.slider-2').click(function() {		$('#load-page').load("pages/page2.html", function() {  $('#load-page').fadeIn(600)		});		});
	$('.slider-3').click(function() {		$('#load-page').load("pages/page3.html", function() {  $('#load-page').fadeIn(600)		});		});
	$('.slider-4').click(function() {		$('#load-page').load("pages/page4.html", function() {  $('#load-page').fadeIn(600)		});		});
	$('.slider-5').click(function() {		$('#load-page').load("pages/page5.html", function() {  $('#load-page').fadeIn(600)		});		});
	$('.slider-6').click(function() {		$('#load-page').load("pages/page6.html", function() {  $('#load-page').fadeIn(600)		});		});
	
	$('#open-calc').click(function() {	
		if(lang == 'ro'){	$('#load-page').load("Calculator/calculator.html", function() 	{   $('#load-page').fadeIn(600);			});		};
		if(lang == 'ru'){	$('#load-page').load("Calculator/calculatorus.html", function() {   $('#load-page').fadeIn(600);			});		};
	});
	
	
	$.fn.addImage = function(folder, count) { 
		for(var i = 1; i <= count; i++) 	{
		$('.gallery').append('<a href="pages/'+ folder +'/'+ i +'.jpg" class="fancybox" rel="group">  <img src="pages/'+ folder +'/small/'+ i +'.jpg" /></a>')
		};
	};
	
		

	$(".fancybox").fancybox({
		padding : 3 ,
		height : 700 , 
		margin : 0 ,
		nextEffect : 'fade' ,
		prevEffect : 'fade' ,
		nextSpeed : 400 ,
		prevSpeed : 400
	});

	  	
	
	/* --------------------- a mele end------------------------ */
	
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

	
})(jQuery); // End of use strict
