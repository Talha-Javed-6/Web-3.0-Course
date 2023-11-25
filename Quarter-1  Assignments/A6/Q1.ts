//This program will Remove Negative numbers from an Array using Filter Method
function removeNegativeNumber(array:number[]) {
    var filteredArray = array.filter((S) =>{
        if (S>=0) {
            return true
        }
    })
    return filteredArray;
}
var num:number[]=[1,-1,2,-2,3,-3,4,-4,5,-5,6,-6];
console.log(removeNegativeNumber(num));
