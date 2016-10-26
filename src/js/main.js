var jquery       = require('./lib/jquery');

var craftAjax    = require('./scripts/craft-ajax');
var menu         = require('./scripts/menu');
var pillarbox    = require('./scripts/pillarbox');
var stickyHeader = require('./scripts/stickyHeader');
var rain         = require('./scripts/rain');
var colorThief   = require('./lib/colourThief');
var balancedGallery = require('./lib/balancedGallery');

jquery();

craftAjax();
menu();
pillarbox();
stickyHeader();
rain();
colorThief();
balancedGallery();
colorThief();

var colorThief = new ColorThief();
var c = colorThief.getColor('https://davidwalsh.name/demo/flexbox-twelve/codepen7.png');
console.log(c);
