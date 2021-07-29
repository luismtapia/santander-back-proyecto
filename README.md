# santander-back-js
Proyecto de js en backend, para consumir FreeMealApi


- [X] Postwork 4
> Funciones

[deepEqual](https://github.com/14030598/santander-back-proyecto/blob/master/ejercicio1.js)
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



    - chunk()
    - frequency()

- [ ] Postwork 8
    - [ ] Mostrar en la UI un input para ingresar texto y un botón para generar la búsqueda.
    - [ ] Utilizar la siguiente API para obtener los resultados: TheMealDB
    - [ ] Mostrar los resultados usando las imágenes de las recetas.
    - [ ] Al seleccionar una imagen se deben desplegar los detalles de la receta, es decir, los ingredientes y las instrucciones.
    - [ ] Mostrar en la UI un botón secundario para desplegar una receta aleatoria.

Esta es la primera parte de ese proyecto y consiste en dejar listo el ambiente de desarrollo:

- [ ] Desarrolla los mockups de la aplicación, esto te permitirá visualizar cómo se van a acomodar todos los elementos mucho antes de crear el código. Es parte fundamental en el desarrollo del software.
- [ ] Instalar y configurar Webpack, Babel y Webpack Dev Server.
- [ ] Instalar las librerías que se vayan a utilizar (Bootstrap, Materialize, Foundation, etc.).
- [ ] Configurar los loaders necesarios para los estilos, se puede utilizar CSS o SASS.

