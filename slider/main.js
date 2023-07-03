/*const card = document.querySelector('.card').addEventListener('click', function(arg) {
  document.querySelector('.card').classList.toggle('open');
})*/

const container = document.querySelector('.container');
for (let i = 0; i < 10; i++) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `  
    <img src="/slider/wonder_1664399049912.jpg" alt="">
     <div class="content">
       <p>Endalemetadel hono bus tebelashto lenge honal. </p>
       <p>Give me study not on memory manage from operating system course</p>
       <a href="#">Button</a>
     </div> `
  container.appendChild(card);
}
const arr = [...document.querySelectorAll('.container')]

arr.forEach((item, i) => {
  var eleme = item.getBoundingClientRect().width;
  document.querySelector('.nxt').addEventListener('click',(arg) => {
    item.scrollLeft +=320;
  })
  document.querySelector('.prev').addEventListener('click',(arg) => {
    item.scrollLeft -=320;
  })
})