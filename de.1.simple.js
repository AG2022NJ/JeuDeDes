'use strict'
//Blibliothéque jQuery
$(function(){
  alert('JQuerry est bien chargé !')
})

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
    // Afficher le résultat dans le container
    const container = document.getElementById('container')
    // Ajouter du Texte au container
    container.textContent = resultat
    // Récupérer l'image
    const image = document.getElementById('image-de')
    // Ajouter l'attribut src avec le résultat
    image.src = 'media/de' + resultat + '.jpg'
}

const clickSurAjouter = function() {
//Ajouter le résultat au score
const ajouterscore = document.getElementById('ajouterscore')
ajouterscore.textContent = 0

}
//Récupérer le bouton
const buttonLancer = document.getElementById('bouton-lancer')
const ajouter = document.getElementById('ajouter')

// Executer le lancer de dé lors du click
buttonLancer.addEventListener('click', clickSurBouton)
ajouter.addEventListener('click', clickSurAjouter)



