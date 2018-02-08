import { show_images } from './show_images.js';
import { table } from './table.js';
const call = (d) => {
    show_images(d.sprites);
    table(d);

}
export { call };