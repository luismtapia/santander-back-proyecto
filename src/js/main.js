const btn_buscar = document.querySelector('#buscar .search');
const text_buscar = document.querySelector('.left.input');
const titulo = document.querySelector('h2.item');
const cerrar = document.querySelector('#buscar .times');
console.log(btn_buscar);

btn_buscar.addEventListener("click", (event) => {
    text_buscar.style.display = "block";
    cerrar.style.display = "block";
    titulo.style.display = "none";
    btn_buscar.style.display = "none";
    
});

cerrar.addEventListener("click", (event) => {
    text_buscar.style.display = "none";
    cerrar.style.display = "none";
    titulo.style.display = "block";
    btn_buscar.style.display = "block";
    
});