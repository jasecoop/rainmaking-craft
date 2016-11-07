var jquery          = require('./lib/jquery');

var craftAjax       = require('./scripts/craft-ajax');
var menu            = require('./scripts/menu');
var pillarbox       = require('./scripts/pillarbox');
var stickyHeader    = require('./scripts/stickyHeader');
var rain            = require('./scripts/rain');
var balancedGallery = require('./lib/balancedGallery');
var contactModal    = require('./scripts/contactModal');
var stickyAside     = require('./scripts/stickyAside');

jquery();

craftAjax();
menu();
pillarbox();
stickyHeader();
rain();
balancedGallery();
contactModal();
stickyAside();
