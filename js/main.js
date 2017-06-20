$(document).ready(function(){
	
	// LOADER PAGE
	$("body").queryLoader2({
		barColor: "#fff",
		backgroundColor: "#f5503b",
		percentage: true,
		barHeight: 1,
		completeAnimation: "grow",
		minimumTime: 100
	});
	
	
	//NAV
	$('#nav').onePageNav({
		 filter: ':not(.external)'
	});
		
	//prettyPhoto 
	jQuery('a[data-gal]').each(function() {
		jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false, social_tools:false,deeplinking:false});

//=========================================================
//=================PARALLAX================================
//=========================================================
	
//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#header').parallax("50%", 0.5);
	$('#about-quote').parallax("50%", 0.3);
	$('#twiiter-section').parallax("50%", 0.3);
	$('#work-quote').parallax("50%", 0.3);
	$('#client').parallax("50%", 0.3);

//=========================================================
//=================SCROLL==================================
//=========================================================
	
	$("[id*='Btn']").stop(true).on('click',function(e){
		e.preventDefault();
		$(this).scrolld();
	});

//========================================================
//==================HEXAGON===============================
//========================================================
	$('.lab_item').hover(
		function(){
			$(this).find('.hexagon-content-background').stop().animate({bottom: 85}, 200, 'easeOutQuad');
			$(this).find('.hexagon-content').stop().animate({bottom: 140}, 500, 'easeOutQuad');
		}, 
		function(){
			$(this).find('.hexagon-content-background').stop().animate({bottom: -150}, 500, 'easeOutQuad');	
			$(this).find('.hexagon-content').stop().animate({bottom: -150}, 400, 'easeOutQuad');
		});
	
	// hexagon slider
	$('.tab-two').css('display', 'none');
	$('.lab_item .next').click(
		function(){
			$(this).parent().find('.tab-one').fadeOut('fast');
			$(this).parent().find('.tab-two').fadeIn('slow');
			$(this).parent().find('.previous').removeClass('active');
			$(this).addClass('active');
	});
	$('.lab_item .previous').click(
		function(){
			$(this).parent().find('.tab-two').fadeOut('fast');
			$(this).parent().find('.tab-one').fadeIn('slow');
			$(this).parent().find('.next').removeClass('active');
			$(this).addClass('active');
	});
	
	//skills
	setTimeout(function(){
			$('.progress .progress-bar').each(function() {
				var me = $(this);
				var perc = me.attr("data-percentage");
	
				//TODO: left and right text handling
	
				var current_perc = 0;
	
				var progress = setInterval(function() {
					if (current_perc>=perc) {
						clearInterval(progress);
					} else {
						current_perc +=1;
						me.css('width', (current_perc)+'%');
					}
					var meandclass = me.find(".skills-percentage");
					meandclass.text((current_perc)+'%');
	
				}, 50);
	
			});
	
		},200);

//========================================================
//==================BLOG==================================
//========================================================
	$('.blog-posts').hover(
		function(){
			$(this).find('.hover-background').stop().animate({bottom: 0}, 150, 'easeOutQuad');
			$(this).find('.content-blog').stop().animate({bottom: 0}, 400, 'easeOutQuad');
			$(this).find('.content-blog p').stop().animate({bottom: 0}, 400, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: 0}, 250, 'easeOutQuad');
		}, 
		function(){
			$(this).find('.hover-background').stop().animate({bottom: -350}, 250, 'easeOutQuad');
			$(this).find('.content-blog').stop().animate({bottom: -350}, 200, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: -350}, 200, 'easeOutQuad');
		});
		
//========================================================
//==================BLOG PAGE=============================
//========================================================
	//blog post
	var moveIt = function () {
		var halfObjectHeight = ($('.link-previous-article').height() / 2);
		var halfObjectWidth = ($('.link-previous-article').width() / 2);
		$('.link-previous-article').css({
			'margin-left': -halfObjectWidth + "px",
			'margin-top': -halfObjectHeight + "px"
		});
		var halfObjectHeight = ($('.link-next-article').height() / 2);
		var halfObjectWidth = ($('.link-next-article').width() / 2);
		$('.link-next-article').css({
			'margin-left': -halfObjectWidth + "px",
			'margin-top': -halfObjectHeight + "px"
		});
		//header slider
		var halfObjectHeight = ($('.bx-wrapper .bx-pager').height() / 2);
		var halfObjectWidth = ($('.bx-wrapper .bx-pager').width() / 2);
		$('.bx-wrapper .bx-pager').css({
			'margin-left': -halfObjectWidth + "px",
			'margin-top': -halfObjectHeight + "px"
		});
		}; 
	window.setInterval(function(){
		moveIt();
	}, 0);
	$(window).resize(moveIt);
	moveIt();
	
	$('ul.moreArticle li').hover(
		function(){
			$(this).find('.moreArticle-background').stop().fadeOut('slow');
		}, 
		function(){
			$(this).find('.moreArticle-background').stop().fadeIn('slow');
		}
	);
	
	$('ul.moreArticle li').click(function(){
		alert('work');
	});
	
