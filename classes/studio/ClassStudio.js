//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let ave = 0;
        for(let x = 0; x<this.scores.length; x++){
            ave += this.scores[x];
        }
        return Math.round(ave/this.scores.length*10)/10;
    }
    status(){
        let score = this.average();
        let stat = '';
        if(score >= 90){
            stat = 'Accepted';
        }else if(score <90 && score>=80){
            stat = 'Reserve';
        }else if (score <80 && score>=70){
            stat = 'Probationary';
        }else{
            stat = 'Rejected';
        }
        return stat;
    }
}


let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
console.log(bear);
console.log(maltese);
console.log(gator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bear.addScore(83);
console.log(bear);

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let counter = 0;
//let gatorStat = gator.status();
while(gator.status()!='Reserve'){
    let newScore = 0;
    while (newScore<75){
        newScore = Math.floor(Math.random()*100)+1;
    }
    gator.addScore(newScore);
    //gatorStat = gator.status();
    //console.log(gator.scores, gatorStat, gator.average());
    counter++;
}
console.log(`It took ${counter} tests for ${gator.name} to get to ${gator.status()}`);


while(gator.status()!='Accepted'){
    let newScore = 0;
    while (newScore<85){
        newScore = Math.floor(Math.random()*100)+1;
    }
    gator.addScore(newScore);
    //gatorStat = gator.status();
    //console.log(gator.scores, gatorStat, gator.average());
    counter++;
}
console.log(`It took ${counter} tests for ${gator.name} to get to ${gator.status()}`);