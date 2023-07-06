window.onload = function() {
  var winMessage = document.getElementById("winMessage");
  winMessage.classList.toggle("hidden", !isValidationCompleted);
};

var isValidationCompleted = false;

var mazo = [
    "imgs/1. La teta.png",
    "imgs/2. La pezonera.png",
    "imgs/3. La bolsa recolectora.png",
    "imgs/4. La grieta.png",
    "imgs/5. La mastitis.png",
    "imgs/6. El calostro.png",
    "imgs/7. La gamaglobulina.png",
    "imgs/8. Los neutrófilos.png",
    "imgs/9. La lactosa.png",
    "imgs/10. El frenillo lingual.png",
    "imgs/11. El pezón.png",
    "imgs/12. La areola.png",
    "imgs/13. El apego.png",
    "imgs/14. El alojamiento conjunto.png",
    "imgs/15. Las señales de hambre.png",
    "imgs/16. Los grupos de apoyo.png",
    "imgs/17. La lactancia exclusiva.png",
    "imgs/18. El chupón.png",
    "imgs/19. El biberón.png",
    "imgs/20. El agarre.png",
    "imgs/21. Las señales de alarma.png",
    "imgs/22. La ictericia.png",
    "imgs/23. El extractor.png",
    "imgs/24. El galactogogo.png",
    "imgs/25. La asesora de lactancia.png",
    "imgs/26. El pediatra.png",
    "imgs/27. El hospital amigo.png",
    "imgs/28. La enfermera de cunas.png",
    "imgs/29. El trabajo.png",
    "imgs/30. La guardería.png",
    "imgs/31. El porteo.png",
    "imgs/32. El colecho.png",
    "imgs/33. La ginecóloga.png",
    "imgs/34. La doula.png",
    "imgs/35. La sonaja.png",
    "imgs/36. El cordón umbilical.png",
    "imgs/37. La placenta.png",
    "imgs/38. La lata de fórmula.png",
    "imgs/39. La depre.png",
    "imgs/40. El cólico.png",
    "imgs/41. El método canguro.png",
    "imgs/42. La epidural.png",
    "imgs/43. El bajo peso.png",
    "imgs/44. La pelota.png",
    "imgs/45. El suero glucosado.png",
    "imgs/46. El destete.png",
    "imgs/47. La ablactación.png",
    "imgs/48. Las medicinas.png",
    "imgs/49. El sueño.png",
    "imgs/50. El banco de leche.png",
    "imgs/51. El recíen nacido.png",
    "imgs/52. El prematuro.png",
    "imgs/53. Las gemelas.png",
    "imgs/54. El caballito.png",
    
];

var cartasTomadas = [];
var indiceCartaTomada = 0;

function mezclarMazo() {
    cartasTomadas = [];
    indiceCartaTomada = 0;
    mazo = mezclarArray(mazo);
    alert("¡El mazo ha sido mezclado!");
}

function tomarCarta() {
    var imagenCartaTomada = document.getElementById("cartaTomada");
    var tituloCarta = document.getElementById("tituloCarta");

    if (indiceCartaTomada >= mazo.length) {
        alert("Todas las cartas han sido tomadas. Por favor, mezcla el mazo.");
        return;
    }

    
  imagenCartaTomada.src = mazo[indiceCartaTomada];
  tituloCarta.textContent = obtenerTituloImagen(mazo[indiceCartaTomada]);

  // Almacena la imagen y el título en la lista de cartas tomadas
  cartasTomadas.push({
    imagen: mazo[indiceCartaTomada],
    titulo: obtenerTituloImagen(mazo[indiceCartaTomada])
  });

  indiceCartaTomada++;
  actualizarListaCartasTomadas();
}

function actualizarListaCartasTomadas() {
    var lista = document.getElementById("selectedCardsList");
    lista.innerHTML = ""; // Borra el contenido anterior de la lista
  
    // Crea los elementos de lista para cada carta tomada y los agrega a la lista
    cartasTomadas.forEach(function (carta, index) {
      var li = document.createElement("li");
      var img = document.createElement("img");
      img.src = carta.imagen;
      img.alt = carta.titulo;
  
   
  
      // Crea un elemento de span para mostrar el título de la carta
      var tituloCarta = document.createElement("span");
      tituloCarta.textContent = carta.titulo;
  
      li.appendChild(img);
      li.appendChild(tituloCarta);
      lista.appendChild(li);
    });
  }
  
