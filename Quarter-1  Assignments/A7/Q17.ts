/*Q-17:Shrinking Guest List: You just found out that your new dinner table
 won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
 that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that 
person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, 
letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.*/
var guest_list1:string[]=["Farhan","Hanan","Talha"];
console.log("Guest List at Start:");
console.log("\n");
console.log(guest_list1);
console.log("\n");
console.log("Bad News:Due to some reason \"Farhan\" cannot join us this Friday.");
console.log("\n");
guest_list1.splice(0,1,"Hasham");
console.log("Guest List After removing Farhan:\n");
console.log(guest_list1);
console.log("\n");
console.log("Good News:I decided to arrange a big dinner so i am inviting some more guest.");
console.log("\n");
console.log("Added More Quest\n");
guest_list1.unshift("Aamish");
guest_list1.splice(2,0,"Muneeb");
guest_list1.push("Huzaifa");

console.log(guest_list1);
console.log("\n");
console.log("Now i am inviting only two Quest for this dinner So,");
console.log("\n");
while (guest_list1.length>2) {
    var removed_guest=guest_list1.pop();
    if (removed_guest) {
        console.log(`Dear ${removed_guest}, you’re sorry I can’t invite You to dinner.`);
    }
}
console.log("\nNow Guests are:\n");
console.log(guest_list1);

console.log("\nNow Invitations are:\n");

for (let index = 0; index < guest_list1.length; index++) {
    
    console.log(`Dear ${guest_list1[index]}, You are still invited this Friday for a dinner.`);
}
console.log("\nRemovig all Guests from list:");

while (guest_list1.length>0) {
    guest_list1.pop();
}

console.log(guest_list1);

