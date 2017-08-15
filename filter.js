
var lista = [1, 2, 3];
var callback = function(item) { 
	return item === 2 };

var lista = [{key: 'hello', value: 'world'}, {key: 'laiva', value: 'silja line'}];
var callback = function(item) { return item.key === 'laiva' };

function filter(lista, callback) {
	var newLista = [];
	for(i = 0; i < lista.length; i++) {
		console.log("\ni: " + i);
		console.log("callback(i): " + callback(lista[i]));
		console.log("lista[i]: " , lista[i]);

		if(callback(lista[i]) == true) {
			newLista.push(lista[i]);
		}
	}
	console.log("\nnewLista: " , newLista);
	return newLista;
}

var filtteroityLista = filter(lista, callback);
console.log("\nlista: " , lista);
console.log("filtteroityLista: " , filtteroityLista);

/*Tai...

const lista = [1, 2, 3];
const callback = function(item) { return item === 2 };
const filtteroityLista = filter(lista, callback);

Tai...

const lista = [{key: 'hello', value: 'world'}, {key: 'laiva', value:
'silja line'}];
const callback = function(item) { return item.key === 'laiva' };
const filtteroityLista = filter(lista, callback);
*/
