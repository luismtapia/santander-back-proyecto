function getRecipeRandom() {
    //Por defecto, esta la busqueda por random
    getRecipeByValue(1, 0);
}

function getRecipeByValue(value, id) {
    //Por defecto, esta la busqueda por random
    console.log("getRecipeByValue-value", value);
    console.log("getRecipeByValue-id", id);
    let api = "https://www.themealdb.com/api/json/v1/1/random.php";
    if (value == 1) { //receta random
        api = "https://www.themealdb.com/api/json/v1/1/random.php";
    } else if (value == 2) { //receta por id
        if (id === null || id === "") {
            id = "52772";
        }
        api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    console.log(api)
    fetch(api)
        .then(res => res.json())
        .then(function(data) {
            const recipe = data.meals;
            console.log(recipe[0]);
            /*
            Valores a obtener
            idMeal
            strMeal
            strCategory
            strArea
            strInstructions
            strMealThumb
            strTags
            strYoutube
            strIngredient1
            strMeasure1
            */
            const row = document.getElementsByClassName('pusher');
            /*
            <div class="ui vertical stripe quote segment">
                <div class="ui fixed borderless brown inverted big menu">
                    <div class="ui icon" style="display: flex; align-items: center;">
                        <a class="ui header" href="javascript: history.back()">
                            <i class="arrow yellow left icon big"></i>
                        </a>
                    </div>
                    <h2 class="ui yellow header item">RECETA</h2>
                </div>
            </div>
            <div class="ui vertical stripe quote segment">
            </div>
            */
            let div2 = document.createElement('div');
            div2.className = "ui vertical stripe quote segment";
            let div3 = document.createElement('div');
            div3.className = "ui fixed borderless brown inverted big menu";
            let div4 = document.createElement('div');
            div4.className = "ui icon";
            div4.style = "display: flex; align-items: center;";
            let div = document.createElement("a");
            div.className = "ui header";
            div.setAttribute("href", "javascript: history.back()");
            const divicon = document.createElement("i");
            divicon.className = "arrow yellow left icon big";
            div.appendChild(divicon);
            div4.appendChild(div);
            div3.appendChild(div4);
            div2.appendChild(div3);

            let div5 = document.createElement('h2');
            div5.className = "ui yellow header item";
            let leyenda = ((value == 1) ? "RECETA ALEATORIA" : "RECETA");
            let text = document.createTextNode(leyenda);
            div5.appendChild(text);
            div3.appendChild(div5);
            div2.appendChild(div3);
            row[0].appendChild(div2);
            div2 = document.createElement('div');
            div2.className = "ui vertical stripe quote segment";
            row[0].appendChild(div2);

            /*
            <div class="ui vertical stripe quote segment">
            <div class="ui equal width stackable internally celled grid">
                <div class="center aligned row">
                    <div class="column">
            */
            div2 = document.createElement('div');
            div2.className = "ui vertical stripe quote segment";
            div3 = document.createElement('div');
            div3.className = "ui equal width stackable internally celled grid";
            div4 = document.createElement('div');
            div4.className = "center aligned row";
            div5 = document.createElement('div');
            div5.className = "column";
            //<h3> Spaghetti Bolognese < /h3>
            div = document.createElement('h2');
            text = document.createTextNode(recipe[0].strMeal);
            div.appendChild(text);
            div5.appendChild(div);
            // <p>Category: Beef</p>
            div = document.createElement('p');
            text = document.createTextNode(`Category: ${recipe[0].strCategory}`);
            div.appendChild(text);
            div5.appendChild(div);
            // <p>Area: Italian</p>
            div = document.createElement('p')
            text = document.createTextNode(`Area: ${recipe[0].strArea}`)
            div.appendChild(text)
            div5.appendChild(div)
                //<p>Tags: Pasta,Meat</p>
            div = document.createElement('p');
            text = document.createTextNode(`Tags: ${recipe[0].strTags==null?"-":recipe[0].strTags}`);
            div.appendChild(text);
            div5.appendChild(div);
            //Imagen de la receta
            div = document.createElement('p')
            let img = document.createElement('img');
            img.setAttribute("src", recipe[0].strMealThumb);
            img.className = "ui centered large _fluid _circular image";
            div.appendChild(img)
            div5.appendChild(div)
                //Cerrar fin primer bloque
            div4.appendChild(div5);
            //Inicia segunda columna para ingrendientes y medidas
            div5 = document.createElement('div');
            div5.className = "column";
            div = document.createElement('h2');
            text = document.createTextNode("Ingredients:");
            div.appendChild(text);
            div5.appendChild(div);
            //Listado de ingredientes
            let div6 = document.createElement('div');
            div6.className = "ui left aligned container";
            let div7 = document.createElement('div');
            div7.className = "ui massive middle aligned divided list";
            //iteracion de cada ingrediente
            receta = recipe[0];
            for (let i = 1; i <= 20; i++) {
                //<div class="item">
                const ingrediente = receta[`strIngredient${i}`];
                if (ingrediente != null && ingrediente != "") {
                    const item = document.createElement('div');
                    item.className = "item";
                    img = document.createElement('img');
                    let url_ingrediente = `https://www.themealdb.com/images/ingredients/${ingrediente}-Small.png`;
                    img.setAttribute("src", url_ingrediente);
                    img.className = "ui avatar image";
                    item.appendChild(img);
                    //<div class="content" style="font-size: 14px;">
                    const content = document.createElement('div');
                    content.className = "content";
                    content.style = "font-size: 14px;";
                    // <a class="header">Onions</a>
                    // <div class="description">1tsp</div>
                    div = document.createElement('a');
                    div.className = "header";
                    text = document.createTextNode(ingrediente);
                    div.appendChild(text);
                    content.appendChild(div);

                    div = document.createElement('div');
                    div.className = "description";
                    text = document.createTextNode(receta[`strMeasure${i}`]);
                    div.appendChild(text);
                    content.appendChild(div);
                    item.appendChild(content);
                    div7.appendChild(item);
                }
            }

            div6.appendChild(div7);
            div5.appendChild(div6);

            //Cerrar fin segundo bloque
            div4.appendChild(div5);

            div3.appendChild(div4);
            div2.appendChild(div3);

            /*
            <div class="ui basic segment">
            </div>
            */
            div = document.createElement('div');
            div.className = "ui segment";
            div2.appendChild(div);

            //Inicio bloque de instrucciones
            let div8 = document.createElement('div');
            div8.className = "ui container";
            div = document.createElement('h2');
            text = document.createTextNode("Instructions:");
            div.appendChild(text);
            div8.appendChild(div);
            let div9 = document.createElement('div');
            div9.className = "ui vertical segment";
            let div10 = document.createElement('div');
            div10.className = "ui vertical steps";
            //Separar las instrucciones
            instrucciones = recipe[0].strInstructions;
            separador = ".";
            console.log("instrucciones", instrucciones);
            if (instrucciones != null && instrucciones != "") {
                arrayInstrucciones = instrucciones.split(separador);
            } else {
                instrucciones[0] = "No hay instrucciones."
            }
            let j = 1;
            for (inst of arrayInstrucciones) {
                if (inst != null && inst != "" && inst.trim().length > 2) {
                    const item = document.createElement('div');
                    item.className = "completed step";
                    div = document.createElement('i');
                    div.className = "code icon";
                    item.appendChild(div);
                    const content = document.createElement("div");
                    content.className = "content";
                    div = document.createElement('div');
                    div.className = "title";
                    text = document.createTextNode(j);
                    div.appendChild(text);
                    content.appendChild(div);
                    div = document.createElement('div');
                    div.className = "description";
                    text = document.createTextNode(`${inst.trim()}.`);
                    div.appendChild(text);
                    content.appendChild(div);
                    item.appendChild(content);
                    div10.appendChild(item);
                    j++;
                }
            }
            /*
            <div class="ui container">
                <h2>Instrucciones:</h2>
                <div class="ui vertical segment">
                    <div class="ui vertical steps">
                        <!-- 1 -->
                        <div class="completed step">
                            <i class="code icon"></i>
                            <div class="content">
                                <div class="title">1</div>
                                <div class="description">
                                    Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.
                                </div>
                            </div>
                        </div>
                        <!--fin 1-->
                    </div>
                </div>
            </div>
            */
            div9.appendChild(div10);
            div8.appendChild(div9);
            div2.appendChild(div8);
            //Sección del video
            /*
 
                       <div class="ui tab" data-tab="video">
                           <div class="url video">
                               <div class="ui embed" 
                               data-url="https://www.youtube.com/embed/45dpOfESxr8" 
                               data-placeholder="https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg">
                               </div>
                           </div>
                       </div>

            */
            let url_youtube = "https://www.youtube.com/embed/";
            if (recipe[0].strYoutube != null && recipe[0].strYoutube != "") {
                arrLinkYoutube = recipe[0].strYoutube.split("=");
                if (arrLinkYoutube.length > 1) {
                    url_youtube = url_youtube.concat(arrLinkYoutube[1]);
                } else {
                    url_youtube = "";
                }
            } else {
                url_youtube = "";
            }
            div8 = document.createElement('div');
            div8.className = "ui container";
            div = document.createElement('h2');
            if (url_youtube == "")
                text = document.createTextNode("Sorry... There isn't video.");
            else
                text = document.createTextNode("Do you want to watch the video of this recipe?");
            div.appendChild(text);
            div8.appendChild(div);
            div9 = document.createElement('div');
            div9.className = "ui vertical segment";
            div10 = document.createElement('div');
            div10.className = "ui container grid";
            console.log("url_youtube", url_youtube);
            if (url_youtube != "") {
                let div11 = document.createElement("div");
                div11.className = "computer only row";
                div = document.createElement("iframe");
                div.setAttribute("src", url_youtube);
                div.setAttribute("title", "YouTube video player");
                div.setAttribute("frameborder", "0");
                div.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen");
                div.style.width = "560px";
                div.style.height = "315px";
                div11.appendChild(div);
                div10.appendChild(div11);
                let div12 = document.createElement("div");
                div12.className = "tablet mobile only row";
                div = document.createElement("iframe");
                div.setAttribute("src", url_youtube);
                div.setAttribute("title", "YouTube video player");
                div.setAttribute("frameborder", "0");
                div.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen");
                div12.appendChild(div);
                div10.appendChild(div12);
            }
            div9.appendChild(div10);
            div8.appendChild(div9);
            div2.appendChild(div8);

            /*
            <div class="ui container">
                <h2>Do you want to watch the video of this recipe?</h2>
                <div class="ui vertical segment">
                    <div class="ui container grid">
                        <div class="computer only row">
 
                        <iframe width="560" height="315" 
                            
                            src="https://www.youtube.com/embed/-gF8d-fitkU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="tablet mobile only row">
                            <iframe 
                            src="https://www.youtube.com/embed/-gF8d-fitkU" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            */
            //Final de divs
            row[0].appendChild(div2);

        })

}