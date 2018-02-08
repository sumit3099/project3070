const type_string = (x) => {

    var html = x[0].type.name;
    for (let i = 1; i < x.length; i++) {
        let tmp = x[i].type.name;
        html = `${html},${tmp}`;
    }
    return html;
}
export { type_string };