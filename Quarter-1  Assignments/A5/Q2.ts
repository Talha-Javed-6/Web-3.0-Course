//This program will print only the even numbers from an array using a loop
var numbers:number[]=[1,2,3,4,5,6];
for (var index = 0; index < numbers.length;) {
    if (numbers[index]%2!=0) {
        numbers.splice(index,1);
    }
    else{
        index++;
    }
    
}
console.log("Array of Even Numbers",numbers);
