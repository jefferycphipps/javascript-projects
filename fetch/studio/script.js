//TODO: Add Your Code Below
window.addEventListener("load", function() {

    let url = "https://handlers.education.launchcode.org/static/astronauts.json";
    let astronautsList;
    const astronauts = fetch(url).then( function(response) {
        return response.json(); 
    });
    astronauts.then(function(results) {
            astronautsList = results;
            printAstros(document, astronautsList);
         });
    
});

function printAstros(document, astronautsList){
/*<div class="astronaut">
    <div class="bio">
        <h3>Mae Jemison</h3>
        <ul>
        <li>Hours in space: 190</li>
        <li>Active: false</li>
        <li>Skills: Physician, Chemical Engineer</li>
        </ul>
    </div>
    <img class="avatar" src="images/mae-jemison.jpg">
</div>*/
    let div = document.getElementById("container");
    let person = document.createElement("div");
    for(let x = 0; x<astronautsList.length; x++){
        const h3 = document.createElement("h3");
        h3.innerHTML = `${astronautsList[x].firstName} ${astronautsList[x].lastName}`;
        person.appendChild(h3);

        const ul = document.createElement("ul");

        const liHours = document.createElement("li");
        liHours.innerHTML = `Hours in Space ${astronautsList[x].hoursInSpace}`;
        ul.appendChild(liHours);

        const liActive = document.createElement("li");
        liActive.innerHTML = `Active ${astronautsList[x].active}`;
        ul.appendChild(liActive);

        const liSkills = document.createElement("li");
        liSkills.innerHTML = `Skills: ${astronautsList[x].skills}`;
        person.appendChild(ul);

        const img = document.createElement('img');
        img.src = astronautsList[x].picture;
        person.appendChild(img);

        div.appendChild(person);
    }
    
    


}


