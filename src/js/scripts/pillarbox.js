module.exports = function () {

  var introText = $('#home-intro-text-main').html();

  var contentHide = function(type) {
    var target = '.pillarbox-' + type;
    $(target).fadeOut();
    $('body').removeClass('pillarActive');
  }

  var contentShow = function(type, pos) {
    // positionLogo();
    var target = '.pillarbox-' + type;
    // $('#home-intro-text-main').html(text);
    // $(target).addClass('pillarbox-active');
    // $('.intro-logo-active').show();
    $(target).fadeIn(100);
    $('body').addClass('pillarActive');
  }

  $(document).ready(function(){


    var introPos = $('#intro-links').offset();
    // var margin = parseInt($('#home-intro-text').css( "padding-top" ));
    var introTop = introPos.top;
    // var top = introTop - margin - margin;

    console.log(introTop)

    $('body').find('.intro-hover-text').css('margin-top', introTop + 'px')

    $( "#intro-home .pillar" ).hover(
        function(e){
          var type = $(this).data('type');
          var pos = $(this).position();
          $(e.target).addClass('pillar-active');
          contentShow(type, pos);
        },
        function(e){
          var type = $(this).data('type');
          contentHide(type);
          $(e.target).removeClass('pillar-active');
        }
    );

    $( "#page-pillars .pillar, #menu-pillars .pillar" ).hover(
        function(e){
          $(e.target).addClass('pillar-active');
        },
        function(e){
          $(e.target).removeClass('pillar-active');
        }
    );

  });

}
