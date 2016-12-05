var jquery          = require('./lib/jquery');
var retina          = require('./lib/retina');
var history         = require('./lib/history');
var velocity         = require('./lib/velocity');
var velocityUI         = require('./lib/velocity.ui');

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
retina();
history();
velocity();
velocityUI();

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
