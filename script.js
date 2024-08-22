function updateTimer() {
  const timerElement = document.getElementById('timer');
  
  const currentDateTime = new Date();
  
  const formattedTime = currentDateTime.toLocaleString(); // Formats date and time as per system locale
  
  timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately on load
updateTimer();
