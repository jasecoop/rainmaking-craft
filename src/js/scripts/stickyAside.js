module.exports = function () {

  $(document).ready( function () {
    if ($('body').hasClass('blogpost')) {
      var $aside      = $('#stickyAside');
      var asideOffset = $aside.offset();
      var asideTop    = asideOffset.top;
      var asideRight  = asideOffset.right;

      if ($(window).width() > 800){
        var stickyWidth = $('#stickyAside').width();
        $(window).on("scroll", function() {
          var fromTop = $("body").scrollTop();
          $('#stickyAside').toggleClass("stickyAside-fixed", (fromTop > asideTop)).css('right', asideRight);
          $('#stickyAside').css('width', stickyWidth + 'px');
        });
      }
    }
  });

}
