'use strict'

//Fonction qui génère un nombre aléatoire
//Retourne le nombre
const lancerDe = function () {
    // Générer un nombre entre 1 et 6
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)
  
    // Retourner ce nombre
    return nombre
  }

const clickSurBouton = function() {
    //Lancer le dé virtuel et récupérer le résultat
    const resultat = lancerDe()

    // Récupérer l'image
    const image = document.getElementById('image-de')
    // Ajouter l'attribut src avec le résultat
    image.src = 'media/de' + resultat + '.jpg'
}
//Récupérer le bouton
const buttonLancer = document.getElementById('bouton-lancer')

// Executer le lancer de dé lors du click
buttonLancer.addEventListener('click', clickSurBouton)



