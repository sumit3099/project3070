import { person } from './class.js';
import { print } from './tprint.js';
import { validate } from './validation.js';
const formsubmit = () => {
    var t = validate();
    if (t === true) {
        alert('Form Submitted Succesfully');
        let f1 = document.getElementById('field1').value;
        let f2 = document.getElementById('field2').value;
        let f3 = document.getElementById('field3').value;
        let f4 = document.getElementById('field4').value;

        const p = new person(f1, f2, f3, f4);
        print(p);
    }

}
export { formsubmit };