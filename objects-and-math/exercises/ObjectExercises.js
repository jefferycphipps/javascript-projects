let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimptwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let doggo = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tradi = {
   name: "Almina",
   species: "Tradigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
superChimptwo["astronautID"] = 2;
salamander["astronautID"] = 3;
doggo["astronautID"] = 4;
tradi["astronautID"] = 5;

// Add a move method to each animal object
superChimpOne["move"] = function (){return Math.floor(Math.random()*11)};
superChimptwo["move"] = function (){return Math.floor(Math.random()*11)};
salamander["move"] = function (){return Math.floor(Math.random()*11)};
doggo["move"] = function (){return Math.floor(Math.random()*11)};
tradi["move"] = function (){return Math.floor(Math.random()*11)};
// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimptwo, doggo, tradi];
// Print out the relevant information about each animal.
let crewReports = function(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
}

for(let x=0; x<crew.length;x++){
   crewReports(crew[x]);
}
// Start an animal race!
function fitnessTest(arr){
   let count = [];

   for (let x = 0; x<arr.length;x++){
      let steps = 0;
      let turns = 0;

      while(steps<20){
         steps += arr[x].move();
         turns ++;
      }
      count.push(`${arr[x].name} took ${turns} to take 20 steps.`)
   }
   return count;
}

let results = fitnessTest(crew);
console.log(results);