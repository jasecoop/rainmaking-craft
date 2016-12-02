module.exports = function () {
  $(document).ready(function () {
    $('.border-hover a').hover(
        function(e){
          var $parent = $(this).closest('.border-hover');
          var $title = $parent.find('.title');
          var colour = $parent.data('colour');
          var colorClass = 'border-'+colour+'-hover';
          $parent.addClass(colorClass);
          $title.addClass('rm-' + colour);
        },
        function(e){
          var $parent = $(this).closest('.border-hover');
          var $title = $parent.find('.title');
          var colour = $parent.data('colour');
          var colorClass = 'border-'+colour+'-hover';
          $parent.removeClass(colorClass);
          $title.removeClass('rm-' + colour);
        }
    );
  });
}
