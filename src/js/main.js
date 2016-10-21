// Define Dependencies
var jquery = require('./lib/jquery');

var craftAjax = require('./scripts/craft-ajax');
var menu = require('./scripts/menu');
var pillarbox = require('./scripts/pillarbox');

jquery();

craftAjax();
menu();
pillarbox();
//
// // Print success message to console
// console.log('<head> scripts loaded.')
