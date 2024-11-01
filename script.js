/* DESPLIEGA CV */
function verMas() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ver más"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ver menos"; 
      moreText.style.display = "inline";
    }
  }

  /* COMPLETA TABLA */
  function myFunction() {
    let tdNombre = document.getElementById("td-nombre");
    let nombre = document.getElementById("nombre");

    let tdApellido = document.getElementById("td-apellido");
    let apellido = document.getElementById("apellido");

    let tdEmail = document.getElementById("td-email");
    let email = document.getElementById("email");

    let tdTel = document.getElementById("td-tel");
    let telefono = document.getElementById("tel");

    let tdEdad = document.getElementById("td-edad");
    let edad = document.getElementById("edad");

    let tdDireccion = document.getElementById("td-direccion");
    let direccion = document.getElementById("direccion");

    let tdCP = document.getElementById("td-cp");
    let codigo = document.getElementById("codigo-postal");


    tdNombre.innerHTML = nombre.value;
    tdApellido.innerHTML = apellido.value;
    tdTel.innerHTML = telefono.value;
    tdEmail.innerHTML = email.value;
    tdEdad.innerHTML = edad.value;
    tdDireccion.innerHTML = direccion.value;
    tdCP.innerHTML = codigo.value;
  }

  function Provincia() {
    let tdProvincia = document.getElementById("td-provincia");
    let provinciaInput = document.querySelector('.datalist-form');
    let provinciaValue = provinciaInput.value;

    // Obtener todos los options del datalist
    let options = document.querySelectorAll('#provincia option');
    let selectedOption = Array.from(options).find(option => option.text === provinciaValue);

    // Si se encontró la opción, obtener el valor del atributo data-val
    if (selectedOption) {
        let dataVal = selectedOption.getAttribute("data-val");
        tdProvincia.innerHTML = dataVal; // Mostrar el valor en tdProvincia
    } else {
        tdProvincia.innerHTML = ''; // O manejar el caso donde no hay coincidencias
    }
}


/* Contacto */

/*
document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('input[name="contacto"]');
  const resultado = document.getElementById('td-contacto');
  radios.forEach(radio => {
      radio.addEventListener('change', () => {
          resultado.textContent = radio.value;
      });
  });
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('input[name="contacto"]');
  const resultado = document.getElementById('td-contacto');

  // Mostrar el valor del radio que está checked por defecto
  const checkedRadio = document.querySelector('input[name="contacto"]:checked');
  resultado.textContent = checkedRadio.value;

  radios.forEach(radio => {
      radio.addEventListener('change', () => {
          resultado.textContent = radio.value;
      });
  });
});


/* Suscripción */


function mostrarSeleccionados() {
  const checkboxes = document.querySelectorAll('input[name="suscripcion"]:checked');
  const seleccionados = Array.from(checkboxes).map(checkbox => checkbox.value);
  document.getElementById('td-suscripcion').textContent = seleccionados.join(', ');
}

// Agregar el evento 'change' a cada checkbox después de cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="suscripcion"]').forEach(checkbox => {
      checkbox.addEventListener('change', mostrarSeleccionados);
  });
  
  // Mostrar los valores seleccionados inicialmente
  mostrarSeleccionados();
});




/* Validación Codigo Postal */

document.addEventListener('DOMContentLoaded', () => {
  const codigoPostalInput = document.getElementById('codigo-postal');
  const errorMensaje = document.getElementById('error');
  const validoMensaje = document.getElementById('valido');

  // Expresión regular para validar el formato A1234ABC
  const regex = /^[A-Z]\d{4}[A-Z]{3}$/;

  // Función de validación en tiempo real
  function validarCodigoPostal() {
      if (regex.test(codigoPostalInput.value)) {
          errorMensaje.style.display = 'none';
          validoMensaje.style.display = 'inline';
          return true;
      } else {
          errorMensaje.style.display = 'inline';
          validoMensaje.style.display = 'none';
          return false;
      }
  }

  // Validar en tiempo real mientras el usuario escribe
  codigoPostalInput.addEventListener('input', () => {
      if (validarCodigoPostal()) {
          formulario.submit();  // Enviar automáticamente si es válido
      }
  });
});