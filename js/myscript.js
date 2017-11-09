$(document).ready(function () { // keep this at top

// function to hide all divs
 function hideAll() {
   $("#album1").hide();
   $("#album2").hide();
   $("#album3").hide();
   $("#album4").hide();
 }

 // run that function right away
 hideAll();
 // when any animal is clicked, make the suitable div appear
 $(".cover").click(function() {
   // but first, hide all the divs to ensure that
   // only one will be open, ever
   hideAll();
   // here is a switch statement - this was in Codecademy
   // "Control Flow" lesson 7

   // we can get the ID of the thing that was clicked -
   switch ($(this).attr("id")) {
       case("audio").each(function() {
    this.pause();
    this.currentTime = 0;
       }):
     case "2":
       $("#albums").slideToggle();
       break;
     case "1":
       $("#albums").slideToggle();
       break;
     case "3":
       $("#albums").show();
       break;
     case "4":
       $("#albums").show();
       break;
   }
 }); // end of function for clicking'

}); // end of document ready.
