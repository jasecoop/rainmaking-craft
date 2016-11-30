module.exports = function () {

  $(document).ready( function () {
    if ($('body').hasClass('blogpost')) {
      var $aside      = $('#stickyAside');
      var asideOffset = $aside.offset();
      var asideTop    = asideOffset.top - 69;
      var asideRight  = asideOffset.right;

      var contentOffset = $('#content').offset();
      var contentOffset = asideOffset.top;
      var contentBottom = contentOffset + $('#content').height() - $aside.height() - 100;
      console.log('contentBottom', contentBottom)
      if ($(window).width() > 800){
        var stickyWidth = $('#stickyAside').width();
        $(window).on("scroll", function() {
          var fromTop = $("body").scrollTop();
          $('#stickyAside').toggleClass("stickyAside-fixed", (fromTop > asideTop)).css('right', asideRight);
          $('#stickyAside').css('width', stickyWidth + 'px');

          if (fromTop > contentBottom) {
            if ($('#outro').length) {
              var top = $('#outro').height() + $('.footer').height();
            } else {
              var top = $('.footer').height();
            }
            $('#stickyAside').removeClass('stickyAside-fixed');
            $('#stickyAside').addClass('stickyAside-bottom');
            $('#stickyAside').css('bottom',  '0px');
          }

          if (fromTop < contentBottom && fromTop > asideTop) {
            if ($('#outro').length) {
              var top = $('#outro').height() + $('.footer').height();
            } else {
              var top = $('.footer').height();
            }
            $('#stickyAside').addClass('stickyAside-fixed');
            $('#stickyAside').removeClass('stickyAside-bottom');
          }

        });
      }
    }
  });

}
