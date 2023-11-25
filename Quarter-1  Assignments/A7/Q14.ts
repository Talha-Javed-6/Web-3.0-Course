/*Q-14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
let guest_list:string[]=["Farhan","Hanan","Talha"];
console.log("List of Invited Guests:"+"\n");
console.log(guest_list);
console.log("\nInvitation Messages:\n");
for (let index = 0; index < guest_list.length; index++) {
    console.log(`Dear ${guest_list[index]}, I would be delighted to have you over for dinner this Friday.`);
}