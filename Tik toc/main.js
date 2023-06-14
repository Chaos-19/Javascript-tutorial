'use strict'
const bann = document.querySelector('.banner');


const bordCell = document.getElementsByClassName('item');


const winCountBord = document.querySelectorAll('.state')


for (let i = 0; i < bordCell.length; i++) {
  bordCell[i].addEventListener('click', clickHandler);
}

let currentPlayer = 'X';


const player = [];
const players = {}

const cellValue = [];



function clickHandler(event) {
  const targetContent = event.target;
  const index = Array.from(bordCell).indexOf(event.target);


  cellValue[index] = currentPlayer;


  event.target.style = `font-size: 4rem;`

  //
  if (player.length == 0) {
    player.push({ name: currentPlayer, win: 0 });
  }
  const existingPlayer = player.find(p => p.name === currentPlayer);

  if (!existingPlayer) {
    player.push({ name: currentPlayer, win: 0 });

  }


  if (!event.target.textContent)
    event.target.textContent = currentPlayer == 'X' ? 'X' : 'O';



  if (checkWinner()) {
    onWinner(currentPlayer, 'Win');

    const existingPlayer = player.find((p, ind) => { if (p.name === currentPlayer) return p; });

    existingPlayer.win = existingPlayer.win + 1;
    winCountBord.forEach((e, i) => {
      e.textContent = player[i].win;
      console.log(i)
    })

    console.log("winn");
  }
  let boo = (function() {
    for (let i = 0; i < cellValue.length; i++) { if (!cellValue[i]) return true; }
  }());

  let draw = cellValue.length === 9 && !boo;

  console.log('Draw ', draw);
  if (draw && !checkWinner()) {
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
  const winningCompination = [
   [0, 1, 2], [3, 4, 5], [6, 7, 8],
   [0, 3, 6], [1, 4, 7], [2, 5, 8],
   [0, 4, 8], [2, 4, 6]

    ];

  for (let combination of winningCompination) {
    const [a, b, c] = combination;

    if (cellValue[a] !== undefined && cellValue[a] === cellValue[b] && cellValue[a] === cellValue[c]) {

      console.log(a, b, c)
      return true;
    }
  }
  return false;
}



function resetBord() {

  console.log(cellValue)

  bann.style.display = 'none';
  bann.style.transform = 'scale(0)';


  for (let key in bordCell) {
    if (bordCell[key].textContent)
      bordCell[key].textContent = '';
  }
  cellValue.length = 0;

}