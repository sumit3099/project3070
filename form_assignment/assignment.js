import { show } from './assignment2.js';
import { string_select } from './html/html.js';
import { Formvisblity } from './js/formvisible.js';
import { style } from './css/style.js';
document.head.innerHTML = style;
document.getElementById('form_se').innerHTML = string_select;

document.getElementById('formv').addEventListener("change", Formvisblity);
//document.getElementById('formbutton').addEventListener('click', formsubmit);
//document.getElementById('formbutton').addEventListener('click', add);

//  var add = () => {
//     console.log("abc");
//     var v = document.getElementById('formv').value;
//     if (v === 'form1') {
//         const p = new person(document.getElementById('f1f1').value, document.getElementById('f1f2').value, document.getElementById('f1f3').value, document.getElementById('f1f4').value);
//     }
//     if (v === 'form2') {
//         const p = new person(document.getElementById('f2f1').value, document.getElementById('f2f2').value, document.getElementById('f2f3').value, document.getElementById('f2f4').value);
//     }
//     show(p);
// }
// var show = (p) => {
//     console.log(p.fname);
//     console.log(p.lname);
//     console.log(p.parentfname);
//     console.log(p.parentlname);

// }


// var Formvisblity = () => {
//     var v = document.getElementById('formv').value;
//     if (v === 'form1') {
//         document.getElementById('form1').style.display = 'block';
//         document.getElementById('form2').style.display = 'none';
//     }
//     if (v === 'form2') {
//         document.getElementById('form1').style.display = 'none';
//         document.getElementById('form2').style.display = 'block';

//     }
// }
// document.getElementById('form1button').addEventListener('click', add);

// 
// // show();