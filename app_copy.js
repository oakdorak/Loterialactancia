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
  "imgs/El caballito.png"
];

var cartasTomadas = [];
var indiceCartaTomada = 0;

// Obtener referencias a los botones
var botonMezclar = document.getElementById("botonMezclar");
var botonTomar = document.getElementById("botonTomar");

// Agregar eventos de clic a los botones
botonMezclar.addEventListener("click", mezclarMazo);
botonTomar.addEventListener("click", tomarCarta);

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
    indiceCartaTomada++;

    updateSelectedCardsList();
}

function updateSelectedCardsList() {
    var listContainer = document.getElementById("selectedCardsList");
    listContainer.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Recorrer las cartas seleccionadas y crear elementos <li> para cada una
    selectedCards.forEach(function (imgSrc, index) {
        var listItem = document.createElement("li");
        var cardNumber = mazo.indexOf(imgSrc) + 1; // Obtener el número de la carta

        // Crear una imagen pequeña para mostrar la carta
        var cardImage = document.createElement("img");
        cardImage.src = imgSrc;
        cardImage.alt = "Carta " + cardNumber;

        // Crear un elemento de texto para mostrar el número y el título de la carta
        var cardInfo = document.createElement("span");
        cardInfo.textContent = "Carta " + cardNumber + ": " + obtenerTituloImagen(imgSrc);

        // Agregar la imagen y el texto al elemento <li>
        listItem.appendChild(cardImage);
        listItem.appendChild(cardInfo);

        // Agregar el elemento <li> a la lista
        listContainer.appendChild(listItem);
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

function toggleSelectedCard(img) {
    var imgSrc = img.src;

    // Si la carta ya está seleccionada, se elimina de la lista
    if (selectedCards.includes(imgSrc)) {
        var index = selectedCards.indexOf(imgSrc);
        selectedCards.splice(index, 1);
    } else {
        // Si no está seleccionada, se agrega a la lista
        selectedCards.push(imgSrc);
    }

    updateSelectedCardsList();
}

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

generateLoteriaTable();