//analog clock + components
let analogClock = document.getElementById('clock-analog');
let hourArm = document.getElementById('clock-arm-hour');
let minuteArm = document.getElementById('clock-arm-minute');
let secondArm = document.getElementById('clock-arm-second');
let knob = document.getElementById('clock-knob');

////////////////////////////////////////////////////////////////////

// function to animate analog clock
function clockAnlog() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    hourArm.style.transform = 'translate(-50%,-50%) rotate(' + (hour*30 - 90) + 'deg)';
    minuteArm.style.transform = 'translate(-50%,-50%) rotate(' + (minute*6 - 90) + 'deg)';
    secondArm.style.transform = 'translate(-50%,-50%) rotate(' + (second*6 - 90) + 'deg)';
}
setInterval(clockAnlog, 1);