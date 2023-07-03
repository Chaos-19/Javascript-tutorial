const root = document.querySelector(".root");

root.style = ` width: 80% ;
               margin: 3rem auto;
               text-align: center;
               background-color: red;
               padding: 20px ;
`;

const heading = document.createElement("h1");
heading.textContent = "Task Manager";
root.appendChild(heading);
const wrapper = document.createElement("div");

root.appendChild(wrapper);

const input = document.createElement("input");

input.style = `font-size: 22px; padding:5px; `

const addBtn = document.createElement("button");
addBtn.style = `font-size: 24px;padding:5px ;margin-left: 5px;`;
addBtn.textContent = "ADD";

wrapper.appendChild(input);
wrapper.appendChild(addBtn);

var taskList = [];

addBtn.addEventListener("click", function() {
  if (!(input.value == "")) {
    taskList.push({ name: input.value, status: "ongoing" });
    renderTask();
    input.value = "";
  }
});

var ul = document.createElement("ol");

wrapper.appendChild(ul);

function renderTask() {
  ul.innerHTML = "";

  taskList.forEach((value, index, arr) => {

    const container = document.createElement("div");
    const li = document.createElement("li");
    container.textContent = value.name;
    const deletBtn = document.createElement("button");
    deletBtn.textContent = "❌";
    deletBtn.style = `font-size: 19px; `

    const compBtn = document.createElement("button");
    compBtn.textContent = "✅";
    compBtn.style = `font-size: 19px; `
    const wrappBtn = document.createElement("div");


    wrappBtn.appendChild(deletBtn);
    wrappBtn.appendChild(compBtn);

    wrappBtn.style = `display: flex ;justify-content center;align-items: center ;gap:10px ;`
   
   li.style = `font-size: 25px;color: #fff;`

    deletBtn.addEventListener("click", function(e) {
      arr.splice(index, 1);
      renderTask();
    });

    compBtn.addEventListener("click", function(e) {
      arr[index].status = "complete";
      renderTask();
    });

    if (value.status === "complete") {
      container.style = `
      display:flex;
      justify-content:space-between;
      text-decoration: line-through
      `;
      
    } else {
      container.style = ` 
           display:flex;
           justify-content:space-between;`;
    }

    container.appendChild(wrappBtn);

    li.appendChild(container);

    ul.appendChild(li);
  });
}
