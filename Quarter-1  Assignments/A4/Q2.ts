//Function to add Items
function addItems(array:string[],add:string):string[] {
    array.push(add);
    return array;
}
//Function to Remove Items
function removeItems(array:string[],index:number,del:number):string[] {
    array.splice(index,del);
    return array;
}
//Function to Update Quantities
function updateQuantities(array:number[],index:number,del:number,add:number):number[] {
    array.splice(index,del,add);
    return array;
}
//Function to Delete Quantities
function deleteQuantities(array:number[],index:number,del:number):number[] {
    array.splice(index,del);
    return array;
}
console.log("Shopping Cart(Before Any Update)");
var Items:string[]=["Oil","Ghee","Sugar","Rice","Butter","Milk"];
var Quantity:number[]=[6,3,20,25,3,60];
console.log("Items"," Quantity");
for (let index = 0; index < Items.length; index++) {
    console.log(Items[index],"    ",Quantity[index]);
    
}

console.log("Shopping Cart(After adding Item)");
var Items1:string[]=addItems(Items,"Shampoo");
var Quantity1:number[]=updateQuantities(Quantity,6,0,5);
console.log("Items"," Quantity");
for (let index = 0; index < Items.length; index++) {
    console.log(Items1[index],"    ",Quantity1[index]);
    
}

console.log("Shopping Cart(After Removing Item)");
var Items1:string[]=removeItems(Items1,4,1);
var Quantity1:number[]=deleteQuantities(Quantity1,4,1);
console.log("Items"," Quantity");
for (let index = 0; index < Items.length; index++) {
    console.log(Items1[index],"    ",Quantity1[index]);
    
}

console.log("Shopping Cart(After Updating Quantity)");
var Quantity1:number[]=updateQuantities(Quantity1,4,1,100);
console.log("Items"," Quantity");
for (let index = 0; index < Items.length; index++) {
    console.log(Items1[index],"    ",Quantity1[index]);
    
}
