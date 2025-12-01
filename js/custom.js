// Show the first tab and hide the rest
$('.tab ul li:first-child').addClass('active');
$('.table-box').hide();
$('.table-box:first').show();

// Click function
$('.tab ul li').click(function(){
  $('.tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.table-box').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$('.counter-section .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        768:{
            items:3
        }
    }
})





 document.addEventListener(
           "DOMContentLoaded", () => {
               new Mmenu( "nav#menu", {
                  "offCanvas": {
                     "position": "right-front"
                  },
                  "theme": "light"
               });
           }
            );


 $(function() {
  $('.accordian-title').click(function(j) {
    
    var dropDown = $(this).closest('.accordian-box').find('.accordian-content');
    $(this).closest('.accordian-section').find('.accordian-content').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordian-section').find('.accordian-title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});