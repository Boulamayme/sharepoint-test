// src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
// src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"

const slide = ["foret-peuplier.jpg", "paysage-montagne.jpg", "chemin-automne.jpg", "prairie-alpes.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
// customScript.js

function ChangeSlide(direction) {
    console.log('ChangeSlide called with direction:', direction);
    
    // Obtenez l'index actuel
    let currentIndex = $('.slider').slick('slickCurrentSlide');
    
    // Calculez le nouvel index
    let newIndex = currentIndex + direction;
    
    // Utilisez la fonction slickGoTo avec le nouvel index
    $('.slider').slick('slickGoTo', newIndex);
};
document.addEventListener("DOMContentLoaded", function() {
    // Supprimer les marges de la page SharePoint
    var pageContent = document.getElementById("s4-workspace");
    if (pageContent !== null) {
        pageContent.style.margin = "0";
    }
});

  
//   $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });
  