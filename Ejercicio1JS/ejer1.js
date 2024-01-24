

let cadena;
let patron;
let patrones;
patrones = ["AA", "BCA", "RBT", "JT"];

cadena = prompt("Indroduce cadena de texto a verificar: ");


function encontrarPatron(cadena, patron){

	cadena = cadena.toUpperCase();
	let contador = 0;
    let x = cadena.indexOf(patron);

    while (x !== -1) {
        contador++;
        x = cadena.indexOf(patron, x + 1);
    }

    return contador;
}




function totalPatrones(cadena, arrayPatrones){

	let total = 0;

	for (let i = 0; i < arrayPatrones.length; i++) {
		total += encontrarPatron(cadena, patrones[i]);
	}

	return total;
}

let resultado;
resultado = totalPatrones(cadena, patrones)


console.log("Cadena introducida: " + cadena);
console.log("Patrones a buscar: AA,BCA,RBT,JT");
console.log("Aparecen: " + resultado);
