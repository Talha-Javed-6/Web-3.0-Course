//This Program will convert a list of temperatures from Celsius to Fahrenheit through array using while loop
var celsiusTemp:number[]=[23,27,33,40,37,41];
var fahrenheitTemp:number[]=[];
var index:number=0;
console.log("\u00B0C","    ","\u00B0F (F = (C * 9/5) + 32)");
while (index<celsiusTemp.length) {
    fahrenheitTemp[index]=(celsiusTemp[index]*9/5)+32;
    console.log(celsiusTemp[index],"    ",fahrenheitTemp[index]);
    index ++;
}
