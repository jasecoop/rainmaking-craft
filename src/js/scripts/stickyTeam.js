module.exports = function () {

  // var stickyAsideScroll = function (asideTop, contentTrigger, asideRight, contentBottom) {
  //   var stickyWidth = $('#stickyAside').width();
  //   $(window).on("scroll", function() {
  //     var fromTop = $("body").scrollTop();
  //
  //     if (fromTop > asideTop && fromTop < contentTrigger) {
  //       $('#stickyAside').addClass("stickyAside-fixed").css('right', asideRight);
  //       $('#stickyAside').css('width', stickyWidth + 'px');
  //     }
  //
  //     if (fromTop > contentTrigger) {
  //       // if ($('#outro').length) {
  //       //   var top = $('#outro').height() + $('.footer').height() + 1000;
  //       // } else {
  //       //   var top = $('.footer').height();
  //       // }
  //       $('#stickyAside').removeClass('stickyAside-fixed');
  //       $('#stickyAside').addClass('stickyAside-bottom');
  //       $('#stickyAside').css('bottom',  contentBottom + 'px');
  //     }
  //
  //     if (fromTop < contentTrigger && fromTop > asideTop) {
  //       $('#stickyAside').addClass('stickyAside-fixed');
  //       $('#stickyAside').removeClass('stickyAside-bottom');
  //     }
  //
  //     if (fromTop < asideTop) {
  //       $('#stickyAside').removeClass('stickyAside-fixed');
  //       $('#stickyAside').removeClass('stickyAside-bottom');
  //     }
  //
  //   });
  // }

  // $( document ).ajaxComplete(function( event, xhr, settings ) {
  //   $(document).ready( function () {
  //     if ($('.js-ajax-wrapper').hasClass('blogIndex')) {
  //       var $aside      = $('#stickyAside');
  //       var asideOffset = $aside.offset();
  //       var asideTop    = asideOffset.top - 69;
  //       var asideRight  = asideOffset.right;
  //       var asideHeight = $aside.height();
  //       var $content = $('#content');
  //       var contentOffset = $content.offset();
  //       var contentTop = contentOffset.top;
  //       var contentHeight = $content.height();
  //       var contentBottom = contentTop + contentHeight;
  //       var contentTrigger = contentBottom - asideHeight;
  //       if ($(window).width() > 800){
  //         stickyAsideMouseMove(asideTop, contentTrigger, asideRight, contentBottom);
  //       }
  //     }
  //   });
  // });

  $(document).ready( function () {
    var $aside      = $('#stickyAside');
    var asideOffset = $aside.offset();
    var asideTop    = asideOffset.top - $(window).scrollTop();
    var asideRight  = asideOffset.right;
    var asideHeight = $aside.height();

    // var $content = $('#content');
    // var contentOffset = $content.offset();
    // var contentTop = contentOffset.top;
    // var contentHeight = $content.height();
    // var contentBottom = contentTop + contentHeight;
    // var contentTrigger = contentBottom - asideHeight;

    var foundersOffset         = $('#founders').offset();
    var foundersTopPosition    = foundersOffset.top - ($(window).height()/2);
    var foundersBottomPosition = (foundersOffset.top + $('#founders').height()) - ($(window).height()/2);

    var leadershipOffset         = $('#leadership').offset();
    var leadershipTopPosition    = leadershipOffset.top - ($(window).height()/2);
    var leadershipBottomPosition = (leadershipOffset.top + $('#leadership').height()) - ($(window).height()/2);

    var teamOffset         = $('#team').offset();
    var teamTopPosition    = teamOffset.top - ($(window).height()/2);
    var teamBottomPosition = (teamOffset.top + $('#team').height()) - ($(window).height()/2)

    var jobsOffset         = $('#jobs').offset();
    var jobsTopPosition    = jobsOffset.top - ($(window).height()/2);
    var jobsBottomPosition = (jobsOffset.top + $('#jobs').height()) - ($(window).height()/2)

    if ($(window).width() > 800) {
      // stickyAsideScroll(asideTop, contentTrigger, asideRight, contentBottom);
      $(window).on("scroll", function() {

        var fromTop = $("body").scrollTop();

        if(fromTop > foundersTopPosition - ($(window).height()/2) ) {
          $('#stickyAside').addClass('fixed').css({
            top: $(window).height()/2
          });
        } else {
          $('#stickAside').removeClass('fixed').css({
            top: 0
          });
        }

        if(fromTop > foundersTopPosition && fromTop < foundersBottomPosition) {
          $('#foundersMenuLink').removeClass('o-20').addClass('o-100');
        } else {
          $('#foundersMenuLink').addClass('o-20').removeClass('o-100');
        }

        if(fromTop > leadershipTopPosition && fromTop < leadershipBottomPosition) {
          $('#leadershipMenuLink').removeClass('o-20').addClass('o-100');
        } else {
          $('#leadershipMenuLink').addClass('o-20').removeClass('o-100');
        }
        if(fromTop > teamTopPosition && fromTop < teamBottomPosition) {
          $('#teamMenuLink').removeClass('o-20').addClass('o-100');
        } else {
          $('#teamMenuLink').addClass('o-20').removeClass('o-100');
        }
        if(fromTop > jobsTopPosition && fromTop < jobsBottomPosition) {
          $('#jobsMenuLink').removeClass('o-20').addClass('o-100');
        } else {
          $('#jobsMenuLink').addClass('o-20').removeClass('o-100');
        }
      });
    }
  });

}
