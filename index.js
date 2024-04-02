setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}