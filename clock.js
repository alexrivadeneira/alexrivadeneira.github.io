function getTimeObject(){
    let time = {};

    let date = new Date();

    let hour = date.getHours() % 12;
    let minute = date.getMinutes() % 60;
    let second = date.getSeconds() % 60;

    time.hour = hour;
    time.minute = minute;
    time.second = second;
    
    console.log(time);
    return time;
}

setInterval(getTimeObject, 1000);

let minute = 0;

function renderClock(timeObject){
    let time = getTimeObject();

    let minuteHand = document.getElementById('minute-hand');
    let hourHand = document.getElementById('hour-hand');
    let secondHand = document.getElementById('second-hand');
    
    let minuteDegree = (time.minute * 360) / 60;
    let hourDegree = (time.hour * 360) / 12;
    let secondDegree = (time.second * 360) / 60;

    let minuteStyleString = 'rotate(' + minuteDegree + 'deg)';
    let hourStyleString = 'rotate(' + hourDegree + 'deg)';
    let secondStyleString = 'rotate(' + secondDegree + 'deg)';

    minuteHand.style.transform = minuteStyleString;
    hourHand.style.transform = hourStyleString;
    secondHand.style.transform = secondStyleString;
}

let interval = setInterval(renderClock, 1000);


