var Rx = require('rxjs/Rx');
import { style } from './style.js';
import { call } from './func_call.js';

Rx.Observable.fromEvent(document.getElementById('inp'), 'keyup').debounceTime(500)
    .subscribe(e => {

        fetch('https://pokeapi.co/api/v2/pokemon/' +
                document.getElementById('inp').value + '/'
            )
            .then(function(response) {
                response.json().then(function(data) {
                        console.log(data);
                        call(data);
                    })
                    .catch(function(error) {
                        document.getElementById('img').innerHTML = '<h1>Please enter a correct Pokemon name or Pokemon Id</h1>';
                        document.getElementById('tbl').innerHTML = '';
                    })
            });
    });