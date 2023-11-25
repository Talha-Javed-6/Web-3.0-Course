/*Q-6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning 
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
var person_Name:string="\t\t\tTalha Javed\t\t\t";
var stripped_Person_Name=person_Name.trim();
console.log(`Name before Stripping:${person_Name} `);
console.log(`Name After Stripping:${stripped_Person_Name} `);