function mezclarArray(array) {
var indiceActual = array.length;
var valorTemporal, indiceAleatorio;

while (0 !== indiceActual) {
indiceAleatorio = Math.floor(Math.random() * indiceActual);
indiceActual--;

valorTemporal = array[indiceActual];
array[indiceActual] = array[indiceAleatorio];
array[indiceAleatorio] = valorTemporal;
}

return array;
}

function obtenerTituloImagen(rutaImagen) {
var nombreArchivo = rutaImagen.split("/").pop();
var titulo = nombreArchivo.slice(0, nombreArchivo.lastIndexOf("."));

return titulo;
}

var selectedCards = [];

function generateLoteriaTable() {
  var container = document.getElementById("loteriaContainer");
  var table = document.createElement("table");
  var indexArray = getRandomIndexes(mazo.length, 16);

  for (var i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      var cell = document.createElement("td");
      cell.style.width = "25%"; // Añadimos un ancho fijo del 25% a cada celda

      var imgIndex = indexArray[i * 4 + j];
      var imgSrc = mazo[imgIndex];
      var imgTitle = obtenerTituloImagen(imgSrc);

      var imgContainer = document.createElement("div"); // Contenedor para la imagen
      imgContainer.className = "imageContainer";

      var img = document.createElement("img");
      img.src = imgSrc;
      img.alt = imgTitle;
      img.addEventListener("click", function () {
        toggleSelectedCard(this);
      });

      var title = document.createElement("div");
      title.textContent = imgTitle;
      title.className = "imageTitle";

      // Agregar un elemento div para la marca de la celda
      var mark = document.createElement("div");
      mark.className = "mark";

      imgContainer.appendChild(img);
      imgContainer.appendChild(mark); // Agregar la marca al contenedor de la imagen
      cell.appendChild(imgContainer);
      cell.appendChild(title);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.innerHTML = "";
  container.appendChild(table);
}

function toggleSelectedCard(img) {
  img.classList.toggle("selected");
  var imgSrc = img.src;
  var title = img.parentElement.nextElementSibling;

  // Obtener la marca de la celda
  var mark = img.nextElementSibling;

  if (selectedCards.includes(imgSrc)) {
    selectedCards = selectedCards.filter(function (src) {
      return src !== imgSrc;
    });
    title.style.backgroundColor = "#9474b3"; // Restaurar el fondo original
    mark.textContent = ""; // Eliminar la marca
  } else {
    selectedCards.push(imgSrc);
    title.style.backgroundColor = "red"; // Cambiar el fondo del título al hacer clic
    mark.textContent = "X"; // Agregar la marca "X"
    mark.style.color = "red"; // Cambiar el color de la marca a rojo
  } 
  if (selectedCards.length === 16) {
    // Mostrar el mensaje y la alerta
    var winMessage = document.getElementById("winMessage");
    winMessage.classList.remove("hidden");
  }
// Habilitar o deshabilitar el botón de descarga según la validación
    var downloadButton = document.getElementById("downloadButton");
    downloadButton.classList.toggle("hidden", !validateSelection());

// Mostrar la leyenda si todas las cartas están seleccionadas
  var winMessage = document.getElementById("winMessage");
  var isWinner = validateSelection();
  winMessage.classList.toggle("hidden", !isWinner);

  // Mostrar una alerta si todas las cartas están seleccionadas
  if (isWinner) {
    alert("¡¡¡Felicidades!!! Para reclamar tu premio, sigue las instrucciones abajo");
    isValidationCompleted = true;
  }
}
function validateSelection() {
  return selectedCards.length === 16;
}

function getRandomIndexes(max, count) {
    var indexes = [];
    for (var i = 0; i < count; i++) {
        var index;
        do {
            index = Math.floor(Math.random() * max);
        } while (indexes.includes(index));
        indexes.push(index);
    }
    return indexes;
}

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var container = document.getElementById("loteriaContainer");
    var existingTable = document.getElementsByTagName("table")[0];

    if (existingTable) {
        container.removeChild(existingTable);
    }

    // Aquí puedes realizar el envío de la información a tu servidor para almacenar el correo en la base de datos
    console.log("Correo enviado:", email);
    emailInput.value = "";

    generateLoteriaTable();
});

// Agrega el evento click al botón de compartir
downloadButton.addEventListener('click', function() {
  // Obtiene la tabla de imágenes
  var loteriaContainer = document.getElementById('loteriaContainer');

  // Utiliza html2canvas para convertir el contenedor en una imagen PNG
  html2canvas(loteriaContainer).then(function(canvas) {
    // Crea un enlace de descarga con la imagen PNG
    var downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.download = 'tabla_imagenes.png';
    downloadLink.style.display = 'none';

    // Agrega el enlace de descarga al documento y haz clic en él
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});