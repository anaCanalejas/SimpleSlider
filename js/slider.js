

$(document).ready(function(){
	$('#slider').cycle({ 
    fx:     'fade', 
    speed:  'slow', 
    timeout: 4000, 
    next:   '#next', 
    prev:   '#prev' 
	});
});