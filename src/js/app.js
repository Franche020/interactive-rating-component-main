document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  ratingsF();
  submit();
}

const ratingValue = document.querySelector("#rating-value");
const ratings = document.querySelectorAll(".ratings li");
const buttonSubmit = document.querySelector(".button-submit");

let ratedValue = 0;

//deteccion de que opcion se selecciona y escritura en la variable
function ratingsF() {
  ratings.forEach(function (enlaces) {
    enlaces.addEventListener("click", (e) => {
      // Borrar las clases de todos los elementos para que no se resalten varios
      ratings.forEach((li) => li.classList.remove("selected-rating"));
      // escribir valor seleccionado en id="rating-value"
      ratedValue = e.target.textContent;
      ratingValue.innerHTML = e.target.textContent;
      // Añadir la clase para resaltar
      e.target.classList.add("selected-rating");
    });
  });
}

// deteccion de pulsacion de botón submit

function submit() {
    const normalState = document.querySelector('.normal-state');
    const thanksState = document.querySelector('.thanks-state');

 
    buttonSubmit.addEventListener('click', function () {

      if(ratedValue !== 0) {

        // ocultar tarjeta con invisible
        normalState.classList.add('invisible');
        thanksState.classList.remove('invisible')
      } else {

      }

    })
    
}