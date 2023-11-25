/*Q-41:Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/
var magician_name:string[]=["Harry Houdini","Criss Angel","Lance Burton","David Blaine"];
function show_magicians(array:string[]) {
    console.log("The Magician's Name are:\n");
    
    for (let index = 0; index < array.length; index++) {
       console.log(array[index]);
    }
}
show_magicians(magician_name);