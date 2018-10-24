
var Sprinkler = require('./sprinkler').Sprinkler;

var sprinklers = { 
	'Lawn': new Sprinkler('Lawn', 19),
	'Bottom Garden': new Sprinkler('Bottom Garden', 6),
	'Top Garden': new Sprinkler('Top Garden', 13),
	'Kitchen Garden': new Sprinkler('Kitchen Garden', 26) };
	
exports.sprinklers = sprinklers; 