module.exports = function () {

  var blob = function(x, y, ran) {
    var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
    $(html).appendTo('.rain-content').delay(2000).fadeOut(1);
  }

  var counter = {};
  counter.count = 1;
  var Boom = function() {
    if (counter.count === 6) {
      counter.count = 1
      // return period;
    } else {
      counter.count++;
      // return period;
    }
  }

  setInterval(Boom, 2000)




  $(window).on('mousemove', function(e) {
    if ( $('.rain').hasClass('rain-mousemove') && $(window).width() > 800 ) {
        // if (e.clientX % 2 == 0) {
        var x = e.clientX - 350;
        var y = e.clientY - 350;
        var ran = counter.count;
        blob(x, y, ran);
        // var html = '<div class="rain-content-mouse rain-content-mouse-'+ran+' fadeOut" style="top:'+y+'px; left:'+x+'px;"></div>';
        // $(html).appendTo('.rain-content').delay(3000).fadeOut(1);
        // }
    }
  });
  // alert('1')
}
