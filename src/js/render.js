
// ESTA FUNCION RENDERIZA(CREA) MODAL CON LA RECETA ALEATORIA
function renderAleatoria(aleatoria) {
    // LECTURA DE COMPONENTES EN DONDE SE RENDERIZARAN LOS RESULTADOS DE API
    const strMeal = document.querySelector('#modalrandom .strMeal');
    const strMealThumb = document.querySelector('#modalrandom .strMealThumb');
    const strCategory = document.querySelector('#modalrandom .strCategory');
    const strIngredients = document.querySelector('#modalrandom .strIngredients');
    strIngredients.innerHTML = "";
    const detalles = document.querySelector('#modalrandom .actions');
    detalles.innerHTML = "";
    const strTags = document.querySelector('#modalrandom .strTags');
    strTags.innerHTML = "";


    // ASIGNACION DE COMPONENTES EN DONDE SE RENDERIZARAN LOS RESULTADOS DE API
    strMeal.textContent = aleatoria.meals[0].strMeal;
    strMealThumb.src = aleatoria.meals[0].strMealThumb;
    strCategory.textContent = aleatoria.meals[0].strCategory;



    // INGREDIENTES Y MEDIDAS
    const meal = aleatoria.meals[0];
    for (let i = 1; i <= 20; i++) {
        const Ingredients = meal[`strIngredient${i}`];
        const Measures = meal[`strMeasure${i}`];

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

    // ACCIONES EN MODAL
    const flag = document.createElement('i');
    const pais = banderas.get(aleatoria.meals[0].strArea);
    flag.className = `${pais} flag strArea`;
    const a = document.createElement('a');
    a.className = "ui green ok inverted icon button";
    a.textContent = aleatoria.meals[0].strArea;
    a.href = `../showDetailRecipeById.html?id=${aleatoria.meals[0].idMeal}`; //arreglar en webpack para integrar cambios de equipo
    const i = document.createElement('i');
    i.className = "external alternate icon";

    a.appendChild(i);
    detalles.appendChild(flag);
    detalles.appendChild(a);


    // TAGS
    if (aleatoria.meals[0].strTags) { //diferente de null
        const tags = aleatoria.meals[0].strTags.split(',');
        tags.forEach(tag => {
            const strTag = document.createElement('a');
            strTag.className = "ui yellow tag label";
            strTag.textContent = tag;
            strTags.appendChild(strTag);
        });
    }
}

// ESTA FUNCION RENDERIZA LAS CARDS DE CATEGORIAS EN UN SECTION EN INDEX
function renderCategorias(categorias) {
    const cargando = document.querySelector('.main.cargando');
    (cargando === null) ? console.log("Solo me imprimo como hack") : cargando.remove();

    //encabezado
    const recetas = document.querySelector('.recetas');
    recetas.style.display = "block";

    const contenedor_recetas = document.querySelector('#recetas');
    contenedor_recetas.innerHTML = "";
    contenedor_recetas.className = "ui container";

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


        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = "Descripción"

        const p = document.createElement('p');
        p.textContent =  categoria.strCategoryDescription;

        summary.appendChild(p);
        details.appendChild(summary);
        descripction.appendChild(details);
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

// si busca o inicio
function renderRecetas(data) {
    console.log(data.meals);
    const fragmento = new DocumentFragment();
    const cargando = document.querySelector('.main.cargando');
    (cargando === null) ? console.log("Solo me imprimo como hack") : cargando.remove();

    //encabezado
    const recetas = document.querySelector('.recetas');
    recetas.style.display = "block";

    const contenedor_recetas = document.querySelector('#recetas');
    contenedor_recetas.innerHTML = "";
    contenedor_recetas.className = "ui container";

    
    // genera las cards para mostrar resultados
    data.meals.forEach(meal => {
        console.log(meal);



        const card = document.createElement('div');
        card.className = "ui card";

        const image = document.createElement('div');
        image.className = "ui slide masked reveal image";

        const img_visible = document.createElement('img');
        img_visible.src = meal.strMealThumb;
        img_visible.alt = "strMealThumb";
        img_visible.className = "visible content";

        const img_hidden = document.createElement('img');
        img_hidden.src = meal.strCategoryThumb;
        img_hidden.alt = "strMealThumb";
        img_hidden.className = "hidden content";

        image.appendChild(img_visible);
        image.appendChild(img_hidden);
        card.appendChild(image);
        fragmento.appendChild(card);
    });
    
    contenedor_recetas.appendChild(fragmento);

    

    // categorias.categories.forEach(categoria => {
    //     const card = document.createElement('div');
    //     card.className = "ui raised link card";

    //     const image = document.createElement('div');
    //     image.className = "image";
    //     const img = document.createElement('img');
    //     img.src = categoria.strCategoryThumb;
    //     img.alt = "strCategoryThumb";
    //     image.appendChild(img);
    //     card.appendChild(image);

    //     const content = document.createElement('div');
    //     content.className = "content";
    //     const header = document.createElement('div');
    //     header.className = "header";
    //     header.textContent = categoria.strCategory;
    //     const descripction = document.createElement('div');
    //     descripction.className = "descripction";


    //     const details = document.createElement('details');
    //     const summary = document.createElement('summary');
    //     summary.textContent = "Descripción"

    //     const p = document.createElement('p');
    //     p.textContent =  categoria.strCategoryDescription;

    //     summary.appendChild(p);
    //     details.appendChild(summary);
    //     descripction.appendChild(details);
    //     content.appendChild(header);
    //     content.appendChild(descripction);
    //     card.appendChild(content);
        
    //     const extra = document.createElement('div');
    //     extra.className = "extra content";
    //     const author = document.createElement('div');
    //     author.className = "author";
    //     author.textContent = "detalles";
    //     extra.appendChild(author);
    //     card.appendChild(extra);

    //     contenedor_recetas.appendChild(card);
    // });
    
}

// Asignacion de area a paises para poder leer las banderas de semantic-ui
const areas = ['American','British','Canadian','Chinese','Croatian','Dutch','Egyptian','French','Greek','Indian','Irish','Italian','Jamaican','Japanese','Kenyan','Malaysian','Mexican','Moroccan','Polish','Portuguese','Russian','Spanish','Thai','Tunisian','Turkish','Unknown','Vietnamese'];
const paises = ['us','gb uk','canada','china','croatia','germany','eg','france','greece','india','ireland','italy','jamaica','japan','kenya','malaysia','mexico','morocco','poland','portugal','russia','es','thailand','tunisia','turkey','mayotte','vn'];
let banderas= new Map();
for (const key in areas)
    banderas.set(areas[key], paises[key]);


export { renderAleatoria, renderCategorias, renderRecetas};