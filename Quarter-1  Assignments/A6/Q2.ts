//This Program will use map method to multiply each number by 2 in an array.
function multiplyArrayBy2(array:number[]) {
    var resultArray=array.map((A) => {
        return A*2;
    });
    return resultArray;
} 
var anyArray:number[]=[2,3,4,5,6,7,8];
console.log(multiplyArrayBy2(anyArray));