function updateTime(){
	const tag = document.getElementById('timer');
	const date = new Date();
	const format = date.toLocaleString();// Formats date and time as per system locale
	tag.textContent = format;
}
// Update the timer every second
setInterval(updateTime, 1000);
// Initial call to display the timer immediately on load
updateTime();