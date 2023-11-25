/*This program will create a new array which contain the double of odd Numbers
 which were separated from an array
 using filter method and then square of these numbers by using map method*/
 function squaringOdd(array:number[]) {
    const oddNumbers=array.filter(odd => odd%2!=0)
    console.log(oddNumbers);
    const squareOfOddNumbers=oddNumbers.map(square => square*square)
    return squareOfOddNumbers;
}


const anyNumber:number[]=[3, 6, 9, 12, 15, 18]
console.log(squaringOdd(anyNumber));
