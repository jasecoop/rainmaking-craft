module.exports = function () {

  var $header   = $(".header-belowfold ");
  var winHeight = $(window).height();

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('.header').toggleClass("header-belowfold", (fromTop > winHeight - 500));
  });

}
