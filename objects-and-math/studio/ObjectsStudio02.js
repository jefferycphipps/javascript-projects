// Code your orbitCircumference function here:
function orbitCircumference(radius = 2000){
  return Math.trunc(Math.PI*2*radius);
}

// Code your missionDuration function here:
function missionDuration(numberOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000){
  
  return Math.round(((numberOfOrbits*orbitCircumference(orbitRadius))/orbitalSpeed)*100)/100;

}
let numberOfOrbits = 5;
console.log(`The mission will travel ${numberOfOrbits*orbitCircumference()} km and it will take ${missionDuration(5)} hours to complete.`);
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(id){
  return id[Math.floor(Math.random()*6)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000){
  let hours = missionDuration(3, radius, speed);
  return `'${candidate.name} will perform the spacewalk, which will last ${hours} hours and require ${Math.round(candidate.o2Used(hours)*1000)/1000} kg of oxygen.'`;

}
let idNumbers = [291, 414, 503, 599, 796, 890];
// Candidate data & crew array.
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
 

 let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 let crewId = [];
 // Code your template literal and console.log statements:
 let num = selectRandomEntry(idNumbers);
 crewId.push(num);
 for (let x = 1; x<3;x++){
     num =  selectRandomEntry(idNumbers);
     while(crewId.indexOf(num)!=-1){
       num =  selectRandomEntry(idNumbers);
     }
     crewId.push(num);
 }
 //console.log(crewId);
 
 
 function selector(id, ani){
   let crew = [];
   for (let x = 0; x<3;x++){
     for (let i = 0; i< ani.length; i++){
       if (id[x] == ani[i].astronautID){
         crew.push(ani[i]);
       }
     }
   }
   return crew;
 }
 let crewAnimals = selector(crewId, animals);

 //let crew = [candidateA,candidateC,candidateE];
 for (let x = 0; x<crewAnimals.length; x++){
  
 console.log(oxygenExpended(crewAnimals[x]));
 }