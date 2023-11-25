/*Q-3. Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var nameOfPerson:string="Talha Javed";
var upper_case=nameOfPerson.toUpperCase();
var lower_case=nameOfPerson.toLowerCase();
var title_case=nameOfPerson.split(" ").map((n:string)=>n[0].toUpperCase()+n.substring(1)).join(" ");
console.log("In Title Case:",title_case);
console.log("In Upper Case:",upper_case);
console.log("In Lower Case:",lower_case);
