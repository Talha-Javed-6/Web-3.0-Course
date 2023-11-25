//This Program will separate the fruits containing 5 Characters in their name
var fruits=["apple", "banana", "cherry", "date", "grape"];
var fruitsWith5Characters=fruits.filter((S)=>{
    if (S.length>5) {
        return true
    }
})
console.log(fruitsWith5Characters);
//Other method to write filter
var fruitWith5Characters=fruits.filter(fruit => fruit.length>5)
console.log(fruitWith5Characters);

