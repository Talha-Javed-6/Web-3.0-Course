//This program will convert a temperature(Celsius) array into Fahrenheit using map method
function convertTemp(array:number[]) {
    var fahrenheitTemp=array.map((S) =>{
        return (S*9/5)+32;
    });
    return fahrenheitTemp;
};
//Array
var celsiusTemp:number[]=[0, 10, 20, 30, 40]; 
console.log(convertTemp(celsiusTemp));