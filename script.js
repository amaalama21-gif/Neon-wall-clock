function updateClock() {
  const now = new Date();
  
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();
