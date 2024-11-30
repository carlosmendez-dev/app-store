// Importa los estilos CSS para la página
import "./style.css";

// Importa los íconos de Bootstrap, usados para agregar iconos fácilmente en la interfaz
import "bootstrap-icons/font/bootstrap-icons.css";

// Importa la librería 'axios' para hacer solicitudes HTTP
import axios from "axios";

// La función principal que se ejecuta cuando el contenido de la página ha sido cargado completamente
function main() {
  // Obtiene el elemento en el DOM con el ID 'app', que es donde vamos a agregar los productos
  let app = document.getElementById("app");

  // Usamos 'axios' para hacer una solicitud GET al API de productos (fakestoreapi)
  // 'axios.get()' devuelve una promesa, que se resuelve con la respuesta del servidor
  axios.get("https://fakestoreapi.com/products")
    .then((response) => { // El método '.then()' maneja la respuesta exitosa de la promesa
      // 'response.data' es el arreglo de productos que llega desde el API
      const products = response.data;

      // Usamos el método '.forEach()' para iterar sobre todos los productos
      products.forEach((product) => {
        // Creamos un nuevo elemento 'div' para representar una tarjeta de producto
        let card = document.createElement("div");

        // Le asignamos clases de estilo a la tarjeta para definir su aspecto
        card.className = "bg-slate-50 w-[400px] border p-2";

        // Creamos un nuevo elemento 'img' para mostrar la imagen del producto
        let img = document.createElement("img");

        // Asignamos la fuente de la imagen del producto, proveniente del objeto 'product'
        img.src = product.image;

        // Creamos un nuevo elemento 'h1' para mostrar el título del producto
        let card_title = document.createElement("h1");

        // Le asignamos una clase para estilizar el título (como tamaño de fuente)
        card_title.className = "text-xl";

        // Asignamos el texto del título del producto, que es el nombre del producto
        card_title.innerText = product.title;

        // Creamos un nuevo elemento 'p' para mostrar el precio del producto
        let etiqueta_precio = document.createElement("p");

        // Asignamos el precio al contenido del párrafo
        etiqueta_precio.innerText = product.price;

        // Asignamos una clase para dar formato al precio (en negrita y de color verde)
        etiqueta_precio.className = "font-bold text-green-600";

        // Creamos un nuevo elemento 'p' para mostrar la categoría del producto
        let etiqueta_categoria = document.createElement("p");

        // Asignamos una clase para darle formato a la categoría
        etiqueta_categoria.className = "text-sm text-gray-500";

        // Asignamos el texto de la categoría del producto
        etiqueta_categoria.innerText = product.category;

        // Creamos un botón para que el usuario pueda "comprar" el producto
        let btn = document.createElement("button");

        // Le damos texto al botón para que diga "Comprar"
        btn.innerText = "Comprar";

        // Asignamos una clase de estilo al botón para que se vea atractivo
        btn.className = "bg-indigo-500 text-white p-2";

        // Añadimos los elementos creados a la tarjeta 'card'
        card.appendChild(img);           // Agregamos la imagen
        card.appendChild(card_title);    // Agregamos el título
        card.appendChild(etiqueta_categoria);  // Agregamos la categoría
        card.appendChild(etiqueta_precio);    // Agregamos el precio
        card.appendChild(btn);           // Agregamos el botón

        // Finalmente, agregamos la tarjeta completa al elemento 'app' de la página
        app.appendChild(card);
      });
    }) // Aquí termina el bloque '.then()', que maneja la respuesta exitosa de la solicitud
    .catch((error) => {  // '.catch()' maneja los posibles errores que puedan ocurrir al hacer la solicitud
      console.log("Error al obtener los productos: ", error);  // Si hay un error, lo mostramos en la consola
    });
}

// Esta línea asegura que la función 'main' se ejecute una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", main);
