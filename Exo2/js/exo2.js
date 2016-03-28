$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$supprimer = document.getElementById("supprimer");

tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    tableau.push($texte.value);
    afficherListe();
}



function supprimer() {
	tableau.pop();
	
	afficherListe();
}

$ajouter.onclick = ajouter;
$supprimer.onclick = supprimer;
afficherListe();
