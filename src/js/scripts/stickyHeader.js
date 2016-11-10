module.exports = function () {

  $(document).ready(function() {

    var $header   = $(".header-belowfold ");
    var winHeight = $(window).height();

    $(window).on("scroll", function() {
      var fromTop = $("body").scrollTop();
      console.log(winHeight)
      console.log(fromTop)
      if (fromTop > winHeight) {
        $('.header').addClass("header-belowfold");
        console.log('if')
      } else {
        $('.header').removeClass("header-belowfold");
        console.log('else')
      }
    });

  });

}
