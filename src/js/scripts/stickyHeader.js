module.exports = function () {

  $(document).ready(function() {

    var $header   = $(".header-belowfold ");
    var winHeight = $(window).height();

    $(window).on("scroll", function() {
      var fromTop = $("body").scrollTop();
      if (fromTop > winHeight) {
        $('.header').addClass("header-belowfold");
      } else {
        $('.header').removeClass("header-belowfold");
      }
    });

  });

}
