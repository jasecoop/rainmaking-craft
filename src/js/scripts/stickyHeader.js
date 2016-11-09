module.exports = function () {

  var $header   = $(".header-belowfold ");
  var winHeight = $(window).height();

  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    $('.header').addClass("header-belowfold", (fromTop > winHeight - 700));

  });

}
