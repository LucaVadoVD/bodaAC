const params = new URLSearchParams(window.location.search);
const invitado = params.get("id");

if(invitado){
document.getElementById("invitado").innerText = "Invitación para: " + invitado;
}

function confirmar(){

let nombre = document.getElementById("nombre").value;
let personas = document.getElementById("personas").value;
let asistencia = document.getElementById("asistencia").value;

let mensaje = `Hola, soy ${nombre}. Confirmo asistencia: ${asistencia}. Personas: ${personas}. Invitado ID: ${invitado}`;

let telefono = "521XXXXXXXXXX";

let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

window.open(url);

}