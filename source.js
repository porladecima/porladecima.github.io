"use strict";

//constantes
const decimas = Array.from($A(".decima"));
let currentGroup = 0; 
const cardsPerGroup = 3;
const totalGroups = Math.ceil(decimas.length / cardsPerGroup);
let cardsContainer;

document.addEventListener("DOMContentLoaded",()=>{
    onscroll = function() {
        scrollFunction();
      };

    cardsContainer = document.querySelector(".decimas-grid"); 


      //ejecuciones de funciones 
       // Botones de anterior y siguiente
        const prevButton = document.getElementById("prev-button"); // Asegúrate de tener estos IDs en tu HTML
        const nextButton = document.getElementById("next-button");

        if (prevButton) {  //verifico que existan antes de usarlos
            prevButton.addEventListener("click", showPreviousGroup);
        }
        if (nextButton) {
            nextButton.addEventListener("click", showNextGroup);
        }


        // Mostrar el primer grupo al cargar la página
        showCards(currentGroup);
        updateButtonVisibility(); // Muy importante para ocultar botones al principio/final
      

});



//definicion de funciones de control

function $A(query){
    return document.querySelectorAll(query);
}

function $(query){
    return document.querySelector(query);
}



function scrollFunction() {
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    document.getElementById("scroll-to-top").classList.add("show");
  } else {
    document.getElementById("scroll-to-top").classList.remove("show");
  }
}

document.getElementById("scroll-to-top").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


function showCards(groupIndex) {
    const startIndex = groupIndex * cardsPerGroup;
    const endIndex = Math.min(startIndex + cardsPerGroup, decimas.length); // Importante: No exceder el límite

    // Ocultar todas las cards
    decimas.forEach(card => card.style.display = "none");

    // Mostrar solo las cards del grupo actual
    for (let i = startIndex; i < endIndex; i++) {
        decimas[i].style.display = "block"; // O el estilo de visualización que uses (e.g., "flex", "inline-block")
    }

    
    
}


function showPreviousGroup() {
    if (currentGroup > 0) {
        currentGroup--;
        showCards(currentGroup);
        updateButtonVisibility();
        
    }
    if (cardsContainer) {
        cardsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    
}

function showNextGroup() {
    if (currentGroup < totalGroups - 1) {
        currentGroup++;
        showCards(currentGroup);
        updateButtonVisibility();
        }
    if (cardsContainer) {
        cardsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }

}

function updateButtonVisibility() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    if (prevButton) {
        prevButton.style.display = currentGroup === 0 ? "none" : "block";
    }
    if (nextButton) {
        nextButton.style.display = currentGroup === totalGroups - 1 ? "none" : "block";
    }
}
        

