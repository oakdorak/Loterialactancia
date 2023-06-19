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
