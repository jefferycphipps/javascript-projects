function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 for(let i = 0; i<3; i++){
  console.log(randomSelection(happiness)+ " " + randomSelection(words));
 }

 let index = Math.floor(Math.random()*2);
 if (index === 0)
  console.log(randomSelection(happiness)+ " " + randomSelection(happiness));
else
  console.log(randomSelection(words)+ " " + randomSelection(words));
let newArr = [];
newArr.push(randomSelection(happiness));
newArr.push(randomSelection(words));

console.log(newArr);

let num = Math.round(Math.random()*10);
for (let x = 0; x<10;x++)
  console.log(Math.floor(Math.random()*10));

console.log(Math.round(12.3456789)*100/100);

console.log(Math.round(12.3456789*10000)/10000);

console.log(Math.round(12.3456789)*10000/10000);

console.log(Math.round(12.3456789*100)/100);

let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves",
  birthday: function () {return this.age = this.age + 1;}
};

console.log(giraffe.birthday());