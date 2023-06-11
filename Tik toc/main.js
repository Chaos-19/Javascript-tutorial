var boxs = document.querySelectorAll('.wrapper');

/*boxs.forEach(function(val, index) {


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

    const cellValue = create3x3Array(boxValue);


    const winner = checkWinningLine(cellValue);

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

function clickHandler(event) {
  var targetContent = event.target;
  
  if(!event.target.textContent)
  event.target.textContent =currentPlayer? 'X' : 'O';
  
  console.log(targetContent.textContent)
  currentPlayer = true;
}



document.querySelector('.btn').addEventListener('click', e => {
  document.querySelector('.banner').style.transform = 'scale(1)';
})