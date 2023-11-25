//This Program Will calculate the discount on an item based on its price
//Variable to store Price of the Product
var actualPrice:number=80;
if(actualPrice>=100){
    var discount1:number=(10*actualPrice)/100;
    var discountPrice1:number=actualPrice-discount1;
    console.log("Actual Price=",actualPrice,"$");
    console.log("Discount(10%)=",discount1,"$");
    console.log("Discount Price(10%)=",discountPrice1,"$")
}
else{
    var discount2:number=(5*actualPrice)/100;
    var discountPrice2:number=actualPrice-discount2;
    console.log("Actual Price=",actualPrice,"$");
    console.log("Discount(5%)=",discount2,"$");
    console.log("Discount Price(5%)=",discountPrice2,"$")
}