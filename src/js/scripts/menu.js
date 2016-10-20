module.exports = function () {

  $( document ).ready( function() {

    $( 'body' ).on( 'click', '.menuToggle', function(e) {
      e.preventDefault();
      $('.menu').toggleClass('menu-active');
    });

  });
}
