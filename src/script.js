const card = document.getElementById('carta');
const texdato = document.getElementById("letra").textContent;
console.log(texdato);

const ComidaLetra = async (text) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=`+texdato);
    return await response.json();
}

(async () => {
    const data = await ComidaLetra('b')
    Comida(data.meals)
})()

function Comida(data) {
    console.log(data);
    data.forEach(element => {
        const carta = document.createElement('div');
        carta.className = 'card';

        
        const cardDivImagen = document.createElement('a')
        cardDivImagen.className = 'image'
        cardDivImagen.href = element.strMealThumb
        const cardImagen = document.createElement('img')
        cardImagen.src = element.strMealThumb;
        cardImagen.alt = element.strMeal;
        cardDivImagen.appendChild(cardImagen);

        const cardContenido = document.createElement('div')
        cardContenido.className = 'content'
        const cardHeader = document.createElement('div')
        cardHeader.className = 'header'
        const cardHeaderTexto = document.createTextNode(element.strMeal);
        cardHeader.appendChild(cardHeaderTexto);

        const metaMeal = document.createElement('div')
        metaMeal.className="meta"
        const metaMealCategoria = document.createElement('p')
        const Categoria = document.createTextNode("Categoria: "+element.strCategory);
        metaMealCategoria.appendChild(Categoria);
        metaMeal.appendChild(metaMealCategoria)
        
        const metaMealArea = document.createElement('div')
        metaMealArea.className="meta"
        const metaMealCategoriaArea = document.createElement('p')
        const CategoriaArea = document.createTextNode("Area: "+element.strArea);
        metaMealCategoriaArea.appendChild(CategoriaArea);
        metaMealArea.appendChild(metaMealCategoriaArea)
        
        const botton = document.createElement('div')
        botton.className=("ui primary button")
        bottonPlay = document.createElement("a")
        bottonPlay.href = element.strYoutube
        bottonPlayIcono = document.createElement("i")
        bottonPlayIcono.className="play icon"
        const bottonTexto =document.createTextNode("Ver Video")
        bottonPlay.appendChild(bottonPlayIcono)
        botton.appendChild(bottonPlay)
        botton.appendChild(bottonTexto)

        cardContenido.appendChild(cardHeader);
        cardContenido.appendChild(metaMeal)
        cardContenido.appendChild(metaMealArea)
        cardContenido.appendChild(botton)
        cardDivImagen.appendChild(cardImagen);
        carta.appendChild(cardDivImagen);
        carta.appendChild(cardContenido);
        card.appendChild(carta)
    });
  
}

$('.trigger.example .accordion')
  .accordion({
    selector: {
      trigger: '.title .icon'
    }
  })