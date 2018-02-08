// document.body.appendChild(document.createElement("input"));
// document.getElementsByTagName("input")[0].setAttribute("id", "task");
// document.getElementsByTagName("input")[0].setAttribute("type", "text");
// document.body.appendChild(document.createElement("button"));
// document.getElementsByTagName("button")[0].setAttribute("id", "add");
// document.getElementsByTagName("button")[0].innerHTML = "Add";
// document.body.appendChild(document.createElement("div"));
// document.getElementsByTagName("div")[0].setAttribute("id", "todos");
// var list = new Array;
// const status = new Array;

// var add = () => {
//     let task = document.getElementById('task').value;
//     status.push("Todo");
//     list.push(task);
//     document.getElementById('task').value = "";
//     show();
// }

// function remove() {
//     let id = this.getAttribute('id');
//     list.splice(id, 1);
//     show();

// }

// function stodo() {
//     let id = this.getAttribute('id');

//     status[id] = "Todo";
//     console.log(status);
//     show();

// }

// function sprogress() {
//     let id = this.getAttribute('id');


//     status[id] = "Progress";
//     console.log(status);
//     show();

// }

// function sdoneformv() {
//     let id = this.getAttribute('id');


//     status[id] = "Done";
//     console.log(status);
//     show();

// }

class person {
    constructor(fname, lname, parentfname, parentlname) {
        this.fname = fname;
        this.lname = lname;
        this.parentfname = parentfname;
        this.parentlname = parentlname;
    }
}
var show = (p) => {
    console.log(p.fname);
    console.log(p.lname);
    console.log(p.parentfname);
    console.log(p.parentlname);

}
var add = () => {
    console.log("abc");
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        const p = new person(document.getElementById('f1f1').value, document.getElementById('f1f2').value, document.getElementById('f1f3').value, document.getElementById('f1f4').value);

    }
    if (v === 'form2') {
        const p = new person(document.getElementById('f2f1').value, document.getElementById('f2f2').value, document.getElementById('f2f3').value, document.getElementById('f2f4').value);
    }
    show(p);
}
var show = (p) => {
    console.log(p.fname);
    console.log(p.lname);
    console.log(p.parentfname);
    console.log(p.parentlname);
}


var Formvisblity = () => {
    var v = document.getElementById('formv').value;
    if (v === 'form1') {
        document.getElementById('form1').style.display = 'block';
        document.getElementById('form2').style.display = 'none';
    }
    if (v === 'form2') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    }
}
document.getElementById('formv').addEventListener("change", Formvisblity);


document.getElementById('form1button').addEventListener('click', add);

document.getElementById('form2button').addEventListener('click', add);
// show();