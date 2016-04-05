//js file
$(document).ready(function() {
	// toggle button on and off
	$("#res-toggle").click(function() {
		bg = $(this).css('background-color');
		console.log(bg)
		// if it's off turn it on and visa versa
		if ( bg == "rgb(255, 0, 0)")	{
			$(this).css('background-color', 'green');
			$('#on_off_text').text("ON");
			$('.btn_switch').animate({
				width: "75px"
			}, 100, function(){
				console.log("moved");
			})
		} else {
			$(this).css('background-color', 'red');	
			$('#on_off_text').text("OFF");
			$('.btn_switch').animate({
				width: "50px"
			}, 100, function(){
				console.log("moved");
			})
		}
		
	}) 

})

