/*Q-15:Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement 
at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it
with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

var guest_list1:string[]=["Farhan","Hanan","Talha"];
console.log("Guest List at Start:");
console.log("\n");
console.log(guest_list1);
console.log("\n");
console.log("Bad News:Due to some reason \"Farhan\" cannot join us this Friday.");
console.log("\n");
console.log("Changing Guest List");
console.log("\n");
guest_list1.splice(0,1,"Hasham");
console.log("Guest List After removing Farhan:\n");
console.log(guest_list1);
console.log("New Invitation Messages:\n");
for (let index = 0; index < guest_list1.length; index++) {
    
    console.log(`Dear ${guest_list1[index]}, I would be delighted to have you over for dinner this Friday.`);
}