//========================================================
//==================featured==============================
//========================================================
	$('.featured-item').hover(
		function(){
			$(this).find('.featured-item-content-background').stop().animate({bottom: 0}, 150, 'easeOutQuad');
			$(this).find('.featured-item-content').stop().animate({bottom: 0}, 400, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: 0}, 250, 'easeOutQuad');
		}, 
		function(){
			$(this).find('.featured-item-content-background').stop().animate({bottom: -350}, 500, 'easeOutQuad');
			$(this).find('.featured-item-content').stop().animate({bottom: -350}, 350, 'easeOutQuad');
			$(this).find('.look, .video').stop().animate({bottom: -350}, 100, 'easeOutQuad');
		});

//========================================================
//==================Contact===============================
//========================================================
	$('#contactForm #send').click(function(event){
		event.preventDefault();
		var name = $('#contactForm #name').val();
		var email = $('#contactForm #email').val();
		var atpos= email.indexOf("@");
		var dotpos= email.lastIndexOf(".");
		var subject = $('#contactForm #subject').val();
		var message = $('#contactForm #contactTextarea').val();
		
		//name condition
		if(name==null || name=='' || name.length<2){
			$('#contactForm #name').css('border', '1px solid #f53a23');
		}
		
		if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
			$('#contactForm #email').css('border', '1px solid #f53a23');
		}
		if(subject==null || subject=='' || subject.length<2){
			$('#contactForm #subject').css('border', '1px solid #f53a23');
		}
		if(message==null || message=='' || message.length<5){
			$('#contactForm #contactTextarea').css('border', '1px solid #f53a23');
		}
		
		var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
		$.ajax({
			type : 'POST',
			url : 'contact.php',
			data : dataString,
			success : function(result) {
				$('#message-here').slideDown('fast').css('display', 'inline-block').delay( 4000 ).slideUp('fast');;
				$('#message-here').html(result);
			}
		});
		return false;
	});
	
	// name keyup
	$('#contactForm #name').keyup(function(){
		var name = $('#contactForm #name').val();
		if(name==null || name=='' || name.length<2){
			$('#contactForm #name').css('border', '1px solid #e86369');
		}
		else {
			$('#contactForm #name').css('border', '1px solid #82b258');
		}
	});
	
	//email keyup
	$('#contactForm #email').keyup(function(){
		var email = $('#contactForm #email').val();
		var atpos= email.indexOf("@");
		var dotpos= email.lastIndexOf(".");
		if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
			$('#contactForm #email').css('border', '1px solid #e86369');
		}
		else {
			$('#contactForm #email').css('border', '1px solid #82b258');
		}
	});
	
	$('#contactForm #subject').keyup(function(){
		var name = $('#contactForm #subject').val();
		if(name==null || name=='' || name.length<2){
			$('#contactForm #subject').css('border', '1px solid #e86369');
		}
		else {
			$('#contactForm #subject').css('border', '1px solid #82b258');
		}
	});
	
	//message keyup
	$('#contactForm #contactTextarea').keyup(function(){
		var message = $('#contactForm #contactTextarea').val();
		if(message==null || message=='' || message.length<5){
			$('#contactForm #contactTextarea').css('border', '1px solid red');
		}
		else {
			$('#contactForm #contactTextarea').css('border', '1px solid green');
		}
	});
	
//========================================================
//==================CONTACT FORM==========================
//========================================================
	
	if(!Modernizr.input.placeholder){

		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});

	}
	
//========================================================
//==================LOCAL SCROLL==========================
//========================================================
//local scroll
$('.local-scroll').smoothScroll();




}); //end jquery(document).ready(function(){});


//========================================================
//==================WORK==================================
//========================================================
$(function () {
		var filterList = {
			init: function () {
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});
			},
			hoverEffect: function () {
				// Simple parallax effect
				$('#portfoliolist .portfolio').hover(
					function () {
						$(this).find('.content-text').stop().animate({bottom: 0}, 400, 'easeOutQuad');
						$(this).find('.content-background').stop().animate({bottom: 0}, 150, 'easeOutQuad');
						$(this).find('.look, .video').stop().animate({bottom: 0}, 250, 'easeOutQuad');
						$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.content-text, .content-background, .look, .video').stop().animate({bottom: -350}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);
				
				// Simple parallax effect
				$('#feautered-work .featured').hover(
					function () {
						$(this).find('.content-text').stop().animate({bottom: 0}, 400, 'easeOutQuad');
						$(this).find('.content-background').stop().animate({bottom: 0}, 150, 'easeOutQuad');
						$(this).find('.look, .video').stop().animate({bottom: 0}, 250, 'easeOutQuad');
						$(this).find('img').stop().animate({top: 0}, 500, 'easeOutQuad');				
					},
					function () {
						$(this).find('.content-text, .content-background, .look, .video').stop().animate({bottom: -350}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');								
					}		
				);				
			}
		};
		// Run the show!
		filterList.init();
	});