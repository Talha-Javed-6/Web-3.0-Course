/*This program will create a function which receive an array,an index,and a value
as an argument of function and inside function use splice method to modify the array*/

//Function Definition
function arrayModify<T>(array:T[],arrayIndex:number,valueDelete:number,valueNew:T) {

    array.splice(arrayIndex,valueDelete,valueNew);
    return array;
}
let originalArray:number[]=[1,2,3,4,5,6]
console.log(`The Original Array is [${originalArray}].`)
let modifyArray=arrayModify(originalArray,3,1,6);
console.log(`The Modified Array is [${modifyArray}].`)