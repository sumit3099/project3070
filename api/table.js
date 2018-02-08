import { ability_string } from './ability.js';
import { move_string } from './moves.js';
import { type_string } from './type.js';
const table = (d) => {
    var html = `
    <div class="container" >
     <div class=" flow-text center"><h1>${d.name.toUpperCase()}</h1></div>
    <table class="responsive-table bordered red-text" >
        <tbody>
          <tr>
            <td><h5>Height</h3></td>
            <td>${d.height} cm</td>  
          </tr>
          <tr>
            <td><h5>weight</h3></td>
            <td>${d.weight} Kg</td>  
          </tr>
          <tr>
            <td><h5>Experience</h3></td>
            <td>${d.base_experience} </td>  
          </tr>
          <tr>
            <td><h5>Type</h3></td>
            <td>${type_string(d.types)}</td>  
          </tr>
          <tr>
            <td><h5>Abilities</h3></td>
            <td>${ability_string(d.abilities)}</td>  
          </tr>
          <tr>
            <td><h5>Moves</h3></td>
            <td>${move_string(d.moves)}</td>  
          </tr>
        
        </tbody>
      </table>
      </div>
`;
    document.getElementById('tbl').innerHTML = html;

}
export { table };