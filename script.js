const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    //Getting current date from browser
    var date = new Date();
    //Getting hour,min,sec
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //Positioning by 360 degrees
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    //setting hands of clock based on degrees
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";



}

const interval = setInterval(runTheClock,1000)