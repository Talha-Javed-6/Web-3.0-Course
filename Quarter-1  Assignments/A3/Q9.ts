//This Program Will Display the Day Name According to its number
//Variable to store day number
var dayNumber:number=1;
if(dayNumber>=1 && dayNumber<=7){
    if(dayNumber==1){
        console.log("Its Monday")
    }
    else if(dayNumber==2){
        console.log("Its Tuesday")
    }
    else if(dayNumber==3){
        console.log("Its Wednesday")
    }
    else if(dayNumber==4){
        console.log("Its Thursday")
    }
    else if(dayNumber==5){
        console.log("Its Friday")
    }
    else if(dayNumber==6){
        console.log("Its Saturday")
    }
    else if(dayNumber==7){
        console.log("Its Sunday")
    }
}
else{
    console.log("There's no day with that Number.")
}