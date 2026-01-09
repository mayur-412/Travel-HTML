

$(document).ready(function(){

	$('.search-bar a img:first-child').click(function(){
		$('.input-fild').fadeIn();
		$('.search-bar').addClass('active')
	})

	$('.search-bar a img:last-child').click(function(){
		$('.input-fild').fadeOut();
		$('.search-bar').removeClass('active')
	})
})


  document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );