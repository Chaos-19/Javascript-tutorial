const root = document.querySelector('.root');
console.log(root);
root.style = `width: 80%;
              margin:3rem auto;
              text-align:center ;
              background-color:red`;

const heading = document.createElement('h1');

heading.textContent = "Task Manager App";
root.appendChild(heading);

const wrapper = document.createElement("div");


wrapper.style = `padding: 20px ;`;

root.appendChild(wrapper);
const input = document.createElement('input');

let task = (name) => {
  let taskobj = {};
  taskobj.taskName = name;
  taskobj.status = "ongoing";
  return taskobj;
}

let taskList = [];

const button = document.createElement('button');
button.textContent = "Add Task";
let text = '';
button.addEventListener('click', function(e) {
  if (input.value) {
    text = input.value;
    taskList.push(task(text));
    renderList();
    input.value = '';
    console.log(taskList);
  }
/*const innerbtn = btns[0].querySelectorAll('');
for(let i = 0; i < btns.length; i++) {
  console.log(btns[i].)
}
console.log(btns);
  */
  const btns = document.querySelector;

btns.addEventListener('click',function(){
  console.log(btns.textContent);
})
  
})

wrapper.appendChild(input);
wrapper.appendChild(button);

const ul = document.createElement('ol');
wrapper.appendChild(ul);
//wrapper.style=`color: white ;`;



const renderList = () => {
  ul.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const container = document.createElement('div');
    const li = document.createElement("li");

    const delet = document.createElement('button');
    delet.textContent = "❌"
    delet.style = `margin:0 10px;`;

    const complete = document.createElement('button');
    complete.textContent = '✅';

    const btnConta = document.createElement('div');

    container.textContent = taskList[i].taskName;
    li.style = `text-align: left;color: #fff;font-size:22px ;`;
    btnConta.appendChild(delet);
    btnConta.appendChild(complete);
    container.appendChild(btnConta);
    li.appendChild(container);
    container.style = `display: flex;
         justify-content: space-between;`;
    ul.appendChild(li);
  }
}



