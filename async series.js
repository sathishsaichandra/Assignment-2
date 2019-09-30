//async series
 var async = require('async');
async.series([
 function(callback) {
    setTimeout(function() {
      console.log('sathish')
      callback(null, 7);
    }, 3000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('sai');
      callback(null, 77);
    }, 2000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('chandra');
      callback(null, 777);
  }, 1000);
], function(error, results) {
  console.log(results);
});