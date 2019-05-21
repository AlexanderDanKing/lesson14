$(document).ready(function () {
    $('.modal').css('top', '-500px');
   
    $('[href="#tour"], [href="#sheldure"], .main_btn').on('click', function () {
     $('.modal').animate({
      display: "block",
      top: "0px"
     }, 500).show();
     $('.overlay').fadeToggle(500);
    });
   
    $('.close').on('click', function () {
     $('.modal').animate({
      display: "none",
      top: "-500px"
     }, 500).hide(500);
     $('.overlay').fadeToggle(500);
    });
});