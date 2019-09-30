/generators
 function* myGen(){

    var one=yield 1;
    var two=yield 2;
    var three=yield 3;
    console.log(one,two,three)
}
var gen=myGen();
 console.log(gen.next());
 console.log(gen.next(1));
 console.log(gen.next(2));
 console.log(gen.next(3));