// Show the first tab and hide the rest
$('.tab ul li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tab ul li').click(function(){
  $('.tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
     $('body').addClass("top-pd");
  }
  else{
    $('header').removeClass("sticky");
      $('body').removeClass("top-pd");
  }
});



    document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "black"
                    });
                }
            );

$('.flat-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
})