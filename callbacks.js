//call back
var fs=require('fs');
 console.log('program started');
 fs.readFile('data.txt',function(err,data)
 {
      if(err)
      {
         console.error(error);
      }
     console.log(data.toString())
});
console.log('program ended')

//another program for call back
function doassignment(subject, callback) {
console.log(`Starting my ${subject} assignment.`);
 callback();
}
function assignmentdone(){
console.log('Finished my assignment');
}
doHomework('back end', assignmentdone);