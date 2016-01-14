$('*').load(function() {
   // Animate loader off screen
   $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {


    var vid1 = document.getElementById("vid-mea");
    var vid2 = document.getElementById("vid-telkom");
    var vid3 = document.getElementById("vid-pjb");
    var vid4 = document.getElementById("vid-dav");
    var music = document.getElementById("music");

    function pauseVid() {
        vid1.pause();
        vid2.pause();
        vid3.pause();
        vid4.pause();
    }

    $("#vid-dav, #vid-telkom, #vid-pjb, #vid-mea").click(function(){

      if(music.paused) {
          music.play();
      } else {
        music.pause();
      }
    });

   $("#thumbnail-image").owlCarousel({

      margin: 10,
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
      },
      URLhashListener:true,
      startPosition: 'URLHash'
   });

   $('html').niceScroll();

   var thumb;
   thumb = 0;

   $('.thumbnail-view').click(function() {
      pauseVid();
      $('#owl-demo').toggle();
      $('#thumbnail-image').toggle();
      $('.first').toggle();
      $('.previous').toggle();
      $('.next').toggle();
      $('.last').toggle();
      $('.first-thumb').toggle();
      $('.previous-thumb').toggle();
      $('.next-thumb').toggle();
      $('.last-thumb').toggle();
      console.log(thumb);
   });

   var tc = $('#thumbnail-image');
   // Go to the next item
   $('.first-thumb').click(function() {
      tc.trigger('to.owl.carousel', [0, 200]);
   })

   $('.next-thumb').click(function() {
      tc.trigger('next.owl.carousel');
   })
   // Go to the previous item
   $('.previous-thumb').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      tc.trigger('prev.owl.carousel');
   })

   $('.last-thumb').click(function() {
      tc.trigger('to.owl.carousel', [19, 200]);
   })

   $('.jumpto-slide a').click(function() {
      var datapage;
      datapage = $(this).data('page');
      $('#owl-demo').toggle();
      $('#thumbnail-image').toggle();
      $('.first').toggle();
      $('.previous').toggle();
      $('.next').toggle();
      $('.last').toggle();
      $('.first-thumb').toggle();
      $('.previous-thumb').toggle();
      $('.next-thumb').toggle();
      $('.last-thumb').toggle();
      $('#owl-demo').trigger('to.owl.carousel', [datapage, 200]);
   });

   $('.interactive-media').click(function() {
      $('#owl-demo').toggle();
      $('.button-act').toggle();
      $('.thumbnail-view').toggle();
      $('.mea-play-pause').toggle();
      $('.interactive-media-frame').toggle();
   });

   $('.interactive-media-link').click(function() {
      $(this).toggle();
      $('.back-to-slider-link').toggle();
      $('.music-button').toggle();
   });

   $('.back-to-slider-link').click(function() {
      $(this).toggle();
      $('.interactive-media-link').toggle();
      $('.music-button').toggle();
      backingsound.play();
   });

   $("#owl-demo").on('changed.owl.carousel', function(event) {
     pauseVid();
     music.play();
   });

   $("#owl-demo").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      margin: 10,
      lazyLoad: true,
      animateOut: 'zoomOutLeft',
      animateIn: 'fadeInRight',
      smartSpeed:750,
      lazyFollow: true,
      URLhashListener:true,
      startPosition: 'URLHash'
   });
   var owl = $('.owl-carousel');
   // Go to the next item
   $('.btn-first').click(function() {
      owl.trigger('to.owl.carousel', [0, 200]);
      pauseVid();
   })

   function stopPlayedVideo() {

      if (!video.paused) {
         video.pause();
         this.textContent = ">";
      }
   }

   $('.btn-next').click(function() {
      owl.trigger('next.owl.carousel');
      pauseVid();
   })
   // Go to the previous item
   $('.btn-previous').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel');
      pauseVid();
   })

   $('.btn-last').click(function() {
      owl.trigger('to.owl.carousel', [20, 200]);
      pauseVid();
   })

   $("#owl-demo-mobile").owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items : 1,
      margin: 10,
      lazyLoad: true,
      URLhashListener:true,
      startPosition: 'URLHash'

   });
   var owlmobile = $('#owl-demo-mobile');
   // Go to the next item
   $('.arrow-next').click(function() {
      owlmobile.trigger('next.owl.carousel');
   })
   // Go to the previous item
   $('.arrow-previous').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owlmobile.trigger('prev.owl.carousel');
   });

   $('.arrow-first').click(function() {
      owlmobile.trigger('to.owl.carousel', [0, 200]);
   })
   // Go to the previous item
   $('.arrow-last').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owlmobile.trigger('to.owl.carousel', [37, 200]);
   });

});

$(window).resize(function(event) {

});

function scrollToSwitch() {
   var owl = $('#owl-demo');

   owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
         owl.trigger('next.owl');
      } else {
         owl.trigger('prev.owl');
      }
      e.preventDefault();
   });
}

function toggleFullScreen() {
   if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
         if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
         } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
         } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
         } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
         $('.fullscreen_trigger_a').html('fullscreen_exit');
      } else {
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
         } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
         }
         $('.fullscreen_trigger_a').html('fullscreen');
      }
   }

   $('.fullscreen_trigger_a').on('click', function() {
      toggleFullScreen();
   });

var vid1 = document.getElementById("vid-mea");
var vid2 = document.getElementById("vid-telkom");
var vid3 = document.getElementById("vid-pjb");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid1.pause();
    vid2.pause();
    vid3.pause();
}
