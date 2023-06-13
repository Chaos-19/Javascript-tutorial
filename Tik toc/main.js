'use strict'
const bann = document.querySelector('.banner');


const bordCell = document.getElementsByClassName('item');


var winCount = 0;

const winCountBord = document.querySelectorAll('.state')


for (var i = 0; i < bordCell.length; i++) {
  bordCell[i].addEventListener('click', clickHandler);
}

var currentPlayer = 'X';
var cellValue = [];

function clickHandler(event) {
  var targetContent = event.target;
  var index = Array.from(bordCell).indexOf(event.target);


  cellValue[index] = currentPlayer;

  if (!event.target.textContent)
    event.target.textContent = currentPlayer == 'X' ? 'X' : 'O';



  if (checkWinner()) {
    onWinner(currentPlayer, 'Win');
    console.table(cellValue)
  }


  let boo = (function() {
    for (var i = 0; i < cellValue.length; i++) { if (!cellValue[i]) return true; }
  }());


  const draw = cellValue.length === 9 && !boo;


  if (draw) {
    onWinner("X 0", 'Draw');
  }


  if (currentPlayer == 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

}



document.querySelector('.btn').addEventListener('click', resetBord);

function onWinner(text, status) {

  bann.style.display = 'flex';
  bann.style.transform = 'scale(1)';

  const statusBord = document.createElement('p');
  statusBord.textContent = status;
  statusBord.style.color = '#fff';
  bann.textContent = text;
  bann.appendChild(statusBord);

}

function checkWinner() {
  var winningCompination = [
   [0, 1, 2], [3, 4, 5], [6, 7, 8],
   [0, 3, 6], [1, 4, 7], [2, 5, 8],
   [0, 4, 8], [2, 4, 6]

    ];

  for (let combination of winningCompination) {
    const [a, b, c] = combination;

    if (cellValue[a] !== undefined && cellValue[a] === cellValue[b] && cellValue[a] === cellValue[c]) {
      return true;
    }
  }
  return false;
}



function resetBord() {

  console.log(cellValue)

  bann.style.display = 'none';
  bann.style.transform = 'scale(0)';


  for (var key in bordCell) {
    if(bordCell[key].textContent)
    bordCell[key].textContent = '';
  }
  cellValue.length = 0;

}