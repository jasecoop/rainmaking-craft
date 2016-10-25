var jquery       = require('./lib/jquery');

var craftAjax    = require('./scripts/craft-ajax');
var menu         = require('./scripts/menu');
var pillarbox    = require('./scripts/pillarbox');
var stickyHeader = require('./scripts/stickyHeader');
var rain         = require('./scripts/rain');
var grade        = require('./lib/grad');
var balancedGallery = require('./lib/balancedGallery');

jquery();

craftAjax();
menu();
pillarbox();
stickyHeader();
rain();
grade();
balancedGallery();
