var mazo = [
    "imgs/La teta.png",
    "imgs/La grieta.png",
    "imgs/La bolsa recolectora.png",
    "imgs/La pezonera.png",
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
    indiceCartaTomada++;
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
            var imgIndex = indexArray[i * 4 + j];
            var imgSrc = mazo[imgIndex];

            var img = document.createElement("img");
            img.src = imgSrc;
            img.addEventListener("click", function () {
                toggleSelectedCard(this);
            });

            cell.appendChild(img);
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

// Obtén una referencia a la tabla
var table = document.getElementById("loteriaTable");

// Genera las celdas de la tabla y agrega el evento de clic
for (var i = 0; i < 16; i++) {
  // Crea una nueva celda (td)
  var cell = document.createElement("td");

  // Agrega una imagen a la celda
  var img = document.createElement("img");
  img.src = mazo[i];
  cell.appendChild(img);

  // Agrega el evento de clic a la celda
  cell.addEventListener("click", function() {
    // Marca o desmarca la celda al hacer clic
    this.classList.toggle("marked");
  });

  // Agrega la celda a la fila de la tabla
  table.appendChild(cell);
}