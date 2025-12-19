function recherche(){
    let liste_film = ["les 4 fantastiques","a contre sens","all the devils are here","bad guys 2","black phone 2","caramelo","frankenstein","french lover","G.O.A.T","good boy","une journée incontournable","jurassic park","jurassic park 2","jurassic park 3","jurassic world","jurassic world 2","les intrus chapitre 2","marche ou crève","mcwalter","plays dirty","roofman","superman","tron ares","une bataille après l'autre","five nigth at freddy's 2","zootopie 2","zootopie","pirates des caraïbes","guerre civil","lego movie"]
    let recherche_film = document.getElementById("Recherche").value 
    if(recherche_film !== "" ){
        let liste_filmsCommencantPar = liste_film.filter(film => film.toLowerCase().startsWith(recherche_film.toLowerCase()));
        if(liste_filmsCommencantPar == ""){
            alert("il n'y as pas votre film =(")
        }
        else{
            for
        }
    } 
}