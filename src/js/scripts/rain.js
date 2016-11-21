module.exports = function () {

  var colours = [
    '#69C7D3',
    '#71C4DB',
    '#86BFEF',
    '#85BDCF',
    '#83B309',
    '#B9A81B',
    '#F99B30',
    '#FC914B',
    '#FF856D'
  ]

  var counter = {};
  counter.count = 1;
  var Boom = function() {
    if (counter.count === 10) {
      counter.count = 1
      // return period;
    } else {
      counter.count++;
      // return period;
    }
  }

  setInterval(Boom, 2000)


  var blob = function(x, y, ran) {
    var colour = colours[ran];
    var style = {
      "top": y,
      "left": x,
    };
    // console.log(style);
    var html = '<div class="rain-content-mouse fadeOut"></div>';
    $(html).css(style).addClass('rain-content-mouse-' + counter.count).appendTo('.rain-content').delay(2000).fadeOut(1);
  }


  $(window).on('mousemove', function(e) {
    if ( $('.rain').hasClass('rain-mousemove') && $(window).width() > 800 ) {
        if (e.clientX % 2 == 0) {
        var x = e.clientX - 350;
        var y = e.clientY - 350;
        var ran = counter.count;
        blob(x, y, ran);
      }
    }
  });
  // alert('1')
}
