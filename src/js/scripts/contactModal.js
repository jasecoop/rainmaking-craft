module.exports = function () {
  $(document).ready( function() {
    $( 'body' ).on( 'click', '.contactModal-btn', function(e) {
      e.preventDefault();
      $('body').addClass('modal-active');
      $('.contactModal').fadeIn();
    });

    $( 'body' ).on( 'click', '.contactClose', function(e) {
      e.preventDefault();
      $('body').removeClass('modal-active');
      $('.contactModal').fadeOut();
    });
  });
}
