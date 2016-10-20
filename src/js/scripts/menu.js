module.exports = function () {

  $( document ).ready( function() {

    $( 'body' ).on( 'click', '.menuToggle', function(e) {
      e.preventDefault();
      $('.menu').toggleClass('menu-active');
    });

    $( 'body' ).on( 'click', '.menuToggle-close', function(e) {
      e.preventDefault();
      $('.menu').removeClass('menu-active');
    });

    $( '.menu' ).on( 'click', 'a', function(e) {
      e.preventDefault();
      $('.menu').removeClass('menu-active');
    });

  });
}
