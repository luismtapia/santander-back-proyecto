import detalle from "../detalles.html";

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
    flag.className = `${pais} flag`;
    const a = document.createElement('a');
    a.className = "ui green ok inverted icon button";
    a.textContent = aleatoria.meals[0].strArea;
    a.href = `../detalles.html?id=${aleatoria.meals[0].idMeal}`; //link a detalles
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
        descripction.className = "Ver descripction";

        content.appendChild(header);
        content.appendChild(descripction);
        card.appendChild(content);
        
        const extra = document.createElement('div');
        extra.className = "extra content";
        const author = document.createElement('div');
        author.className = "author";

        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = "Descripción"
        const p = document.createElement('p');
        p.textContent =  categoria.strCategoryDescription;

        details.appendChild(summary);
        details.appendChild(p);
        author.appendChild(details);

        const span = document.createElement('span');
        span.className = "right floated";
        const icono = document.createElement('i');
        icono.className = "comments icon";

        span.appendChild(icono);
        extra.appendChild(span);
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
        const card = document.createElement('div');
        card.className = "ui card";

        // div imagenes
        const image = document.createElement('div');
        image.className = "ui slide masked reveal image";

        const img_visible = document.createElement('img');
        img_visible.src = meal.strMealThumb;
        img_visible.alt = "strMealThumb";
        img_visible.className = "visible content";

        // EN HOVER
        const div_hidden = document.createElement('div');
        div_hidden.className = "ui left aligned grid hidden content";
        const tags = document.createElement('div');
        tags.className = "right aligned sixteen wide column";
        if(meal.strTags){
            const etiquetas = meal.strTags.split(',');
            etiquetas.forEach(tag => {
                const strTag = document.createElement('a');
                strTag.className = "ui yellow mini tag label";
                strTag.textContent = tag;
                tags.appendChild(strTag);
            });
        }

        const ingredientes = document.createElement('div');
        ingredientes.className = "left floated center aligned one column row";
        const column2 = document.createElement('div');
        column2.className = "column";
        column2.textContent = "Ingredientes";

        const lista_ingredientes = document.createElement('div');
        lista_ingredientes.className = "ui list mini sixteen wide column";

        for (let i = 1; i <= 20; i++) {
            const Ingredients = meal[`strIngredient${i}`];
            if(Ingredients){
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
                label.textContent = `${Ingredients}`;
    
                
                content.appendChild(thumb);
                item.appendChild(content);
                checkbox.appendChild(input);
                checkbox.appendChild(label);
                item.appendChild(checkbox);
                lista_ingredientes.appendChild(item);
            }


            



        }

        // div content
        const content = document.createElement('div');
        content.className = "content";
        const a = document.createElement('a');
        a.href = `../detalles.html?id=${meal.idMeal}`;
        a.className = "header";
        a.textContent = meal.strMeal;
        const meta = document.createElement('div');
        meta.className = "meta";
        const span = document.createElement('span');
        span.className = "date";
        span.textContent = meal.strCategory;
        const i = document.createElement('i');
        i.className = "utensil spoon icon";

        // div extra content
        const extra = document.createElement('div');
        extra.className = "extra content";
        const floated = document.createElement('span');
        floated.className = "right floated";
        const area =  meal.strArea;
        const flag = document.createElement('i');
        const pais = banderas.get(meal.strArea);
        flag.className = `${pais} flag`;


        image.appendChild(img_visible);
        div_hidden.appendChild(tags);
        ingredientes.appendChild(column2);
        div_hidden.appendChild(ingredientes);
        div_hidden.appendChild(lista_ingredientes);
        image.appendChild(div_hidden);

        content.appendChild(a);
        span.appendChild(i);
        meta.appendChild(span);
        content.appendChild(meta);
        floated.appendChild(flag);
        floated.append(area);
        extra.appendChild(floated);

        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(extra);
        
        fragmento.appendChild(card);
    });
    
    contenedor_recetas.appendChild(fragmento);

    
}

// Asignacion de area a paises para poder leer las banderas de semantic-ui
const areas = ['American','British','Canadian','Chinese','Croatian','Dutch','Egyptian','French','Greek','Indian','Irish','Italian','Jamaican','Japanese','Kenyan','Malaysian','Mexican','Moroccan','Polish','Portuguese','Russian','Spanish','Thai','Tunisian','Turkish','Unknown','Vietnamese'];
const paises = ['us','gb uk','canada','china','croatia','germany','eg','france','greece','india','ireland','italy','jamaica','japan','kenya','malaysia','mexico','morocco','poland','portugal','russia','es','thailand','tunisia','turkey','mayotte','vn'];
let banderas= new Map();
for (const key in areas)
    banderas.set(areas[key], paises[key]);


export { renderAleatoria, renderCategorias, renderRecetas};