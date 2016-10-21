module.exports = function () {

  $(function() {
    var changedPage = false,

    /* ----- Do this when a page loads ----- */
    init = function() {
    },

    /* ----- Do this for ajax page loads ----- */
    ajaxLoad = function(html) {
      init();

      if ( $('body').hasClass('miniPageOpen') ) {
        if ( $('.menu').hasClass('menu-active') ) {
          $('.header-minipage').removeClass('dn');
        }
      }

      $( 'body' ).on( 'click', '.minipage-close', function(e) {
        e.preventDefault();
        history.back();
        $('body').removeClass('miniPageOpen');
      });

      /* ----- Here you could maybe add logic to set the HTML title to the new page title ----- */

      /* ----- Used for popState event (back/forward browser buttons) ----- */
      changedPage = true;
    },

    loadPage = function(href, $main) {
      $main.load(href, ajaxLoad);
    };

    /* ----- This runs on the first page load with no ajax ----- */
    init();

    $(window).on("popstate", function(e) {
      // -------------------------------------
      //   If there was an AJAX page transition already,
      //   then AJAX page load the requested page from the back or forwards button click.
      //   Variable initially set after the $main variable.
      // -------------------------------------
      if (changedPage) loadPage(location.href);
    });
    $(document).on('click', 'a', function() {

      var href = $(this).attr("href");
      var type = $(this).attr("role");
      if (type === "minipage") {
        var $main = $('.js-mini');
        if ( !$('body').hasClass('miniPageOpen') ) {
          $('body').addClass('miniPageOpen');
        }
      } else if (type === "back") {
        return;
      } else {
        var $main = $('.js-main');
        if ( $('body').hasClass('miniPageOpen') ) {
          $('body').removeClass('miniPageOpen');
        }
      }

      if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1 && type !== "back") {
        history.pushState({}, '', href);
        loadPage(href, $main);
        return false;
      }
    });
  });

}
