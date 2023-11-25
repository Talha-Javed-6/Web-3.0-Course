//This Program will check if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
//Variable to  get a Number
var anyNumber:number=14;
if(anyNumber%3==0 && anyNumber%5==0){
    console.log(`${anyNumber} is Divisible by both 3 and 5.`)
}
else if(anyNumber%3==0){
    console.log(`${anyNumber} is Divisible by 3.`)   
}
else if(anyNumber%5==0){
    console.log(`${anyNumber} is Divisible by 5.`)   
}
else{
    console.log(`${anyNumber} is not Divisible by 3 nor 5.`)
}
