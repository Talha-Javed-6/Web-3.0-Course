//This Program will find the Largest number from an array
function largestNumber(array:number[]){
    var largeNumber:number=0;
    for (var index = 0; index < array.length; ) {
        if (array[index]>largeNumber) {
            largeNumber=array[index];
        }
        else{
            index++;
        }
    }
    console.log("The Largest number among the Array is",largeNumber)
} 
var numbers:number[]=[1,34,56,76,89,56,34,778,59];
largestNumber(numbers);
