const ability_string = (x) => {

    var html = x[0].ability.name;
    for (let i = 1; i < x.length; i++) {
        let tmp = x[i].ability.name;
        html = `${html},${tmp}`;
    }
    return html;
}
export { ability_string };