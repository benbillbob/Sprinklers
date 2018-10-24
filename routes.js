'use strict';
function Routes(){
	this.sprinklerController = require('./controllers/Sprinkler/sprinklerController');
	this.sprinklerFactory = require('./controllers/Sprinkler/sprinklerFactory');
}

Routes.prototype.init = function(app, express){
		this.sprinklerController.init(this.sprinklerFactory.sprinklers);

		app.route('/sprinklers').get(this.sprinklerController.get.bind(this.sprinklerController));

		app.route('/sprinklers/:sprinklerId/').get(this.sprinklerController.get.bind(this.sprinklerController));

		app.route('/sprinklers/:sprinklerId/:sprinklerValue').get(this.sprinklerController.update.bind(this.sprinklerController));

		app.use(express.static('public'));
	}
	
module.exports = new Routes();