
//async waterfall
async.waterfall([
  function(callback) {
    callback(null, 9, 27);
  },
  function(a, b, callback){ 
    console.log(a);
    console.log(b);
    console.log(a+b);
    callback(null, (a + b) /10);
  },
  function(c, callback) {
    console.log(c);
    callback(null, Math.round(c));
  }
], function(error, d) {
  console.log(d);
});