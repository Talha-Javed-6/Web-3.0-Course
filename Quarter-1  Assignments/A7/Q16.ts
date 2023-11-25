/*Q-16:More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

var guest_list1:string[]=["Farhan","Hanan","Talha"];
console.log("Guest List at Start:");
console.log("\n");
console.log(guest_list1);
console.log("Bad News:Due to some reason \"Farhan\" cannot join us this Friday.");
console.log("\n");
guest_list1.splice(0,1,"Hasham");
console.log("Guest List After removing Farhan:\n");
console.log(guest_list1);
console.log("\n");
console.log("Good News:I decided to arrange a big dinner so i am inviting some more guest.");
console.log("\n");
console.log("Adding More Quest:\n");
guest_list1.unshift("Aamish");
guest_list1.splice(2,0,"Muneeb");
guest_list1.push("Huzaifa");
console.log(guest_list1);

console.log("\n");
console.log("New Invitation Messages:\n");
for (let index = 0; index < guest_list1.length; index++) {
    
    console.log(`Dear ${guest_list1[index]}, I would be delighted to have you over for dinner this Friday.`);
}
