//async auto
var async = require('async');
async.auto({
    bookname:function(callback){
        callback(null,'richdad poor dad');
    },
    database:function(callback){
        console.log('connecting to db')
        var connected=true;
        if(connected){
          callback(null,connected)
        }
        else{
            callback(null,'error connecting to  db')
        }
    },
    checkindb:['bookname','database',function(callback){
        console.log('checking in db')
        var found=true;
        if(found){
            callback(null,found)
          }
          else{
              callback(null,'error  finding book in  db')
          }
      }],
}, function (err,results) {
    console.log('error = ',err);
    console.log('results = ',results);
});