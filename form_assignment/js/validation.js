const validate = () => {
    let f1 = document.getElementById('field1').value;
    if (f1 == null || f1 == "") {
        alert("Person Name can't be blank");
        return false;
    }
    let f2 = document.getElementById('field2').value;
    if (f2 == null || f2 == "") {
        alert("Person Last Name can't be blank");
        return false;
    }
    let f3 = document.getElementById('field3').value;
    if (f3 == null || f3 == "") {
        alert("Parent  Name can't be blank");
        return false;
    }
    let f4 = document.getElementById('field4').value;
    if (f4 == null || f4 == "") {
        alert("Parent Last Name can't be blank");
        return false;
    }
    return true;
}
export { validate };