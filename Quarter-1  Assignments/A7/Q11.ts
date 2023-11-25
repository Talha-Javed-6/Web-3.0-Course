/*Q-11:Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/
let friends_name:string[]=["Farhan","Talha","Hanan","Hasham","Aamish"];
// console.log(friends_name[0]);
// console.log(friends_name[1]);
// console.log(friends_name[2]);
// console.log(friends_name[3]);
// console.log(friends_name[4]);
//This can be done by loop
for (let index = 0; index < friends_name.length; index++) {
    console.log(`Index-${index}:-`+friends_name[index]);
}
