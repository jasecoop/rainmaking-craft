module.exports = function () {

  $(document).ready(function() {

    var $header   = $(".header-belowfold ");
    var winHeight = $(window).height();

    var fromTop = $("body").scrollTop();
    if (fromTop > 200) {
      $('.header').addClass("header-belowfold");
    } else {
      $('.header').removeClass("header-belowfold");
    }

    $(window).on("scroll", function() {
      var fromTop = $("body").scrollTop();
      if (fromTop > 200) {
        $('.header').addClass("header-belowfold");
      } else {
        $('.header').removeClass("header-belowfold");
      }
    });

    $( document ).ajaxComplete(function( event, xhr, settings ) {
      if ( !$('js-ajax-wrapper').hasClass('hasBreadcrumb') ) {
        $('#breadcrumb').fadeOut();
      } else {
        $('#breadcrumb').fadeIn();
      }
    });

  });

}
