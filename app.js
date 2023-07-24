let clock = document.querySelector(".clock");
let selectTime = document.querySelector("#alarmTime");
let setAlarm = document.querySelector(".setAlarm");
let clearAlarm = document.querySelector(".clearAlarm");

const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);
audio.loop = true;

let alarmTime = null;
let alarmTimeout = null;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const updateDate = () => {
  let date = new Date();
  const seconds = formatTime(date.getSeconds());
  const minutes = formatTime(date.getMinutes());
  const hours = formatTime(date.getHours());
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
};

setInterval(updateDate, 1000);

selectTime.addEventListener("change", () => {
  alarmTime = selectTime.value;
});

function setAlarmTime() {}

setAlarm.addEventListener("click", () => {
  if (alarmTime) {
    let current = new Date();
    let timeAlarm = new Date(alarmTime);
    if (timeAlarm > current) {
      const timeOut = timeAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => {
        audio.play();
      }, timeOut);
      alert("Alarm Set");
    }
  }
});

clearAlarm.addEventListener("click", () => {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm Cleared");
  }
});