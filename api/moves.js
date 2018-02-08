const move_string = (x) => {
    var html = x[0].move.name;
    for (let i = 1; i < x.length; i++) {
        let tmp = x[i].move.name;
        html = `${html},${tmp}`;
    }
    return html;
}
export { move_string };