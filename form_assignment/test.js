// function fn() {
var string = '{"items":[{"Desc":"Item1"},{"Desc":"Item2"}]}';


localStorage.setItem('added-items', string);

var retrievedObject = localStorage.getItem('added-items');


var parsedObject = JSON.parse(retrievedObject);

localStorage.removeItem(parsedObject.items);
// }
// console.log(fn);
// var Rx = require('rxjs/Rx');
// const source = Rx.Observable.from([1, 2, 3, 4, 5]);
// //filter out non-even numbers
// const example = source.filter(num => num % 2 === 0);
// //output: "Even number: 2", "Even number: 4"
// const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));