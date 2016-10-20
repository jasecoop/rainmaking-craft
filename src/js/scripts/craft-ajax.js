module.exports = function () {

  $(function() {
    var changedPage = false,

    /* ----- Do this when a page loads ----- */
    init = function() {
    },

    /* ----- Do this for ajax page loads ----- */
    ajaxLoad = function(html) {
      init();

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
          $('body').addClass('miniPageOpen')
        }
      } else {
        var $main = $('.js-main');
        if ( $('body').hasClass('miniPageOpen') ) {
          $('body').removeClass('miniPageOpen');
        }
      }

      if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
        history.pushState({}, '', href);
        loadPage(href, $main);
        return false;
      }
    });
  });

}

// a click
// if minipage
    // $main = js-mini

//  if minipage isn't active
      // toggleClass on minipage
