module.exports = function () {

  var stickyAsideMouseMove = function (asideTop, contentTrigger, asideRight, contentBottom) {
    var stickyWidth = $('#stickyAside').width();
    $(window).on("scroll", function() {
      var fromTop = $("body").scrollTop();

      if (fromTop > asideTop && fromTop < contentTrigger) {
        $('#stickyAside').addClass("stickyAside-fixed").css('right', asideRight);
        $('#stickyAside').css('width', stickyWidth + 'px');
      }

      if (fromTop > contentTrigger) {
        // if ($('#outro').length) {
        //   var top = $('#outro').height() + $('.footer').height() + 1000;
        // } else {
        //   var top = $('.footer').height();
        // }
        $('#stickyAside').removeClass('stickyAside-fixed');
        $('#stickyAside').addClass('stickyAside-bottom');
        $('#stickyAside').css('bottom',  contentBottom + 'px');
      }

      if (fromTop < contentTrigger && fromTop > asideTop) {
        $('#stickyAside').addClass('stickyAside-fixed');
        $('#stickyAside').removeClass('stickyAside-bottom');
      }

      if (fromTop < asideTop) {
        $('#stickyAside').removeClass('stickyAside-fixed');
        $('#stickyAside').removeClass('stickyAside-bottom');
      }

    });
  }

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


    if ($('body').hasClass('blogpost')) {
      var $aside      = $('#stickyAside');
      var asideOffset = $aside.offset();
      var asideTop    = asideOffset.top - 69;
      var asideRight  = asideOffset.right;
      var asideHeight = $aside.height();

      var $content = $('#content');
      var contentOffset = $content.offset();
      var contentTop = contentOffset.top;
      var contentHeight = $content.height();
      var contentBottom = contentTop + contentHeight;
      var contentTrigger = contentBottom - asideHeight;

      if ($(window).width() > 800){
        stickyAsideMouseMove(asideTop, contentTrigger, asideRight, contentBottom);
      }
    }
  });

}
