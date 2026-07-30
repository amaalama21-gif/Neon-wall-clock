// NEON ALARM CLOCK SCRIPT

function updateClock() {
  const now = new Date();
  
  // Get time in HH:MM:SS format
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
  document.getElementById('date').innerText = now.toDateString();
  
  // CHECK ALARM
  const alarm = localStorage.getItem('alarm');
  if(alarm) {
    const [alarmH, alarmM] = alarm.split(':');
    if(now.getHours() == alarmH && now.getMinutes() == alarmM && now.getSeconds() == 0) {
      document.getElementById('alarmSound').play();
      alert('⏰ ALARM! TIME TO WAKE UP!');
    }
  }
}

// Run every 1 second
setInterval(updateClock, 1000);
updateClock(); // run once on load

// SET ALARM FUNCTION
function setAlarm() {
  const val = document.getElementById('alarmTime').value;
  if(val) {
    localStorage.setItem('alarm', val);
    document.getElementById('alarmStatus').innerText = 'Alarm set for: ' + val;
  } else {
    alert('Please pick a time first bro');
  }
}

// CLEAR ALARM
function clearAlarm() {
  localStorage.removeItem('alarm');
  document.getElementById('alarmStatus').innerText = 'No alarm set';
  document.getElementById('alarmTime').value = '';
}
