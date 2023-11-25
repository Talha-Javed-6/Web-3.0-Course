/*This Program will check given array and remove the negative
number from it*/
function removeNegativeNumbers1(array:number[]):number[] {
    var i:number=0;
while (i<array.length) {  
    
    if (array[i]<0) { 

        array.splice(i,1);
    
    }else{
        i++
    }
}
return array
}
var numbers:number[]=[1,-2,3,-4,6,14,-6,-9,-4,-34,-54];
console.log(removeNegativeNumbers1(numbers));


function removeNegativeNumbers(array:number[]):number[] {
    
for (var i:number=0;i<array.length;) {  
    
    if (array[i]<0) { 

        array.splice(i,1);
    
    }
    else{
        i++
    }
}
return array
}
var numbers:number[]=[1,-2,3,-4,6,14,-6,-9,-4,-34,-54];
console.log(removeNegativeNumbers(numbers));
