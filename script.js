const params = new URLSearchParams(window.location.search);
const invitado = params.get("id");

if(invitado){
document.getElementById("invitado").innerText = "Invitación para: " + invitado;
}

function confirmar(){

  let nombre = document.getElementById("nombre").value;
  let personas = document.getElementById("personas").value;
  let asistencia = document.getElementById("asistencia").value;

  // Validación simple
  if(!nombre || !personas || !asistencia){
    alert("Por favor completa todos los campos.");
    return;
  }

  // Construir datos para enviar
  let data = {
    invitado: invitado || "",
    nombre: nombre,
    personas: personas,
    asistencia: asistencia
  };

  // URL del Google Apps Script
  let url = "https://script.google.com/macros/s/AKfycbwI1KSQEEViE1JRBZnR_JfduKuJ3Lq2nIPmvfTaptpKVGVbmyD01GebjnRYthmmndgh/exec";

  // Enviar datos por POST
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(result => {
    if(result.status === "ok"){
      alert("¡Confirmación enviada correctamente! Gracias por tu respuesta.");
      // Limpiar campos
      document.getElementById("nombre").value = "";
      document.getElementById("personas").value = "";
      document.getElementById("asistencia").value = "Si";
    }else{
      alert("Hubo un error al enviar la confirmación. Intenta de nuevo.");
    }
  })
  .catch(() => {
    alert("Hubo un error de conexión. Intenta de nuevo.");
  });
}