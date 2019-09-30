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
            callback('error connecting to  db',null)
        }
    },
    checkindb:['bookname','database',function(results,callback){
        //console.log('results', results);
        var found =true;
        if(found){
            callback(null,found)
          }
          else{
              callback('error  finding book in  db',null)
          }
      }]
}, function (err,results) {
    console.log('error = ',err);
    console.log('results = ',results);
});
});
