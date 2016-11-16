module.exports = function () {
// Make sure any offsite links (non js/mailtos) open in a new window
// from https://css-tricks.com/snippets/jquery/open-external-links-in-new-window/ - comment at end.
  $(document).on('mousedown', '.content a:not([href*="mailto:"],[href*="javascript"])', function(e) {
      var isInternalLink = new RegExp('/' + window.location.host + '/');
      if (!isInternalLink.test(this.href)) {
          $(this).attr('target', '_blank');
      }
  });
}
