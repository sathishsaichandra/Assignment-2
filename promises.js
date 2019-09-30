//promises
let promiseToCleanTheRoom= new Promise(function(resolve,reject)
{
    let isclean=1;
    if(isclean)
    {
        resolve('clean');
    }
    else
    {
        reject('not clean')
    }
})
promiseToCleanTheRoom.then(function(abc){
console.log(`the room is ${abc}`)
}).catch(function(def)
{
    console.log(`the room is ${def}`)
}) 
//another program for promises this is when we have to finish something before starting another thing
let openbankaccount =function(){
    return new Promise(function(resolve,reject){
        resolve('bank account opened')
    })
}
let activatebankaccount =function(a){
    return new Promise(function(resolve,reject){
        resolve(a+' sucessfully activated bank account')
    })
}
let reward =function(a){
    return new Promise(function(resolve,reject){
        resolve(a+' got a pen as a reward')
    })
}
openbankaccount().then(function(a){
    return activatebankaccount(a)
}).then(function(a){
    return reward(a)
}).then(function(a){
 console.log(a)
})
 Promise.all([openbankaccount(), activatebankaccount(), reward()]).then(function(){
  console.log('all three are done')
})
 Promise.race([openbankaccount(), activatebankaccount(), reward()]).then(function(){
     console.log('one of them is finished')
 })