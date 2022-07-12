function displayTimeAndDate() {
  const clock = document.querySelector('.clock');
  const date = document.querySelector('.date');
  const currentDate = new Date();
  const hours = formatTime(currentDate.getHours());
  const minutes = formatTime(currentDate.getMinutes());
  const seconds = formatTime(currentDate.getSeconds());
  clock.innerHTML = `<span>${hours}</span>
  <span>:</span>
  <span>${minutes}</span>
  <span>:</span>
  <span>${seconds}</span>`;
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  const formattedDate = currentDate.toLocaleDateString('en-GB', options);
  date.textContent = `${formattedDate}`;
}

function formatTime(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

setInterval(displayTimeAndDate, 1000);
