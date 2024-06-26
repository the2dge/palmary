$(document).ready(function(){

     // Initialize Isotope with a filter
    var $grid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        // Set the initial filter
        filter: '.Stamping'
    });

    // Filter items on button click
    $('.filter-tope-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // Optionally, add logic to handle active button state
        $('.filter-tope-group button').removeClass('active');
        $(this).addClass('active');
    });



    // Partner slider
        $('#partner-slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        }) // end of #partner-slider




    // Turn off Google Map zooming
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map').on('click', function () {
            $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
        });
        // you want to disable pointer events when the mouse leave the canvas area;
        $(".map_canvas").mouseleave(function () {
            $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        }); //end of Turn off Google Map zooming


    // Team box height
        var h = $('.team-img-detail').height();
        var mbottom = h;
        h = h/2;
        var top = $('.team-box').height();
        top = (top/2)-h;
        var win = $(window).width();

        if ( win >= 768 ){
            $(".team-img-detail").css("top", top);
        } else {
            $(".team-img-detail").css({
                "bottom": -mbottom+20,
                "left": "0",
                "width": "100%"
            });
            $(".team-box").css("margin-bottom", mbottom+30);
        }// end of Team box height


    // Pop up
        $('.test-popup-link').magnificPopup({
            type:'image',
            gallery:{
                enabled:true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        }); //end of Pop Up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("logoHeader").style.top = "0";
  } else {
    document.getElementById("logoHeader").style.top = "-96px";
  }
  
  prevScrollpos = currentScrollPos;
}


}); // end of $(document).ready(function()