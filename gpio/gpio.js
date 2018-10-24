// var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// var leds = [ 6, 13, 19, 26 ];
// for(var i in leds){
	// leds[i] = new Gpio(leds[i], 'out');
	// leds[i].writeSync(1);
// }

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');

// rl.prompt();
// rl.on('line', function(line) {
	// var led = parseInt(line);
	// if (led >= 0 && led < leds.length){
	  		
	  // if (leds[led].readSync() === 0) { //check the pin state, if the state is 0 (or off)
		// leds[led].writeSync(1); //set pin state to 1 (turn LED on)
	  // } else {
		// leds[led].writeSync(0); //set pin state to 0 (turn LED off)
	  // }
	// }
		
    // rl.prompt();
// }).on('close',function(){
    // for(var i in leds){
		// leds[i].unexport();
	// }
	// process.exit(0);
// });

