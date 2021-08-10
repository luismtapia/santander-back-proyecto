# Propuesta N° 1

## Paleta de colores
| Color | Descripción |
|-------|-------------|
| `#3D271F` | color café: para el fondo y navbar |
| `#4d3412` | color cafe: para contraste |
| `#F7CA15` | color amarillo: |
| `#FBD210` | color amarillo 2:  |
| `#4F6728` | color verde:  |
| `#B95A40` | color naranja:  |
| `#DF8D17` | color naranja 2:  |
| `#FFFFFF` | color blanco: para contraste |
| `#000000` | color negro: para contraste |
| `#63921e` | color verde 2: |
| `#f1e1bf` | color extra: |


## Fonts (@font-face)
* Título: `Cabin Sketch`
* Título: `Gagalin`
* Menú: `Bebas Neue`
* Texto: `Cinzel`
* Texto: `Cinzel Decorate`
* Texto: `Hasmmersith One`

---
## Mobile First
---
[Mockup movil  Ver a detalle](propuesta1/movil-mockup.pdf)
![Movil mockup](propuesta1/movil-mockup.png)

<!-- ![Inicio](propuesta1/movil-inicio.png) -->
<p align="center">
  <img src="propuesta1/movil-inicio.png" alt="inicio" heigth="200px" width="200px">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img src="propuesta1/movil-buscar.png" alt="buscar" heigth="200px" width="200px">
 &nbsp; &nbsp; &nbsp; &nbsp;
 <img src="propuesta1/movil-menu.png" alt="menu" heigth="200px" width="200px">
</p>

<p align="center">
  <img src="propuesta1/movil-hover.png" alt="hover" heigth="200px" width="200px">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img src="propuesta1/movil-detalle.png" alt="detalle" heigth="200px" width="200px">
 &nbsp; &nbsp; &nbsp; &nbsp;
 <img src="propuesta1/movil-footer.png" alt="footer" heigth="200px" width="200px">
</p>

 
 

---

* Al cargar muestra todas las recetas.
* Cuando se da click en buscar, con animación se recorre de derecha a izquierda la lupa y aparece un input, y al final el ícono x para borrar texto del input.
* Cuando se da click en el menú hamburguesa, despliega las opciones; la animación del menú cambia al ícono x.


## Web
### Inicio
![Inicio](propuesta1/web-inicio.png)
Al cargar:
 - Genera una receta aleatoria.
 - Hay un botón en la tarjeta que genera una nueva receta aleatoria.
   - Cuando se haga scroll está el menú aleatorio que muestra una receta aleatoria en modal.

---


### Scrolls
![Scroll](propuesta1/web-scroll1.png)
En hover de una tarjeta:
 - Mostrar los datos.
 - Ocultar la imagen.

---


![Scroll](propuesta1/web-scroll2.png)
En focus buscar:
 - Ocultar aleatoria, todas y categorías, 
 - La lupa con animación se va a la izquierda y aparece el ícono cerrar(propuesta1/x)

---


![Scroll](propuesta1/web-scroll3.png)

### Footers
![Footer](propuesta1/web-footer.png)





## assets
![Fondo 1](propuesta1/fondo1.jpg)
![Fondo 2](propuesta1/fondo2.jpeg)

<br>

## Resumen del API del sitio [TheMealDB](https://www.themealdb.com/) 📄

| # | Target| Link | Use |
| --- | --- | --- | --- |
| 1 | Search meal by name|www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata | Search only meal name |
|2|Get the 25 first meals|www.themealdb.com/api/json/v1/1/search.php?s|Get first 25 recipes|
|3|List all meals by first letter|www.themealdb.com/api/json/v1/1/search.php?f=a|Get all the recipes whose food name begins with the search letter|
|4|Lookup full meal details by id|www.themealdb.com/api/json/v1/1/lookup.php?i=52772|Get recipe by id|
|5|Lookup a single random meal|www.themealdb.com/api/json/v1/1/random.php|Use general for get a single random meal|
|6|List all meal categories|www.themealdb.com/api/json/v1/1/categories.php|Use general for get categories with details|
|7|Latest Meals (only available to $2+ Patreon supporters)|www.themealdb.com/api/json/v1/1/latest.php|
|8|List all Categories|www.themealdb.com/api/json/v1/1/list.php?c=list|Get only name of category|
|9|List all Area|www.themealdb.com/api/json/v1/1/list.php?a=list|Use general for get areas|
|10|List all Ingredients|www.themealdb.com/api/json/v1/1/list.php?i=list|Use for get about 573 ingredients|
|11|Filter by main ingredient|www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast|Use for get recipes by only one ingredient|
|12|Filter by Category|www.themealdb.com/api/json/v1/1/filter.php?c=Seafood|Use for get recipes by Category|
|13|Filter by Area|www.themealdb.com/api/json/v1/1/filter.php?a=Canadian|Use for get recipes by Area
|14|Meal Thumbnail Images|www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview|Add "/preview" to the end of the meal image URL (strMealThumb node).|
|15|Ingredient Thumbnail Images| (www.themealdb.com/images/ingredients/Lime.png/)<br>(www.themealdb.com/images/ingredients/Lime-Small.png) |Mode of obtaining the images of the ingredients|

<br>


# Ir a [Propuesta N° 2](https://github.com/14030598/santander-back-proyecto/tree/desarrollo/src/assets/mockups/propuesta2) 🚀

# Resolución de Propuestas  ☕ 🍺
- Se ha elegido la propuesta No. 1 como el mockup ganador.