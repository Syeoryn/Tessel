var tessel = require('tessel');

var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(1);
var led3 = tessel.led[2].output(0);
var led4 = tessel.led[3].output(1);

setInterval(function() {
  console.log("Blink blink");

  led1.toggle();
  led2.toggle();
  led3.toggle();
  led4.toggle();
}, 100);


// tessel update
// tessel run blinky.js
// now, get the lights to blink in sync...
