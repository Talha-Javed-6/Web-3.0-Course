//This Program will categorize the user base on their age
//Variable to store user's Age
var age:number=14;
if(age>=0 && age<=12){
    console.log(`Your Age is ${age} Years.So you fall in the Category of Child.`);
}
else if(age>=13 && age<=19){
    console.log(`Your Age is ${age} Years.So you fall in the Category of Teenager.`);
}
else{
    console.log(`Your Age is ${age} Years.So you fall in the Category of Adults.`);
}