// On récupère l'élément ciblé (id mainTitle)
let siteTitle = document.getElementById("mainTitle");

// On modifie l'élément
siteTitle.innerHTML="Ceci est le texte ajouté";

// On récupère l'élément ciblé (id subTitle)
let subTitle = document.getElementById("subTitle");

// On modifie l'élément
subTitle.innerHTML="Voici le texte ajouté"

// On récupère les éléments de classe content
let classContent = document.getElementsByTagName("p");

// On ajoute le background color bleu
for(let p of classContent ) {
    p.style.backgroundColor = "blue";
}

// Lors du clic sur le bouton, l'article avec son contenu disparaît
function deleteContent() {
    let dissapear = document.getElementsByTagName("article")[0];
    dissapear.innerText = ""; 
}