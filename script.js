// LOUD ALARM SOUND
const alarmAudio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
alarmAudio.loop = true;
alarmAudio.volume = 1.0;

function updateClock() {
  const now = new Date();

  // Time with AM/PM
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById('time').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('date').innerText = now.toDateString();

  // ALARM CHECK
  const alarm = localStorage.getItem("alarm");
  if(alarm) {
    const [alarmH, alarmM] = alarm.split(':');
    if(now.getHours() == alarmH && now.getMinutes() == alarmM && now.getSeconds() == 0) {
      alarmAudio.play(); // LOUD SOUND STARTS
      alert('⏰ ALARM RINGING!');
      setTimeout(() => { 
        alarmAudio.pause(); 
        alarmAudio.currentTime = 0; 
      }, 30000); // stops after 30 seconds
    }
  }
}

setInterval(updateClock, 1000);
updateClock();

// SET ALARM FUNCTION
function setAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;
  if(alarmTime) {
    localStorage.setItem("alarm", alarmTime);
    document.getElementById('alarmStatus').innerText = `Alarm set for ${alarmTime}`;
  }
}
