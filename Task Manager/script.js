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
let ulElement = [];
let listatus = [];

const button = document.createElement('button');
button.textContent = "Add Task";
let text = '';
button.addEventListener('click', function(e) {
  if (input.value) {
    text = input.value;
    taskList.push(task(text));
    renderList();
    input.value = '';
  }
});

wrapper.appendChild(input);
wrapper.appendChild(button);

const ul = document.createElement('ol');
wrapper.appendChild(ul);

const renderList = () => {
  ul.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const container = document.createElement('div');
    const li = document.createElement("li");

    const delet = document.createElement('button');
    delet.textContent = "❌";
    delet.style = `margin:0 10px;`;

    const complete = document.createElement('button');
    complete.textContent = '✅';

    const btnConta = document.createElement('div');

    container.textContent = taskList[i].taskName;
    li.style = `text-align: left;color: #fff;font-size:22px ;`;
    btnConta.appendChild(delet);
    btnConta.appendChild(complete);
    container.appendChild(btnConta);
    ulElement.push({ deleteBtn: delet, completeBtn: complete }); // Store buttons individually in ulElemens

    delet.addEventListener('click', function(e) {
      taskList.splice(i, 1);
      listatus.some(function(val, index) {
        if (val ==i) {
          console.log(val,' = ',i)
          listatus.splice(index, 1);
        }
      });
      renderList();
    });


    complete.addEventListener('click', function(e) {
      taskList[i].status = "completed";
      const items = document.querySelectorAll('li');
      items[i].style = `text-decoration: line-through ;`
      listatus.push(i);


    });

    li.appendChild(container);
    container.style = `display: flex; justify-content: space-between;`;

    listatus.some(function(val, index) {
      if (val == i) {
    li.style = 'text-decoration: line-through;'
      }
    })
    ul.appendChild(li);
  }
}



/*
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
let ulElement = [];
let listatus = [];

const button = document.createElement('button');
button.textContent = "Add Task";
let text = '';
button.addEventListener('click', function(e) {
  if (input.value) {
    text = input.value;
    taskList.push(task(text));
    renderList();
    input.value = '';

  }

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
    ulElement.push({ deletebtn: delet, completebtn: complete });

    delet.addEventListener('click', function(e) {
      taskList.splice(i, 1);
      listatus.some(function(val, index) {
      if (val == i) listatus.splice(index,1);});
      renderList();
    })

    complete.addEventListener('click', function(e) {
      taskList[i].status = "completed";
      const items = document.querySelectorAll('li');
      items[i].style = `text-decoration: line-through ;`
      listatus.push(i);
    });



    li.appendChild(container);
    container.style = `display: flex;
         justify-content: space-between;`;

    listatus.some(function(val, index) {
      console.log('upper ', val);
      if (val == i) {
        li.style = 'text-decoration: line-through ;'
        console.log('lower ', val);
      }
    })


    ul.appendChild(li);

  }
}
*/