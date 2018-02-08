document.body.appendChild(document.createElement("input"));
document.getElementsByTagName("input")[0].setAttribute("id", "task");
document.getElementsByTagName("input")[0].setAttribute("type", "text");
document.body.appendChild(document.createElement("button"));
document.getElementsByTagName("button")[0].setAttribute("id", "add");
document.getElementsByTagName("button")[0].innerHTML = "Add";
document.body.appendChild(document.createElement("div"));
document.getElementsByTagName("div")[0].setAttribute("id", "todos");
var list = new Array;
const status = new Array;

var add = () => {
    let task = document.getElementById('task').value;
    status.push("Todo");
    list.push(task);
    document.getElementById('task').value = "";
    show();
}

function remove() {
    let id = this.getAttribute('id');
    list.splice(id, 1);
    show();

}

function stodo() {
    let id = this.getAttribute('id');

    status[id] = "Todo";
    console.log(status);
    show();

}

function sprogress() {
    let id = this.getAttribute('id');


    status[id] = "Progress";
    console.log(status);
    show();

}

function sdone() {
    let id = this.getAttribute('id');


    status[id] = "Done";
    console.log(status);
    show();

}






function show() {
    var html = '<ul>';
    for (let i = 0; i < list.length; i++) {
        html += `<li> ${list[i]}</li> <button class="Todo" id="${i} ">Todo</button><button class="Progress" id="${i}">Progress</button><button class="Done" id="${i}">Done</button><span>${status[i]}</span><button class="remove" id="${i}  ">Delete</button>`
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);


    };
    buttons = document.getElementsByClassName('Todo');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', stodo);


    };
    buttons = document.getElementsByClassName('Progress');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', sprogress);


    };
    buttons = document.getElementsByClassName('Done');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', sdone);
    };

}
document.getElementById('add').addEventListener('click', add);
show();