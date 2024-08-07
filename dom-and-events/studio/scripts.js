// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const flightStatusSetting = document.getElementById("flightStatus");
    const abortMissionButton = document.getElementById("missionAbort");
    let flightStat = false;
    const rocketPos = document.getElementById("rocket");
    let top = 0;
    let left = document.getElementById("shuttleBackground").offsetLeft/2;

    takeOffButton.addEventListener('click', function(){
        if (window.confirm('Confirm that the shuttle is ready for takeoff.')){
            flightStatusSetting.innerHTML = 'Shuttle in flight.';
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
            flightStat = true;
            top +=10;
            rocketPos.style.marginBottom = top +'px';
            rocketPos.style.marginLeft = left + 'px';
        }
    });

    landingButton.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusSetting.innerHTML = 'The shuttle has landed.'
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        flightStat = false;
    });

    abortMissionButton.addEventListener('click', function(){
        if (window.confirm('Confirm that you want to abort the mission.')){
            flightStatusSetting.innerHTML = 'Mission aborted.';
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            flightStat = false;
        }
    });

    upButton.addEventListener('click', function(){
        if(flightStat){
            let height =  Number(document.getElementById("spaceShuttleHeight").innerHTML);
            top +=10;
            rocketPos.style.marginBottom = top +'px';
            height +=10000;
            document.getElementById("spaceShuttleHeight").innerHTML = height;
        }else{
            window.alert("The shuttle has not taken off yet.");
        }
    });

    downButton.addEventListener('click', function(){
        if(flightStat){
            let height =  Number(document.getElementById("spaceShuttleHeight").innerHTML);
            if (height != 0){
                top -=10;
            rocketPos.style.marginBottom = top +'px';
                height -=10000;
                document.getElementById("spaceShuttleHeight").innerHTML = height;
            }
        }else{
            window.alert("The shuttle has not taken off yet.");
        }
    });

    leftButton.addEventListener('click', function(){
        if(flightStat){
            left += 10;
           rocketPos.style.left = left +"px";
        }else{
            window.alert("The shuttle has not taken off yet.");
        }
    });

    rightButton.addEventListener('click', function(){
        if(flightStat){
            left -= 10;
            rocketPos.style.left = left+"px";
        }else{
            window.alert("The shuttle has not taken off yet.");
        }
    });

}

window.addEventListener("load", init);