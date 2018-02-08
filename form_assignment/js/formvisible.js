import { string_form1 } from '../html/form1.js';
import { string_form2 } from '../html/form2.js';
import { formsubmit } from './formsubmit.js';
var Formvisblity = () => {
    let v = document.getElementById('formv').value;
    if (v === 'form1') {

        document.getElementById('form').innerHTML = string_form1;
    }
    if (v === 'form2') {
        document.getElementById('form').innerHTML = string_form2;
    }
    document.getElementById('formbutton').addEventListener('click', formsubmit);
}
export { Formvisblity };