import { person } from './class.js';
const print = (p) => {
    const output_string = `<center><table  border="1px"> <tr>
<td>Person First name</td> <td>${p.fname}</td>
</tr><tr>
    <td>Person Last Name</td> <td>${p.lname}</td></tr><tr>
     <td>Parent First name</td><td>${p.parentfname}</td></tr><tr>
    <td>Parent Last Name</td><td>${p.parentlname}</td></tr> 
</table></center>`;
    document.getElementById('output').innerHTML = output_string;
    return false;
}
export { print };