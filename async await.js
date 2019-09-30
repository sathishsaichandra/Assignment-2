//async await
console.log("Person enters the library to issue a book ")
const rush=async()=>{
//async function rush(){
 const queue = new Promise((resolve, reject) => {
     console.log("The boy is waiting to get his chance .");
    setTimeout(() => resolve('book'), 3000);
  });
 const validity =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('validity'), 5000);
  });
   const fine =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('fine'), 7000);
  });
    let book=await queue;
   console.log(` getting the ${book}`);   
   let val=await validity;
   console.log(`showing the ${val}`);
   let fi=await fine;
   console.log(`checking for ${fi}`);
   console.log("at last the book isued the book from the library.");
};
rush();