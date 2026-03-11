const API_URL = "https://script.google.com/macros/s/AKfycbx8MUyjmXC6k-57sR9spu-FRsyoX26cfeH3nxtcZKCWRMBP5sSCVNBRMDriYNEq-v7k/exec";

const params = new URLSearchParams(window.location.search);
const invitado = params.get("id");

if(invitado){
document.getElementById("invitado").innerText =
"Invitación para: " + invitado;
}

function confirmar(){

let nombre = document.getElementById("nombre").value;
let personas = document.getElementById("personas").value;
let asistencia = document.getElementById("asistencia").value;

if(!nombre || !asistencia){
alert("Por favor completa los campos.");
return;
}

fetch(API_URL,{
method:"POST",
body:JSON.stringify({
invitado:invitado,
nombre:nombre,
personas:personas,
asistencia:asistencia
})
})
.then(res=>res.json())
.then(data=>{

alert("Confirmación enviada ❤️");

let telefono="521XXXXXXXXXX";

let mensaje=`Hola, soy ${nombre}. Confirmo asistencia: ${asistencia}. Personas: ${personas}`;

let url=`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

window.open(url);

})
.catch(()=>{
alert("Error enviando confirmación");
});

}

const fechaBoda = new Date("April 11, 2026 18:00:00").getTime();

setInterval(()=>{

let ahora = new Date().getTime();
let distancia = fechaBoda - ahora;

let dias = Math.floor(distancia / (1000*60*60*24));

let contador = document.getElementById("contador");

if(contador){
contador.innerText = "Faltan " + dias + " días para la boda 💍";
}

},1000);