var mazo = [
    "imgs/La teta.png",
    "imgs/La pezonera.png",
    "imgs/La bolsa recolectora.png",
    "imgs/La grieta.png",
    "imgs/La mastitis.png",
    "imgs/El calostro.png",
    "imgs/La gamaglobulina.png",
    "imgs/Los neutrófilos.png",
    "imgs/El frenillo lingual.png",
    "imgs/El pezón.png",
    "imgs/La areola.png",
    "imgs/El apego.png",
    "imgs/El alojamiento conjunto.png",
    "imgs/Las señales de hambre.png",
    "imgs/Los grupos de apoyo.png",
    "imgs/La lactancia exclusiva.png",
    "imgs/El chupón.png",
    "imgs/El biberón.png",
    "imgs/El agarre.png",
    "imgs/Las señales de alarma.png",
    "imgs/La ictericia.png",
    "imgs/El extractor.png",
    "imgs/El galactogogo.png",
    "imgs/La asesora de lactancia.png",
    "imgs/El pediatra.png",
    "imgs/El hospital amigo.png",
    "imgs/La enfermera de cunas.png",
    "imgs/El trabajo.png",
    "imgs/La guardería.png",
    "imgs/El porteo.png",
    "imgs/El colecho.png",
    "imgs/La ginecóloga.png",
    "imgs/La doula.png",
    "imgs/La sonaja.png",
    "imgs/El cordón umbilical.png",
    "imgs/La placenta.png",
    "imgs/La lata de fórmula.png",
    "imgs/La depre.png",
    "imgs/El cólico.png",
    "imgs/El método canguro.png",
    "imgs/La epidural.png",
    "imgs/El bajo peso.png",
    "imgs/La pelota.png",
    "imgs/El suero glucosado.png",
    "imgs/El destete.png",
    "imgs/La ablactación.png",
    "imgs/Las medicinas.png",
    "imgs/El sueño.png",
    "imgs/El banco de leche.png",
    "imgs/El recíen nacido.png",
    "imgs/El prematuro.png",
    "imgs/Las gemelas.png",
    "imgs/El caballito.png",
    
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
  
      // Obtiene el número de carta sumando 1 al índice de la carta en el array "mazo"
      var numeroCarta = mazo.indexOf(carta.imagen) + 1;
  
      // Crea un elemento de span para mostrar el número de carta
      var numeroCartaElement = document.createElement("span");
      numeroCartaElement.textContent = numeroCarta + ".-";
  
      // Crea un elemento de span para mostrar el título de la carta
      var tituloCarta = document.createElement("span");
      tituloCarta.textContent = carta.titulo;
  
      li.appendChild(img);
      li.appendChild(numeroCartaElement);
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
  
        var img = document.createElement("img");
        img.src = imgSrc;
        img.alt = imgTitle;
        img.addEventListener("click", function () {
          toggleSelectedCard(this);
        });
  
        var title = document.createElement("div");
        title.textContent = imgTitle;
        title.className = "imageTitle";
  
        cell.appendChild(img);
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

    if (selectedCards.includes(imgSrc)) {
        selectedCards = selectedCards.filter(function (src) {
            return src !== imgSrc;
        });
    } else {
        selectedCards.push(imgSrc);
    }
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
shareButton.addEventListener('click', function() {
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