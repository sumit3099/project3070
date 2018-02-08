const show_images = (sp) => {
    var html = "";
    for (var key in sp) {
        if (sp[key] != null) {
            let x = `
            <img src="${sp[key]}" class="center">`;
            html += x;
        }

    }
    document.getElementById('img').innerHTML = html;

}
export { show_images };