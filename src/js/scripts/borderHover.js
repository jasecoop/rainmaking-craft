module.exports = function () {
  $(document).ready(function () {
    $(document).on('mouseenter', ".border-hover a" , function (e) {
      var $parent = $(this).closest('.border-hover');
      var $title = $parent.find('.title');
      var colour = $parent.data('colour');
      var colorClass = 'border-'+colour+'-hover';
      $parent.addClass(colorClass);
      $title.addClass('rm-' + colour);
    }).on('mouseleave', ".border-hover a", function (e) {
      var $parent = $(this).closest('.border-hover');
      var $title = $parent.find('.title');
      var colour = $parent.data('colour');
      var colorClass = 'border-'+colour+'-hover';
      $parent.removeClass(colorClass);
      $title.removeClass('rm-' + colour);
    });

  });
}
