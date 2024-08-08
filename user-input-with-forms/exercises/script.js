//Code Your Solution Below
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let name = document.getElementById("testName");
        if(name ===""){
            alert("Need a test name");
            event.preventDefault();
        }
        let date = document.getElementById("testDate");
        if(date===""){
            alert("Please select a date");
            event.preventDefault();
        }
        
    });
});