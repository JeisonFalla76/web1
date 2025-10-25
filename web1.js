/* ==============================
   WEB1.JS - Funcionalidad general
   ============================== */

// ----- FORMULARIO DE COTIZACIÓN -----
document.getElementById("formCotizacion").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const producto = document.getElementById("producto").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !producto) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  alert(`✅ ¡Gracias ${nombre}! Tu solicitud de cotización ha sido enviada correctamente.\n\n📦 Producto: ${producto}\n📧 Responderemos pronto a: ${email}`);

  // Limpiar formulario
  this.reset();
});

// ----- FORMULARIO DE ENCUESTA -----
document.getElementById("formEncuesta").addEventListener("submit", function (e) {
  e.preventDefault();

  const satisfaccion = document.getElementById("satisfaccion").value;
  const comentario = document.getElementById("comentario").value.trim();

  alert(`🌿 ¡Gracias por tu opinión!\nValoración: ${satisfaccion}\nComentario: ${comentario || "Sin comentarios"}`);

  this.reset();
});

// ----- MENÚ SUAVE (scroll) -----
const enlaces = document.querySelectorAll('.nav-links a');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(enlace.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// ----- BOTÓN WHATSAPP FLOTANTE -----
const botonWsp = document.createElement("a");
botonWsp.href = "https://wa.me/51937283938?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20sobre%20los%20productos%20biodegradables%20de%20GYS%20IMPORTPLAST%20EIRL.";
botonWsp.target = "_blank";
botonWsp.classList.add("wsp-flotante");
botonWsp.innerHTML = "💬";

document.body.appendChild(botonWsp);

// ----- ESTILOS DEL BOTÓN WHATSAPP -----
const estiloWsp = document.createElement("style");
estiloWsp.innerHTML = `
  .wsp-flotante {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366;
    color: white;
    font-size: 1.8rem;
    border-radius: 50%;
    padding: 0.6rem 0.8rem;
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    transition: 0.3s;
    z-index: 999;
  }

  .wsp-flotante:hover {
    background-color: #1ebe5c;
    transform: scale(1.1);
  }
`;
document.head.appendChild(estiloWsp);

console.log("🌱 Web1.js cargado correctamente");
