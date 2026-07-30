function updateClock() {
  const now = new Date();
  
  // Time with AM/PM
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('time').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('date').innerText = now.toDateString();
  
  // ALARM CHECK
  const alarm = localStorage.getItem('alarm');
  if(alarm) {
    const [alarmH, alarmM] = alarm.split(':');
    if(now.getHours() == alarmH && now.getMinutes() == alarmM && now.getSeconds() == 0) {
      document.getElementById('alarmSound').play();
      alert('⏰ ALARM RINGING!');
    }
  }
}

setInterval(updateClock, 1000);
updateClock();

function setAlarm() {
  const val = document.getElementById('alarmTime').value;
  if(val) {
    localStorage.setItem('alarm', val);
    document.getElementById('alarmStatus').innerText = 'Alarm set for: ' + val;
  }
}
