module.exports = function () {

  var blob = function(x, y, ran) {
    var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
    $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
  }

  $(window).on('mousemove', function(e) {
    if ( $('.rain').hasClass('rain-mousemove') ) {
        var x = e.clientX - 350;
        var y = e.clientY - 350;
        console.log(x, y)
        var ran = Math.floor((Math.random() * 3) + 1);
        blob(x, y, ran);
        // var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
        // $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
    }
  });

}
