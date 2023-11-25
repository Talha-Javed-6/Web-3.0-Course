//This Program will remove the students from an array whose marks less than 50
var marks:number[]=[12,56,78,99,45,66,34,49,43,47,50,51];
for (var index = 0; index < marks.length;) {
   if (marks[index]<50) {
    marks.splice(index,1);
   }
   else{
    index++;
   }
    
}
console.log("Array of Passed Students",marks);
