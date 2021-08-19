import { getRecetaName, getConsulta } from './search';
import { renderAleatoria, renderCategorias, renderRecetas } from './render';

// ONLOAD CARGA ALGUNAS RECETAS
getConsulta('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then((data)=> {
        if(data.meals)
            renderRecetas(data); // LLAMADA A FUNCION QUE RENDERIZA LOS RESULTADOS DE LA CONSULTA
    })
    .catch((error)=>{
        alert(`Fallo la conexion con TheMealAPI`);
        console.log(error);
    });


// ANIMACIONES DEL MENU MÓVIL
const btn_hamburguesa_bars = document.querySelector('#hamburguesa .bars');
const btn_hamburguesa_cerrar = document.querySelector('#hamburguesa .times');
const btn_buscar = document.querySelector('#buscar .search');
const btn_cerrar = document.querySelector('#cerrar .times');

function animacion_menu(mostrar, ocultar, milisegundos) {
    mostrar.classList.add('animate__backOutLeft');
    setTimeout(() => {
        ocultar.classList.remove('animate__backOutLeft');
        mostrar.style.display = "none";
        ocultar.style.display = "block";
        ocultar.classList.add('animate__backInLeft');
    }, milisegundos);
}

btn_hamburguesa_bars.addEventListener("click", (event) => {
    animacion_menu(btn_hamburguesa_bars,btn_hamburguesa_cerrar,200);
});

btn_hamburguesa_cerrar.addEventListener("click", (event) => {
    animacion_menu(btn_hamburguesa_cerrar,btn_hamburguesa_bars,200);
});

btn_cerrar.addEventListener("click", (event) => {
    let text_buscar = document.querySelector("#cerrar input");
    text_buscar.value = "";
});





// MOSTRAR RECETA ALEATORIA EN MODAL
const btn_aleatoria_computer = document.querySelector('#randomcomputer');
const btn_aleatoria_mobile = document.querySelector('#randommobile');

btn_aleatoria_computer.addEventListener("click", (event) => {
    $('.long.modal').modal('show');
    getConsulta('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((data)=> {
            renderAleatoria(data)
        })
        .catch(()=>{
            alert(`Upps algo salio mal por favor contacte a nuestro soporte`);
            console.log('Error', error);
        });
});

btn_aleatoria_mobile.addEventListener("click", (event) => {
    animacion_menu(btn_hamburguesa_cerrar,btn_hamburguesa_bars,200);
    $('#menu').toggle("250", "linear");
    $('.long.modal').modal('show');
    getConsulta('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((data)=> {
            renderAleatoria(data)
        })
        .catch((error)=>{
            alert(`Upps algo salio mal por favor contacte a nuestro soporte`);
            console.log('Error', error);
        });
});



// Categorias
const btn_categorias_computer = document.querySelector('#categoriescomputer');
const btn_categorias_mobile = document.querySelector('#categoriesmobile');

btn_categorias_computer.addEventListener("click", (event) => {
    getConsulta('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((data)=> {
            renderCategorias(data);
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});

btn_categorias_mobile.addEventListener("click", (event) => {
    animacion_menu(btn_hamburguesa_cerrar,btn_hamburguesa_bars,200);
    $('#menu').toggle("250", "linear");
    getConsulta('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((data)=> {
            renderCategorias(data);
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});



// BUSQUEDA DE RECETAS POR BOTON O AL ESCRIBIR
const input_buscar_computer = document.querySelector('#buscarcomputer input');
const btn_buscar_computer = document.querySelector('#buscarcomputer i');
const input_buscar_mobile = document.querySelector('#cerrar input');

btn_buscar_computer.addEventListener("click", (event) => {
    const busqueda = input_buscar_computer.value;
    getRecetaName(busqueda)
        .then((data)=> {
            if(data.meals){
                renderRecetas(data);
            }else{
                alert(`No hay resultados para ${busqueda}`);
            }
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});

input_buscar_computer.addEventListener("keyup", (event) => {
    const busqueda = input_buscar_computer.value;
    getRecetaName(busqueda)
        .then((data)=> {
            if(data.meals){
                renderRecetas(data);
            }else{
                alert(`No hay resultados para ${busqueda}`);
            }
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});


input_buscar_mobile.addEventListener("keyup", (event) => {
    input_buscar_computer.value = "";
    const busqueda = input_buscar_mobile.value;
    getRecetaName(busqueda)
        .then((data)=> {
            if(data.meals){
                renderRecetas(data);
            }else{
                alert(`No hay resultados para ${busqueda}`);
            }
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});