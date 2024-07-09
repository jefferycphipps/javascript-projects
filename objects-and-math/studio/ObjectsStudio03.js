// Code your crewMass function here:
function crewMass(arr){
  let totalMass = 0;
  for (let x = 0; x<arr.length; x++)
    totalMass += arr[x].mass;
  return Math.round(totalMass*10)/10;
}

// Code your fuelRequired function here:
function fuelRequired(arr, extraMass = 75000){
  let fuelNeeded = 0;
  fuelNeeded = crewMass(arr)+extraMass;
  for(let x = 0; x<arr.length; x++){
    if(arr[x].species == 'dog'||arr[x].species == 'cat')
      fuelNeeded += 200;
    else
      fuelNeeded +=100;
  }


  return Math.trunc(Math.ceil(fuelNeeded*9.5));
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 console.log(`The mission has a launch mass of ${crewMass(crew)+75000} kg and requires ${fuelRequired(crewMass(crew),75000)} kg of fuel.`);