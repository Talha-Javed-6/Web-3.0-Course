/*This Program will takes an argument for a function and calculate the factorial of that number
using While loop*/
function factorialOfInteger(num:number):number {
    var factorial:number=1;
    while (num>0) {
        
        factorial=factorial*num;
        num--;  
       
    }
    return factorial
}
var num:number=6;
console.log(`The Factorial of ${num} is ${factorialOfInteger(num)}.`);