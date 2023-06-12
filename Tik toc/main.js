var boxs = document.querySelectorAll('.wrapper');
/*
boxs.forEach(function(val, index) {


  let clicked = false;
  val.addEventListener('click', function(e) {

    const container = [];

    const sele = val.querySelectorAll('div');
    e.target.style.fontSize = '5rem';

    if (!(e.target.textContent == '')) {
      throw new Error(`Error You can't click twice`)
    }
    if (!clicked) {
      e.target.textContent = "X";
      clicked = true;
    }
    else {
      e.target.textContent = "️O";
      clicked = false;
    }


    for (let i = 0; i < 9; i++) {
      container.push(sele[i]);
    }
    const boxValue = container.map((e) => { return e.textContent; });

    const cellValue =[] //create3x3Array(boxValue);


    const winner = []//checkWinningLine(cellValue);

    if (winner == 'X') {
      console.log('X WIN 🏆 ')
      document.querySelector('.banner').textContent = 'X WIN 🏆 ';
      document.querySelector('.banner').style.transform = 'scale(1)';
    }
    if (winner == '️O') {
      console.log('O WIN 🏆')
    }
    console.log(winner);
  })
})
*/



var bordCell = document.getElementsByClassName('item');
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
    onWinner(currentPlayer)
  }


  if (currentPlayer == 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

}



document.querySelector('.btn').addEventListener('click', restButn)

function onWinner(text) {
  let bann = document.querySelector('.banner');
  bann.style.transform = 'scale(1)';
  bann.textContent = text;
}

function checkWinner() {
  var winningCompination = [
   [0, 1, 2], [3, 4, 5], [6, 7, 8],
   [0, 3, 6], [1, 4, 7], [2, 3, 8],
   [0, 4, 8], [2, 4, 6]

    ];

  for (let combination of winningCompination) {
    const [a, b, c] = combination;
    if (cellValue[a] !== '' && cellValue[a] === cellValue[b] && cellValue[a] === cellValue[c]) {
      return true;
    }
  }
  return false;
}