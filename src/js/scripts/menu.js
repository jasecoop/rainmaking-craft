module.exports = function () {

  $( document ).ready( function() {

    $( 'body' ).on( 'click', '.menuToggle', function(e) {
      e.preventDefault();
      $('.menu').addClass('menu-active').fadeIn('slow');
    });

    $( 'body' ).on( 'click', '.menuToggle-close', function(e) {
      e.preventDefault();
      $('.menu').removeClass('menu-active').fadeOut('slow');
    });

    // $( '.menu' ).on( 'click', 'a', function(e) {
    //   e.preventDefault();
    //   if ( $(this).attr('role') !== 'minipage' ) {
    //     $('.menu').removeClass('menu-active');
    //   }
    // });

    // $( 'body' ).on( 'click', '.fade-menu', function(e) {
    //   e.preventDefault();
    //   $('.menu').removeClass('menu-active').fadeOut('slow');
    // });

  });
}
