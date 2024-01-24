let x, mayor = 0, menor = 100, total = 0, cont = 0, pares = 0, impares = 0;
let array = [];


do {

    x = parseInt(prompt("Introduce número positivo(0 o negativo para acabar): "));

    if (x > 0) {
        array.push(x);
        total += x;
        cont++;
        if (x > mayor)
            mayor = x;
        if (x < menor & x > 0)
            menor = x;
        if (x % 2 == 0)
            pares++;
        if (x % 2 != 0)
            impares++;
    }
} while (x > 0);
media = total / cont;


alert("Lista de números introducidos: " + array +
    "\nNúmeros Pares: " + pares +
    "\nNúmeros Impares: " + impares +
    "\nSuma total: " + total +
    "\nMedia: " + media +
    "\nMayor: " + mayor +
    "\nMenor: " + menor);