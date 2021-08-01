# Funciones
Implementar adecuadamente los conceptos vistos hasta el momento para solucionar un problema.

### **Deep Equal:**
Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.

```
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof (a) == 'object' && typeof (b) == 'object') {
        for (var x in a) {
            if (deepEqual(a[x], b[x]) == false) {
                return false
            }
        }
        return true;
    }
    return false;
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('E1 Test 1:', deepEqual(1, 1)) // true
console.log('E1 Test 2:', deepEqual(1, '1')) // false
console.log('E1 Test 3:', deepEqual(john, john)) // true
console.log('E1 Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('E1 Test 5:', deepEqual(john, { firstName: 'John' })) // false
```


### **Chunk:**
Escribir una función chunk que recibe un arreglo y un número entero size. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.

```
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
```


### **Frequency:**
Escribir una función frequency que recibe un string como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. Los resultados deben ordenarse de manera ascendente por los caracteres y no la frecuencia.

```
function frequency (string){
    let array = string.split("").sort();
    let obj = {};
    for(let i=0; i<array.length; i++){
        if (obj[array[i]]==undefined){
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++;
        }
    }
    return obj
}

console.log('Test 1:', frequency('cccbbbaaa')) // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org')) // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com')) // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 4:', frequency('Programar en JavaScript es divertido'))
```


variantes: 

chunk
```
// Xn = A[Sn ... Sn+size]
// Sn=S+size
function chunk(array, size) {
    let X=[];
    let S = size;
    for (let n = 0; n < array.length; n+=size) {
        X.push(array.slice(n,S));
        S += size;
    }
    return X;
};
```

frequency
```
const frequency = (cadena) =>{
    const frecuencia={};
    const array = cadena.split("").sort();
    array.forEach(item => {
        frecuencia[item] = frecuencia[item] >= 1 ? frecuencia[item]+1 : 1;
    });
    return frecuencia;
}
```