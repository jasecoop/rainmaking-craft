module.exports = function () {

  $(function() {
    var $main = $('.js-main'),
        changedPage = false,

    /* ----- Do this when a page loads ----- */
    init = function() {
      /* ----- This is where I would run any page specific functions ----- */
    },

    addMarginTopToIntro = function() {
      if($('#intro-links').length) {
        var introPos = $('#intro-links').offset();
        var introTop = introPos.top - 16;
        $('body').find('.intro-hover-text').css('margin-top', introTop + 'px');
        $('#introText').fadeIn();
      }
    },

    /* ----- Do this for ajax page loads ----- */
    ajaxLoad = function(html) {
      init();

      /* ----- Init FB share button ----- */
      console.log("FB Object initiated");


      var stickyAsideMouseMove = function (asideTop, contentTrigger, asideRight, contentBottom) {
        var stickyWidth = $('#stickyAside').width();
        $(window).on("scroll", function() {
          var fromTop = $("body").scrollTop();

          if (fromTop > asideTop && fromTop < contentTrigger) {
            $('#stickyAside').addClass("stickyAside-fixed").css('right', asideRight);
            $('#stickyAside').css('width', stickyWidth + 'px');
          }

          if (fromTop > contentTrigger) {
            // if ($('#outro').length) {
            //   var top = $('#outro').height() + $('.footer').height() + 1000;
            // } else {
            //   var top = $('.footer').height();
            // }
            $('#stickyAside').removeClass('stickyAside-fixed');
            $('#stickyAside').addClass('stickyAside-bottom');
            $('#stickyAside').css('bottom',  contentBottom + 'px');
          }

          if (fromTop < contentTrigger && fromTop > asideTop) {
            $('#stickyAside').addClass('stickyAside-fixed');
            $('#stickyAside').removeClass('stickyAside-bottom');
          }

          if (fromTop < asideTop) {
            $('#stickyAside').removeClass('stickyAside-fixed');
            $('#stickyAside').removeClass('stickyAside-bottom');
          }

        });
      }

          if ($('.js-ajax-wrapper').hasClass('blogPost')) {
            var $aside      = $('#stickyAside');
            var asideOffset = $aside.offset();
            var asideTop    = asideOffset.top - 69;
            var asideRight  = asideOffset.right;
            var asideHeight = $aside.height();
            var $content = $('#content');
            var contentOffset = $content.offset();
            var contentTop = contentOffset.top;
            var contentHeight = $content.height();
            var contentBottom = contentTop + contentHeight;
            var contentTrigger = contentBottom - asideHeight;
            if ($(window).width() > 800){
              stickyAsideMouseMove(asideTop, contentTrigger, asideRight, contentBottom);
            }
          }


      FB.XFBML.parse(); // now we can safely call parse method

      // init Linkedin share button
      var din ='<script id="holderLink" type="IN/Share" data-url="'+window.location.href+'" data-counter="right"></script>';
      $(".linkedinDetail").html(din);
      IN.parse();

      /* ----- Used for popState event (back/forward browser buttons) ----- */
      changedPage = true;


    },

    loadPage = function(href) {

      $main.wrapInner('<div class="new-results-div" />');

      /* ----- Set height of $main to ensure the footer doesn't jump up -----  */
      var newResultsHeight = $('.new-results-div').outerHeight();
      $main.height(newResultsHeight);

      $('.js-ajax-wrapper').velocity('transition.fadeOut', {
        /* ----- Upon completion of animating out content put user at top of page. ----- */
        complete: function(){
          $('html').velocity("scroll", {
            duration: 0,
            easing: "ease",
            mobileHA: false
          });

          $('#loading').removeClass('dn');
          $('body').addClass('overflow-hidden');
        }
      });

      $.ajax({
        type: 'POST',
        url: href,
        data: {},
        success: function(result){
          $('#loading').addClass('dn');
          $('body').removeClass('overflow-hidden');
          console.log('success')
          /* ----- Where the new content is added ----- */
          $main.html(result);

          /* ----- Wrap content in div so we can get it's height ----- */
          $main.wrapInner('<div class="new-results-div" />');

          /* ----- Get height of new container inside results container and set $main to it so there's no content jumpage -----  */
          var newResultsHeight = $('.new-results-div').outerHeight();
          $main.height(newResultsHeight);

          /* ----- Bring In New Content ----- */
          $('.js-main .js-ajax-wrapper').velocity('transition.fadeIn', {
            visibility: 'visible',
            complete: function() {
              /* ----- Removes the temp height from $main ----- */
              $main.css('height', '');

              if ($('body').hasClass('has-intro-text')) {
                  addMarginTopToIntro();
              }
              ajaxLoad();
            }
          });
        },
        error: function(){
          console.log("error.");
          location.reload();
        }
      });

    };

    /* ----- This runs on the first page load with no ajax ----- */
    init();

    $(window).on("popstate", function(e) {
      // -------------------------------------
      //   If there was an AJAX page transition already,
      //   then AJAX page load the requested page from the back or forwards button click.
      //   Variable initially set after the $main variable.
      // -------------------------------------
      if (changedPage) loadPage(location.href);
    });

    // $(window).on('statechange', function() {
    //   window.location.reload();
    // });

    // $(document).on('click', 'a:not(.trigger)', function() {
    //
    //   var href = $(this).attr("href");
    //   if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
    //     history.pushState({}, '', href);
    //     loadPage(href);
    //     return false;
    //   }
    // });
  });


}
