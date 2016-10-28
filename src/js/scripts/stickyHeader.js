module.exports = function () {

  var $header   = $(".header-belowfold ");
  var winHeight = $(window).height();

  $(window).on("scroll", function() {
    if ($('.header').hasClass('header-belowfold')) {
      var fromTop = $("body").scrollTop();
      $('.header').toggleClass("header-belowfold-active", (fromTop > winHeight - 500));
    }
  });

}
