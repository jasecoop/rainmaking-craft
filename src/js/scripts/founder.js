module.exports = function () {
  $(document).ready(function(){
    $('.founder').hover(
      function() {
        var $el = $( this ).find('.founder__about');
        $el.removeClass('fadeOutDown');
        $(this).addClass('founder-hover');
      }, function() {
        $(this).removeClass('.founder-hover');
        $( this ).find('.founder__about').addClass('fadeOutDown');
      }
    );
  });
}
