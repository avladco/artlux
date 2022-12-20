$(document).ready(function() {

		
//---------------------------------------------------CALCULATOR-----------------------------------------------------------
		$('.myInput').click(function(){		this.select();	});
		
		$('.myInput').blur(function() {	 	calculator();	});		
		
			$('.myInput').change(function(){	
				var minVal = Number($(this).attr('min'));			
				var maxVal = Number($(this).attr('max'));
				if (this.value > maxVal )   this.value = maxVal;	
				if (this.value < minVal )   this.value = minVal;
			}); 
		
			$('#mont').change(function(){	calculator();	});
		
		function calculator() {
			var h = Number($('#nrh').val()),
				l = Number($('#nrl').val()),
				lm = Number($('#nrlm').val()),
				r = Number($('#nrr').val()),
				e = Number($('#nre').val());  // e - exemplare
				$('#nrlm').val(lm.toFixed(2));
				
			if ($('#mont').is(':checked')) {var montare = 1 } else { var montare = 0.5 };
				
			if ($('#id-cd').is(':selected'))		 {	 var total = (h + l) / 2 * lm * 0.8 * montare;	 }; 
			if ($('#id-cr').is(':selected'))		 {	 var total = (h + l) * lm * 1.6 * montare;	 	 }; 
			if ($('#id-md, #id-pd').is(':selected')) {	 var total = l * 0.6 * lm * montare;	     }; 
			if ($('#id-mr, #id-pr').is(':selected')) {	 var total = l * 1.2 * lm * montare;	 	 }; 
			if ($('#id-ro').is(':selected'))		 {	 var total = r * e	 * montare;	 		 };
			if ($('#id-pld').is(':selected'))		 {	 var total = l * h / 75 * e * montare;	 }; 
			if ($('#id-plr').is(':selected'))		 {	 var total = r * h / 30 * e * montare;	 }; 
			if ($('#id-clp').is(':selected'))		 {	 var total = l * h / 25 * e * montare;	 }; 
			if ($('#id-clr').is(':selected'))		 {	 var total = 2*r * h / 30 * e * montare;	 }; 
			//if ($('#mySelect :last').is(':selected')){ 	 return false };
			
			$('#nprice').text(total.toFixed(2));	
		};
		calculator();
		
		function totalcalcul() {	
			var suma = 0;
            $('.mprice').each(function(){
                suma += parseFloat($(this).html());     			
				});
			$('#totalprice').html('<p> Pret total: <u>'+ suma.toFixed(2) +'</u> € <br/><br/> <i>Art - Lux company ©</i> </p>' );
			$('#totalpriceru').html('<p> Итоговая цена: <u>'+ suma.toFixed(2) +'</u> € <br/><br/> <i>Art - Lux company ©</i> </p>' );

		};
											
											/*		SELECTOR		*/
		$('#mySelect').change(function(){	
			$('.div-date').show();
			if ($('#id-cd, #id-cr, #id-md, #id-mr, #id-pd, #id-pr').is(':selected')) {	
				$('.data1 #nrh').attr({value:6, min:3, max:15, step:0.1});
				$('.data2 #nrl').attr({value:4, min:3, max:15, step:0.1});
				$('.data3 #nrlm').attr({value:1, min:1, max:400, step:1});
				$('.data4, .data5').hide();	}; 
				
			if ($('#id-md, #id-mr, #id-pd, #id-pr').is(':selected')) {	
				$('.data1, .data5').hide();
				};
				
			if ($('#id-ro').is(':selected')) {
				$('.data4 #nrr').attr({value:20, min:10, max:30, step:0.5});
				$('.data5 #nre').attr({value:1, min:1, max:10, step:1});
				$('.data1, .data2, .data3').hide();	};
						
			if ($('#id-pld, #id-clp').is(':selected')) {
				$('.data1 #nrh').attr({value:200, min:50, max:250, step:1});
				$('.data2 #nrl').attr({value:15, min:10, max:50, step:0.5});
				$('.data5 #nre').attr({value:1, min:1, max:10, step:1});
				$('.data3, .data4').hide();	};
				
			if ($('#id-plr, #id-clr').is(':selected')) {
				$('.data1 #nrh').attr({value:200, min:50, max:250, step:1});
				$('.data4 #nrr').attr({value:7.5, min:5, max:20, step:0.5});
				$('.data5 #nre').attr({value:1, min:1, max:10, step:1});
				$('.data2, .data3').hide();	}	
				
				$('#div-img').fadeOut(800, function(){
					if ($('#id-cd').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/cd.png">').fadeIn(600)};
					if ($('#id-cr').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/cr.png">').fadeIn(600)};
					if ($('#id-md').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/md.1.png">').fadeIn(600)};
					if ($('#id-mr').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/mr.1.png">').fadeIn(600)};
					if ($('#id-pd').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/pd.1.png">').fadeIn(600)};
					if ($('#id-pr').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/pr.1.png">').fadeIn(600)};
					if ($('#id-ro').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/ro.png">').fadeIn(600)};
					if ($('#id-pld').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/pld.png">').fadeIn(600)};
					if ($('#id-plr').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/plr.png">').fadeIn(600)};
					if ($('#id-clp').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/clp.png">').fadeIn(600)};
					if ($('#id-clr').is(':selected')) {$('#div-img').html('[example] <img src="Calculator/clr.png">').fadeIn(600)};				
				});
					
			$('#alldates, #buttons').slideDown(800);
			
			calculator();
		});			
							/*		default select	*/

					$('.data1 #nrh').attr({value:6, min:3, max:15, step:0.1});
					$('.data2 #nrl').attr({value:4, min:3, max:15, step:0.1});
					$('.data3 #nrlm').attr({value:1, min:1, max:200, step:0.5});
					$('.data4, .data5').hide();
					$('#div-img').html('[example] <img src="Calculator/cd.png">').fadeIn(600)
					
							/*		SELECTOR	end		*/
				
//--------------------------------------------------------/CALCULATOR------------------------------------------------------		

		$('input[name="qwqw"]').change(function(){	style();	});	
			function style() {
			 if( $('input[name="qwqw"]:checked').val() === '1' ) { 	$('#cssadd').html('<link rel="stylesheet" type="text/css" href="Calculator/modern.css" />') }
			 else { 												$('#cssadd').html('<link rel="stylesheet" type="text/css" href="Calculator/classic.css" />') }		
			};
			
		$("#text-area textarea").focus(function(){
			if($("#text-area textarea").val() == ' informații suplimentare .. ' || $("#text-area textarea").val() == ' дополнительная информация .. ' ){ $(this).val('').css('color','#000') };
		});
								/*		Random color	*/
			function rand(min, max) {
				return parseInt(Math.random() * (max-min+1), 10) + min;					}
			function get_random_color() {
				var h = rand(25, 60); // color hue between 1 and 360
				var s = rand(60, 90); // saturation 30-100%
				var l = rand(80, 85); // lightness 30-70%
				return 'hsl(' + h + ',' + s + '%,' + l + '%)';				}
		
		var i = 1;
		$('#addElement').click(function(){		//  Add
			$('#korzina').append('<div class="added" id=element'+ i +'></div>');
			$('#element'+ i +'').css('background-color',get_random_color());
			$('#element'+ i +'').html('<a class="removel"> x </a>'	+ 
			'<div id="mtitle" ><b>' + $('#mySelect :selected').text() + '</b></div> <div>' +
				'<span id="m1" >' + $('.data1 #nrh').val() + 'cm x </span>' +
				'<span id="m2" >  ' + $('.data2 #nrl').val() + 'cm ; </span>' +
				'<span id="m3" >  ' + $('.data3 #nrlm').val() + 'm  </span>' +	
				'<span id="m4" >  ' + $('.data4 #nrr').val() + 'cm(r) ; </span>' +
				'<span id="m5" >  x' + $('.data5 #nre').val() + '  </span> <br/>' +
				'<span id="m6" > </span> <span id="m7" > </span>' +
				'</div> <div class="mprice" >' + $('.div-date #nprice').text() + ' € </div>'	).fadeTo( 600, 1 );
			$('#save-form, #clearAll, #screenshot').slideDown(800);
			
			if( $('.data1 #nrh').is(':hidden'))	 { 	$('#element'+ i +' #m1').remove();  };
			if( $('.data2 #nrl').is(':hidden'))	 { 	$('#element'+ i +' #m2').remove();  };
			if( $('.data3 #nrlm').is(':hidden')) { 	$('#element'+ i +' #m3').remove();  };
			if( $('.data4 #nrr').is(':hidden'))	 { 	$('#element'+ i +' #m4').remove();  };
			if( $('.data5 #nre').is(':hidden'))	 { 	$('#element'+ i +' #m5').remove();  };
			if( $('#body-calc').hasClass('rom')) { 	$('#element'+ i +' #m7').remove()   } else {$('#element'+ i +' #m6').remove() };
			if( $('#mont').is(':checked') ) { $('#element'+ i +' #m6').text('Confectionare si montare'); } else { $('#element'+ i +' #m6').text('Doar confectionarea'); };
			if( $('#mont').is(':checked') ) { $('#element'+ i +' #m7').text('Изготовление и монтаж'); } else { $('#element'+ i +' #m7').text('Только изготовление'); };
			i++; 
			//------------------------------
				
								
			//---------------------------
			
			$('.removel').click(function() {      // Delete	
				$($(this).parent()).fadeOut(200, function() {  
				$(this).remove();	
				totalcalcul();	
				if($('#korzina').is(':empty'))	{	$('#korzina > div, #clearAll, #screenshot').slideUp(800);  }	
				});					
			});
			
			totalcalcul();
		});
		
		
		
		$('#clearAll').click(function(){		   // Clear
			$('#korzina > div, #clearAll, #screenshot').fadeOut(800, function() {  $('#korzina').empty();	});		
			
		});
				
		$("#screenshot").click(function() {			// Save Screens		html2canvas
				
				html2canvas($( "#save-form" ), {
				onrendered: function(canvas) {
					var link = document.createElement('a');
					link.download = "Art-Lux-Price.png";
					//link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
					link.href = canvas.toDataURL();
					link.click();		
					//document.body.appendChild(canvas);
					/*var w = window.open();
					var h = '<p> salvati aceasta imagine daca nu s-a descarcat automat<p><hr/>';
					$(w.document.body).html(document.body.appendChild(canvas)).prepend(h);*/
					}					
				});
				
		});
	
	
	
	
	
//----------------------------------------------------------------Nice Select--------------------------------------------------------------------------	
	/*  jQuery Nice Select - v1.0
    http://hernansartorio.github.io/jquery-nice-select
    Made by Hernán Sartorio  */
 
	(function($) {

	$.fn.niceSelect = function() {

    // Create custom markup
    this.each(function() {
      var select = $(this);
      
      if (!select.next().hasClass('nice-select')) {
        select.after('<div class="nice-select ' + (select.attr('class') || '') + (select.attr('disabled') ? 'disabled' : '" tabindex="0') + 
          '"><span class="current"></span><ul class="list"></ul></div>');
        
        var dropdown = select.next();
        var options = select.find('option');
        var selected = select.find('option:selected');
        
        dropdown.find('.current').html(selected.data('display') || selected.text());
        
        options.each(function() {
          var display = $(this).data('display');
          dropdown.find('ul').append('<li class="option ' + ($(this).is(':selected') ? 'selected' : '') + 
            '" data-value="' + $(this).val() + (display ? '" data-display="' + display : '') + '">' + 
            $(this).text() + '</li>');
        });
      }
    });
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var dropdown = $(this);
      
      $('.nice-select').not(dropdown).removeClass('open');
      dropdown.toggleClass('open');
      
      if (dropdown.hasClass('open')) {
        dropdown.find('.option');  
        dropdown.find('.focus').removeClass('focus');
        dropdown.find('.selected').addClass('focus');
      } else {
        dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option', function(event) {
      var option = $(this);
      var dropdown = option.closest('.nice-select');
      
      dropdown.find('.selected').removeClass('selected');
      option.addClass('selected');
      
      var text = option.data('display') || option.text();
      dropdown.find('.current').text(text);
      
      dropdown.prev('select').val(option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var dropdown = $(this);
      var focused_option = $(dropdown.find('.focus') || dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if (dropdown.hasClass('open')) {
          focused_option.trigger('click');
        } else {
          dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!dropdown.hasClass('open')) {
          dropdown.trigger('click');
        } else {
          if (focused_option.next().length > 0) {
            dropdown.find('.focus').removeClass('focus');
            focused_option.next().addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!dropdown.hasClass('open')) {
          dropdown.trigger('click');
        } else {
          if (focused_option.prev().length > 0) {
            dropdown.find('.focus').removeClass('focus');
            focused_option.prev().addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if (dropdown.hasClass('open')) {
          dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if (dropdown.hasClass('open')) {
          return false;
        }
      }
    });

  };

}(jQuery));

//----------------------------------------------------------------Nice Select end--------------------------------------------------------------------------		

$('select').niceSelect();

	
}); // End 
