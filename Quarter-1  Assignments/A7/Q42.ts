/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by
 adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/
var magician_name:string[]=["Harry Houdini","Criss Angel","Lance Burton","David Blaine"];
function great_magicians(array:string[]) {
    console.log("The Magician's Name are:\n");
    
    for (let index = 0; index < array.length; index++) {
       console.log("Great",array[index]);
    }
}
great_magicians(magician_name);