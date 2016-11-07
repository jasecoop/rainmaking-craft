module.exports = function () {

  $(document).ready( function () {
    if ($('body').hasClass('blogpost')) {
      var $aside      = $('#stickyAside');
      var asideOffset = $aside.offset();
      var asideTop    = asideOffset.top;
      var asideRight  = asideOffset.right;
      console.log($aside.width() - 32);

      if ($(window).width() <= 800){
        $(window).on("scroll", function() {
          var fromTop = $("body").scrollTop();
          $('#stickyAside').toggleClass("stickyAside-fixed", (fromTop > asideTop)).css('right', asideRight);
        });
      }
    }
  });

}
