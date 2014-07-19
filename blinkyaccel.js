var tessel = require('tessel');
var accel = require('accel-mma84').use(tessel.port['A']);

var led1 = tessel.led[0].output(0);
var led2 = tessel.led[1].output(0);

var timer;

accel.on('ready', function(){
  accel.on('data', function(xyz){
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    console.log('x:',x.toFixed(2),
      'y:', y.toFixed(2),
      'z:', z.toFixed(2));
    if(x > 0){
      led1.output(1);
    } else {
      led1.output(0);
    }
    if(y > 0){
      timer = setInterval(function(){
        led2.toggle();
      }, 500);
    } else {
      clearInterval(timer);
      led2.output(0);
    }
  });
});

accel.on('error',function(error){
  console.log('Error:', error);
});
