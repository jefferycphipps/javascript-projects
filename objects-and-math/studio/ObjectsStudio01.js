let idNumbers = [291, 414, 503, 599, 796, 890];
// Code your selectRandomEntry function here:
function selectRandomEntry(id){
  return id[Math.floor(Math.random()*6)];
}

// Code your buildCrewArray function here:
let crewId = [];


// Here are the candidates and the 'animals' array:
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
//console.log(crewAnimals);
console.log(`${crewAnimals[0].name}, ${crewAnimals[1].name} and ${crewAnimals[2].name} are going to space!`);
