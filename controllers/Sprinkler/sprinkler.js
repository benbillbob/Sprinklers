
function Sprinkler(name, pinId){
	this.Gpio = require('onoff').Gpio;
	this.Name = name;
	this.PinId = pinId;
	this.Value = 0;
	
	this.pin = new this.Gpio(this.PinId, 'out');
	this.pin.writeSync(1);
}

Sprinkler.prototype.setValue = function(on){
	on = parseInt(on);
	console.log('Set Sprinkler - ' + this.PinId + ' ' + (on ? 'on' : 'off'));
	this.pin.writeSync(on ? 0 : 1);
}

module.exports.Sprinkler = Sprinkler;