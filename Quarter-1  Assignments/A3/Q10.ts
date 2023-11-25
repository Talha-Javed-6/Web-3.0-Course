//This Program will calculate the bill of Electricity according to the units consumed
//Variable to Store Units
var unitsConsumed:number=270;
var unitRate:number=28;
var electricityCost:number=unitsConsumed*unitRate;
if(unitsConsumed<=100){
    var tax5:number=(5*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(5%)=${tax5} Rs`);
    console.log(`Total Cost=${electricityCost+tax5} Rs`);
} 
else if(unitsConsumed>100 && unitsConsumed<=200){
    var tax10:number=(10*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(10%)=${tax10} Rs`);
    console.log(`Total Cost=${electricityCost+tax10} Rs`);
} 
else if(unitsConsumed>200 && unitsConsumed<=300){
    var tax15:number=(15*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(15%)=${tax15} Rs`);
    console.log(`Total Cost=${electricityCost+tax15} Rs`);
} 
else if(unitsConsumed>300 && unitsConsumed<=400){
    var tax20:number=(20*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(20%)=${tax20} Rs`);
    console.log(`Total Cost=${electricityCost+tax20} Rs`);
} 
else if(unitsConsumed>400 && unitsConsumed<=500){
    var tax25:number=(25*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(25%)=${tax25} Rs`);
    console.log(`Total Cost=${electricityCost+tax25} Rs`);
} 
else if(unitsConsumed>500){
    var tax30:number=(30*electricityCost)/100;
    console.log(`Units Consumed=${unitsConsumed} Units`);
    console.log(`Unit Rate=${unitRate} Per Unit`);
    console.log(`Electricity Cost=${electricityCost} Rs`);
    console.log(`Tax(30%)=${tax30} Rs`);
    console.log(`Total Cost=${electricityCost+tax30} Rs`);
} 