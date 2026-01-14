function recherche(){
    let recherche_film = document.getElementById("Recherche").value.toLowerCase().trim();// tolowercase cela met toute en minuscule et trim enleve les espace
    
    // Récupérer tous les divs contenant les films
    let films = document.querySelectorAll('.image_rangement > div'); // je creer une liste avec toute les div qu'il y a dans la div avec la classe image_rangement
    
    films.forEach(film => { // Pour chaque div je fait tel action
        let titre = film.querySelector('figcaption').textContent.toLowerCase();// Récupérer le texte du figcaption (titre du film)
        // Afficher ou masquer selon si le titre commence par la recherche
        if(recherche_film === "" || titre.startsWith(recherche_film)){ // les 2 barep parallele veut dire "OU"
            film.style.display = "block";//on decide de laisser afficher la div car soit la liste est vide donc on affiche tout soit on afiche car elle commence par ce qu'il y a dans la recherche
        } else {
            film.style.display = "none";// on decide de cacher la div du film
        }
    });
}
function ilann(){
    document.images['tde'].addEventListener("click",function(){
	this.src= this.src.search("change")!=-1 ? "etoile_vide.jpg" : "etoile.png";
    },false)
}