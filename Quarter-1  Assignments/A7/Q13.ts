/*Q-13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a 
series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var favorite_transportation:string[]=["Helicopter","Mercedes G Wagon","Rolls Royce Wraith","Bently","Hayabusa Sports Bike","Aeroplane"];
for (let index = 0; index < favorite_transportation.length; index++) {
    console.log(`I will fulfill my Dreams by Owning a ${favorite_transportation[index]}`);
}