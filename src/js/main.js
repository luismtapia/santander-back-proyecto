import { getAleatoria, getCategorias, getCategoriasLength } from './search';
import { renderAleatoria, renderCategorias } from './render';


// ANIMACIONES DEL MENU MÓVIL
const btn_hamburguesa = document.querySelector('#hamburguesa');
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

btn_buscar.addEventListener("click", (event) => {
    //buscar
});

btn_cerrar.addEventListener("click", (event) => {
    let text_buscar = document.querySelector("#cerrar input");
    text_buscar.value = "";
});

//Receta aleatroria en modal
const btn_aleatoria_computer = document.querySelector('#randomcomputer');
const btn_aleatoria_mobile = document.querySelector('#randommobile');





btn_aleatoria_computer.addEventListener("click", (event) => {
    $('.long.modal').modal('show');
    getAleatoria()
        .then((data)=> {
            renderAleatoria(data)
        })
        .catch(()=>{
            console.log('No hay resultados')
        });
});

btn_aleatoria_mobile.addEventListener("click", (event) => {
    animacion_menu(btn_hamburguesa_cerrar,btn_hamburguesa_bars,200);
    $('#menu').toggle("250", "linear");
    $('.long.modal').modal('show');
    getAleatoria()
        .then((data)=> {
            renderAleatoria(data)
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});

// Categorias
const btn_categorias_computer = document.querySelector('#categoriescomputer');
const btn_categorias_mobile = document.querySelector('#categoriesmobile');

btn_categorias_computer.addEventListener("click", (event) => {
    getCategorias()
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
    getCategorias()
        .then((data)=> {
            renderCategorias(data);
        })
        .catch((error)=>{
            console.log('No hay resultados:', error)
        });
});