/*This Program will calculate the sum of the numbers in an array 
using a while loop inside the function*/
function sumOfNumber(array:number[]) {
    var Result:number=0;
    var i:number=0;
    while (i<=array.length-1) {
        Result=Result+array[i];
        i++;
    }
    console.log(`The Sum of the elements of the array are: ${Result}.`)
}
let numberArray:number[]=[1,-2,3,4,5];
sumOfNumber(numberArray);