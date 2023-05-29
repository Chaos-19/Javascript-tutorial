var again = document.querySelector(".again");
var guess = document.querySelector('.number');
var message = document.querySelector('.message');

var inpu = document.querySelector('.guess');

var check = document.querySelector('.check');

var num = () => Math.ceil(Math.random() * 15);

again.addEventListener('click', function() {
  guess.innerHTML = `${num()}`;
})

check.addEventListener('click', function() {
  if (Number(inpu.value)===Number(guess.value)) {
    message.innerHTML = "too high ";
  } else if (Number(inpu.value) < Number(guess.value)) {
    message.innerHTML = 'too low';
  } else {
        message.innerHTML = "you Won";
  }
});