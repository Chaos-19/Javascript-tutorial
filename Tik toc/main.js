//'use strict'
const bann = document.querySelector('.banner');


const bordCell = document.getElementsByClassName('item');


const winCountBord = document.querySelectorAll('.state')


for (let i = 0; i < bordCell.length; i++) {
  bordCell[i].addEventListener('click', clickHandler);
}

let currentPlayer = 'X';
var playerOneMarkedPosition = [];

const player = [];

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


  if (!event.target.textContent) {
    event.target.textContent = currentPlayer; //== 'X' ? 'X' : 'O';


    playerOneMarkedPosition = cellValue.map((v, i) => {
      return v == 'X' ? i : v == 'O' ? -1 : undefined;
    })



    if (checkWinner()) {
      onWinner(currentPlayer, 'Win');

      const existingPlayer = player.find((p, ind) => { if (p.name === currentPlayer) return p; });

      existingPlayer.win = existingPlayer.win + 1;
      winCountBord.forEach((e, i) => {
        e.textContent = player[i].win;
      })
      return;
    }
    let boo = (function() {
      for (let i = 0; i < cellValue.length; i++) { if (!cellValue[i]) return true; }
    }());

    let draw = cellValue.length === 9 && !boo;


    if (draw && !checkWinner()) {
      onWinner("X 0", 'Draw');
    }

    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
    AI_Player();
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
  }
}



document.querySelector('.btn').addEventListener('click', resetBord);

function onWinner(text, status) {

  bann.style.display = 'flex';
  // bann.style.transform = 'scale(1)';

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

      return true;
    }
  }
  return false;
}



function resetBord() {
  bann.style.display = 'none';
  bann.style.transform = 'scale(0)';


  for (let key in bordCell) {
    if (bordCell[key].textContent)
      bordCell[key].textContent = '';
  }
  cellValue.length = 0;
  currentPlayer = 'X'
}


/* Auto player */

function AI_Player() {

  //check for the game start 
  let isPlayerStart = cellValue.filter((v) => {
    return v != undefined;
  }).length == 1 ? true : false;

 
  if (isPlayerStart) {
    const cellNo = Math.trunc((Math.random() * 8 + 1));
    bordCell[cellNo].click();
    bordCell[cellNo].textContent = currentPlayer;
    console.log(" Line 157  first Move  p ", currentPlayer);

  } else {
    var playOneIndex = filterIndex();
    let index = findNextPosition();
    //console.log("Position ", index);
    if (index) {
      console.log(" Line 164 blocking Move ", currentPlayer);
      bordCell[index].click();
      bordCell[index].textContent = currentPlayer;
      playerOneMarkedPosition.forEach((v, i) => {
        if (v != -1 && v != undefined) {
          playerOneMarkedPosition.splice(i, 1, -1)
        }
      })
      index = undefined;
    } else if ((!index) && (currentPlayer === 'O')) {

      while (true) {
        var cellNo = Math.trunc((Math.random() * 8 + 1));
        if (!bordCell[cellNo].textContent) {
          console.log(" Line 176 Randomly  ", currentPlayer);
          bordCell[cellNo].click();
          bordCell[cellNo].textContent = currentPlayer;
          break;
        }
      }



    }
  }

}


function filterIndex() {

  return cellValue.map((v, i) => { if (v == 'X') return i; }).filter((v) => { return v != undefined && v != 'O'; })
}

function findNextPosition() {

  const winningCompination = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8],
     [0, 3, 6], [1, 4, 7], [2, 5, 8],
     [0, 4, 8], [2, 4, 6]

      ];


  for (let combination of winningCompination) {
    const [a, b, c] = combination;

    if ((playerOneMarkedPosition[a] != undefined &&
        playerOneMarkedPosition[a] != -1) && (playerOneMarkedPosition[b] != undefined &&
        playerOneMarkedPosition[b] != -1 && playerOneMarkedPosition[c] == undefined)) {

      return c;

    }
    else if ((playerOneMarkedPosition[b] != undefined &&
        playerOneMarkedPosition[b] != -1) && (playerOneMarkedPosition[c] != undefined &&
        playerOneMarkedPosition[c] != -1 && playerOneMarkedPosition[a] == undefined)) {

      return a;

    }
    else if ((playerOneMarkedPosition[a] != undefined &&
        playerOneMarkedPosition[a] != -1) && (playerOneMarkedPosition[c] != undefined &&
        playerOneMarkedPosition[c] != -1 && playerOneMarkedPosition[b] == undefined)) {


      return b;

    }
  }
}

function transform(arr) {
  const newArray = [];
  if (arr.length < 1)
    return;
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (temp.length <= 2) {
      temp.push(arr[i])
    } else {
      newArray.push(temp);
      temp = [];
      temp.push(arr[i]);
    }
  }
  if (temp) {
    newArray.push(temp);
  }
  return newArray;
}