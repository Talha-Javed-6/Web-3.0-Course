//This Program Will calculate the sum of first n Even numbers.
var howManyEvenNumbers:number=5;
var sumOfEvenNumbers:number=0;
for (let index = 0; index <=2*howManyEvenNumbers;index++) {
    if (index%2==0) {
        sumOfEvenNumbers=sumOfEvenNumbers+index;
    }
    
    
}
console.log(`Sum of First ${howManyEvenNumbers} Even Numbers is ${sumOfEvenNumbers}.`);
