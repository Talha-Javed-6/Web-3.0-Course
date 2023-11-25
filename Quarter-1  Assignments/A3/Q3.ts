//This Program Will Convert Number of Days into weeks and days
//Variable to get the Number of days
var days:number=21;
var week:number=Math.floor(days/7);
var remainingDays:number=days%7;
console.log(`${days} ${days===1? `day`:`days`}`,"are of",`${week} ${week ===1 || week===0? `week`:`Weeks`}`,"and",`${remainingDays} ${remainingDays===1 || remainingDays===0? `Day`:`Days`}`);