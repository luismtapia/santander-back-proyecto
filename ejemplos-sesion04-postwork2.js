/*
Sesion 04 - Postwork 2
Team 4:
- Vicente Barbosa León
- Alicia Flores Flores
- Fabiola Rasgado Celaya
- Luis Manuel Tapia Bautista
- Carlos Ivan Vargas Jiménez

Objetivo:
- Implementar adecuadamente los conceptos vistos hasta el momento para solucionar un problema.

Requisitos:
N/A

Desarrollo:
- Escribir una función chunk que recibe un arreglo y un número entero size. 
- La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.
*/

function chunk(array, size) {
    let long_completos = (array.length / size) >> 0; //Obtener la parte entera de la división 
    let arrayOfArrays = [];
    for (let i = 0; i < array.length; i += size) {
        let pedazo = array.slice(i, i + size);
        arrayOfArrays.push(pedazo);
    }
    return arrayOfArrays;
};

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 4:', chunk(data, 4)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 5:', chunk(data, 5)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 6:', chunk(data, 6)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 7:', chunk(data, 7)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 8:', chunk(data, 8)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 9:', chunk(data, 9)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 10:', chunk(data, 10)) // [[1, 2, 3], [4, 5, 6], [7, 8]]