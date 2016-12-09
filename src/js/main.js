var jquery          = require('./lib/jquery');
var retina          = require('./lib/retina');
var infinite        = require('./lib/infinitescroll');
var history         = require('./lib/history');
var velo        = require('./lib/velocity');
var veloUI         = require('./lib/velocity.ui');

var craftAjax       = require('./scripts/craft-ajax');
var menu            = require('./scripts/menu');
var pillarbox       = require('./scripts/pillarbox');
var stickyHeader    = require('./scripts/stickyHeader');
// var rain            = require('./scripts/rain');
var balancedGallery = require('./lib/balancedGallery');
var contactModal    = require('./scripts/contactModal');
var stickyAside     = require('./scripts/stickyAside');
var founder         = require('./scripts/founder');
var blogAnchor      = require('./scripts/blogAnchor');
var borderHover     = require('./scripts/borderHover');


jquery();
infinite();
retina();
history();
velo();
veloUI();

craftAjax();
menu();
pillarbox();
stickyHeader();
// rain();
balancedGallery();
contactModal();
stickyAside();
founder();
blogAnchor();
borderHover();
