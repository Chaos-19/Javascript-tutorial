console.log("Timer");

const hour = document.querySelector('.hour');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');

console.log(hour);
function clock() {
  const date = new Date();
  hour.textContent = date.getHours();
  second.textContent = date.getSeconds();
  minute.textContent = date.getMinutes();
  
  setTimeout(clock,0);
}

clock();