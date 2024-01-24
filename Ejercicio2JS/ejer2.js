function esPrimo(a) {

    if (a <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

function esPalindromo(a) {

    
    if (a > 0 && a < 10) {

        return true;

    } else {
        a= a.toString();
        let aInvertida = a.split("").reverse().join("");
        if (a === aInvertida) {

            return true;
        } else {
            return false;
        }

    }
    
}



let X = prompt("Introduce el número X(Se comprobará desde 1 hasta X): ")
let arraydoble = [];
let arraypalindromo = [];
let arrayprimo = [];
for (let i = 0; i < X; i++) {
    let primo = esPrimo(i);
    let palindromo = esPalindromo(i);

    if (primo & palindromo)
        arraydoble.push([i]);
    if (primo)
        arrayprimo.push([i]);
    if (palindromo)
        arraypalindromo.push([i]);

}

alert("Primos: " + arrayprimo+
"\nPalindromos: " + arraypalindromo+
"\nPrimos y Palindromos: " + arraydoble);