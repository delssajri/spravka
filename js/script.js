$(document).ready(function() {
	$("#call_tel").hide();
	$('#calltome').click(function(e) {
		e.preventDefault();
		$("#call_tel").fadeIn();
		$('#zakr_mod').click(function(e) {
			$("#call_tel").hide();
		});
	});
	
	jQuery(function(){ $(".call_tel_i").mask("+7 (999) 999-9999"); });
	
	jQuery(function(){ $("#header_tel").mask("+7 (999) 999-9999"); });
	
	$(".image").click(function(){
	
	  	var img = $(this);	
		
		var src = img.attr('src'); 
		
		$("body").append("<div class='popup'>"+"<div class='popup_bg'></div>"+"<img src="+src+" class='popup_img' />"+ "</div>"); 
		$(".popup").fadeIn(800); 
		$(".popup_img").click(function(){
		
			$(".popup").fadeOut(800);
			
			/*setTimeout(function() {
			  $(".popup").remove(); 
			}, 800);*/
		});
	});

})();