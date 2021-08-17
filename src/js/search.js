async function getAleatoria() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`); //regresa una promesa
    let data = await response.json(); //regresa el resultado YA NO PROMESA
    return data;
};

async function getCategorias() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`); //regresa una promesa
    let data = await response.json(); //regresa el resultado YA NO PROMESA
    return data;
};

async function getCategoriasLength() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`); //regresa una promesa
    let data = await response.json(); //regresa el resultado YA NO PROMESA
    // Ingresa cantidad de categorias el label del menu
    const label_categorias = document.querySelector('#categories');
    label_categorias.textContent = data.categories.length;
};

export { getAleatoria, getCategorias, getCategoriasLength };