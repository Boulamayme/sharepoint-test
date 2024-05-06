document.addEventListener('DOMContentLoaded', function() {
    var titres = document.querySelectorAll('.titre');
  
    titres.forEach(function(titre) {
      titre.addEventListener('click', function() {
        var parent = this.parentElement;
        var contenu = parent.querySelector('.contenu');
        var chevron = parent.querySelector('.chevron');
        
        if (contenu.style.display === 'none') {
          // Afficher le contenu
          contenu.style.display = 'block';
          chevron.classList.add('rotate');
          // Ajuster la hauteur des éléments inférieurs
          var elementsSuivants = Array.from(parent.nextElementSibling.querySelectorAll('.contenu'));
          elementsSuivants.forEach(function(element) {
            element.style.marginTop = contenu.clientHeight + 'px';
          });
        } else {
          // Masquer le contenu
          contenu.style.display = 'none';
          chevron.classList.remove('rotate');
          // Réinitialiser la hauteur des éléments inférieurs
          var elementsSuivants = Array.from(parent.nextElementSibling.querySelectorAll('.contenu'));
          elementsSuivants.forEach(function(element) {
            element.style.marginTop = '0';
          });
        }
      });
    });
  });
  