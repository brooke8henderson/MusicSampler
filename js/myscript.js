$(document).ready(function () { // keep this at top
 // when any animal is clicked, make the suitable div appear
 //added>img for image listners on the child image elements not the parent div. this is a standard way of achieving the results
//$("p") gives you all p elements, so$("audio") will give you all audio elements. but to make that work you need an id to call it
 $('.albumcovers>img').click(function() {
       $(".cover").slideToggle();

   // calls al images in the class for the function
	 // but first, hide all the divs to ensure that
	 // only one will be open, ever
	 hideAll();
	 // here is a switch statement - this was in Codecademy
	 // "Control Flow" lesson 7

	 //to pause all the audio files and resetting it .
	 // IMPORTANT because hide() won't stop the music from stop playing
	 nextSong()

	 // we can get the ID of the thing that was clicked -
	 switch ($(this).attr('id')) {

	 case '1':
	 $('#albums1').show();
	 break;
	 case '2':
	 $('#albums2').show();
	 break;
	 case '3':
	 $('#albums3').show();
	 break;
	 case '4':
	 $('#albums4').show();
	 break;

	 };

	 //the entire switch statement here instead. other one was wonky. Used the id to call the audio in the function
   // parent in the function accesses the DOM
	// $("audio#soundtrack"+$(this).attr('id')).parent().show()

	});
// end of function for clicking'

// function to hide all divs
function hideAll() {

	$('#albums1').hide();
	$('#albums2').hide();
	$('#albums3').hide();
	$('#albums4').hide();
	$(".cover").hide()
};

function nextSong(){
;
	$('audio').each(function(){
		this.pause(); // Stop playing
		this.currentTime = 0; // Reset time , comment it out if I don't want that song to start over again
	});

}
 // run that function right away
 hideAll();

}); // end of document ready.
