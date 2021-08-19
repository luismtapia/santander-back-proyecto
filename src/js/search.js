// CONSULTA LAS CATEGORIAS PARA CONTABILIZARLAS
async function getCategoriasLength() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await response.json();
    // Ingresa cantidad de categorias el label del menu (renderizamos de una vez para ahorrar codigo)
    const label_categorias = document.querySelector('#categories');
    label_categorias.textContent = data.categories.length;
};

// CONSULTA CONFORME AL PARAMETRO DE BUSQUEDA
async function getRecetaName(name) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    return await response.json();
};

// CONSULTA CONFORME A LA URL RECIBIDA
const getConsulta = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export { getCategoriasLength, getRecetaName, getConsulta};