/*This program will separate the Even Numbers from an Array
 using filter method and then square of these numbers by using map method*/
function squaringEven(array:number[]) {
    const evenNumbers=array.filter(even => even%2==0)
    console.log(evenNumbers);
    const squareOfEvenNumbers=evenNumbers.map(square => square*square)
    return squareOfEvenNumbers;
}


const anyNumbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(squaringEven(anyNumbers));
