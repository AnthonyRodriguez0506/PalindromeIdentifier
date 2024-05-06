function esPalindromo(cadena) {
    // Eliminamos los espacios y convertimos todo a minúsculas para evitar errores de comparación
    cadena = cadena.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Creamos una cadena reversa
    var cadenaReversa = cadena.split('').reverse().join('');

    // Comparamos la cadena original con la cadena reversa
    return cadena === cadenaReversa;
}

// Ejemplo de uso
var palabra = "Radar";
if (esPalindromo(palabra)) {
    console.log("'" + palabra + "' es un palíndromo.");
} else {
    console.log("'" + palabra + "' no es un palíndromo.");
}