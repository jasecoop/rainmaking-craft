module.exports = function () {
  $(document).ready(function () {
    $('.border-hover a').hover(
        function(e){
          var $parent = $(this).closest('.border-hover');
          var colour = $parent.data('colour');
          var colorClass = 'border-'+colour+'-hover';
          $parent.addClass(colorClass);
        },
        function(e){
          var $parent = $(this).closest('.border-hover');
          var colour = $parent.data('colour');
          var colorClass = 'border-'+colour+'-hover';
          $parent.removeClass(colorClass);
        }
    );
  });
}
