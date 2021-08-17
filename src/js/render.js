// import { getAleatoria, getCategorias } from './search'
//borrar impor ?

function renderAleatoria(aleatoria) {
    const modal = document.querySelector('#modalrandom');
    const strMeal = document.querySelector('#modalrandom .strMeal');
    strMeal.textContent = aleatoria.meals[0].strMeal;
    const strMealThumb = document.querySelector('#modalrandom .strMealThumb');
    strMealThumb.src = aleatoria.meals[0].strMealThumb;
    const strCategory = document.querySelector('#modalrandom .strCategory');
    strCategory.textContent = aleatoria.meals[0].strCategory;


    const strIngredients = document.querySelector('#modalrandom .strIngredients');
    // console.log("aleatoria",aleatoria.meals[0]);
    const meal = aleatoria.meals[0];
    console.log("meal", meal);
    strIngredients.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        const Ingredients = meal[`strIngredient${i}`];
        const Measures = meal[`strMeasure${i}`];
        console.log(Ingredients);
        if (Ingredients === null || Ingredients === "") {
            console.log("No hay ingredientes");
        }else{
            const item = document.createElement('a');
            item.className = "item";

            const content = document.createElement('div');
            content.className = "right floated content";
            const thumb = document.createElement('img');
            thumb.className = "ui avatar image strIngredientThumb";
            thumb.src = `https://www.themealdb.com/images/ingredients/${Ingredients}-Small.png`;
            const checkbox = document.createElement('div');
            checkbox.className = "ui checkbox";
            const input = document.createElement('input');
            input.type = "checkbox";
            const label = document.createElement('label');
            label.className = "strIngredient";
            label.textContent = `${Measures} - ${Ingredients}`;

            
            content.appendChild(thumb);
            item.appendChild(content);
            checkbox.appendChild(input);
            checkbox.appendChild(label);
            item.appendChild(checkbox);
            strIngredients.appendChild(item);
        }
    }

    const detalles = document.querySelector('#modalrandom .actions');
    detalles.innerHTML = "";
    const flag = document.createElement('i');
    flag.className = "france flag strArea";

    const a = document.createElement('a');
    a.className = "ui green ok inverted icon button";
    a.textContent = aleatoria.meals[0].strArea;
    a.href = `../showDetailRecipeById.html?id=${aleatoria.meals[0].idMeal}`;
    const i = document.createElement('i');
    i.className = "external alternate icon";

    //bandera


    a.appendChild(i);
    detalles.appendChild(flag);
    detalles.appendChild(a);



    const strTags = document.querySelector('#modalrandom .strTags');
    strTags.innerHTML = "";
    const tags = aleatoria.meals[0].strTags.split(',');
    if (tags != null && tags != "") {
        tags.forEach(tag => {
            const strTag = document.createElement('a');
            strTag.className = "ui yellow tag label";
            strTag.textContent = tag;
            strTags.appendChild(strTag);
        });
    }

    
    
    // console.log(aleatoria);
}

function renderCategorias(categorias) {
    console.log(categorias.categories);
    const cargando = document.querySelector('.main.cargando');
    if (cargando === null) {
        
    }else{
        cargando.remove();
    }
    

    //encabezado
    const recetas = document.querySelector('.recetas');
    
    recetas.style.display = "block";
    // recetas.style.height = "unset";

    const contenedor_recetas = document.querySelector('#recetas');
    contenedor_recetas.innerHTML = "";
    // const main = document.createElement('section');
    contenedor_recetas.className = "ui container";
    // contenedor_recetas.appendChild(main);

    categorias.categories.forEach(categoria => {
        const card = document.createElement('div');
        card.className = "ui raised link card";

        const image = document.createElement('div');
        image.className = "image";
        const img = document.createElement('img');
        img.src = categoria.strCategoryThumb;
        img.alt = "strCategoryThumb";
        image.appendChild(img);
        card.appendChild(image);

        const content = document.createElement('div');
        content.className = "content";
        const header = document.createElement('div');
        header.className = "header";
        header.textContent = categoria.strCategory;
        const descripction = document.createElement('div');
        descripction.className = "descripction";
        const p = document.createElement('p');
        p.textContent =  categoria.strCategoryDescription;
        descripction.appendChild(p);
        content.appendChild(header);
        content.appendChild(descripction);
        card.appendChild(content);
        
        const extra = document.createElement('div');
        extra.className = "extra content";
        const author = document.createElement('div');
        author.className = "author";
        author.textContent = "detalles";
        extra.appendChild(author);
        card.appendChild(extra);

        contenedor_recetas.appendChild(card);
    });
}

export { renderAleatoria, renderCategorias };