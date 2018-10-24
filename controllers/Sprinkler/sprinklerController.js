'use strict';

function SprinklerController(){
	console.log('controller create');
	this.sprinklers = [];
}

SprinklerController.prototype.init = function(sprinklersIn){
	console.log('sprinklers init');
	this.sprinklers = sprinklersIn;
	console.log(JSON.stringify(this, null, 4));
}

SprinklerController.prototype.get = function(req, res) {
	console.log('sprinklers get');
	
	var sprinklerId = req.params.sprinklerId;
	console.log("sprinklerId - " + sprinklerId);
	if (sprinklerId !== undefined){
		if (sprinklerId in this.sprinklers){
			res.json(this.sprinklers[sprinklerId]);
			return;
		}
		else{
			res.status(404, 'Sprinkler ' + sprinklerId + ' not found');
		}
	}

	res.json(this.sprinklers);
};

SprinklerController.prototype.create = function(req, res) {
	res.status(500).send('Not implemented')
};

SprinklerController.prototype.update = function(req, res) {
	console.log('sprinklers update');
	
	var sprinklerId = req.params.sprinklerId;
	console.log("sprinklerId - " + sprinklerId);

	var sprinklerValue = req.params.sprinklerValue;
	console.log("sprinklerValue - " + sprinklerValue);
	if (sprinklerId !== undefined){
		if (sprinklerId in this.sprinklers){
			this.sprinklers[sprinklerId].setValue(sprinklerValue);
			res.json(this.sprinklers[sprinklerId]);
			return;
		}
		else{
			res.status(404, 'Sprinkler ' + sprinklerId + ' not found');
		}
	}

	res.status(404, 'Sprinkler not found');
};

SprinklerController.prototype.remove = function(req, res) {
	res.status(500).send('Not implemented')
};

module.exports = new SprinklerController(); 