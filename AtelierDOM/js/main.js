// On récupère l'élément ciblé
let siteTitle = document.getElementsByTagName("h1")[0];
let articles = document.getElementsByTagName("article");

// On modifie l'élément
siteTitle.innerHTML="Un titre généré en JavaScript";

// On modifie l'ensemble des articles à l'aide d'une boucle
for(let article of articles) {
    article.style.backgroundColor = "lightgrey";
}

// Fonction déclenchée par le bouton d'aide
function showHelp() {
    // On récupère et on modifie le paragraphe
    let helpText = document.getElementById("helpText");
    helpText.innerText = "Lorem ipsum";
}



// création d'une liste
let mainContainer = document.getElementsByTagName("main")[0];
const ITEMS = ["item1", "item2", "item3"];

// créé l'élément ul et son ID
let liste = document.createElement("ul");
liste.id = "exemple";

// ajout des li /ligne 1 créé le li /ligne 2 ajoute le contenu de la const ITEMS dans chaque li
// ligne 3 ajoute la class "list-item" à chq li // ligne 4 insert chaque li à mon ul "liste"
for (item of ITEMS){
let listeItem = document.createElement("li")
listeItem.innerText=item;
listeItem.classList.add("list-item");
liste.appendChild(listeItem);
}

// affiche la liste dans le main sur la page (en haut avec prepend, en bas avec appendChild)
mainContainer.prepend(liste);

// Utilisation de l'event listener
let listItems = document.getElementsByClassName("list-item");
for (const ITEM of listItems) {
    ITEM.addEventListener("click", function() {
        if (this.style.textDecoration !== "line-through"){
        this.style.textDecoration = "line-through";
        }
        else {
            this.style.textDecoration = "none";
        }
    });
}


// gestion du formulaire
function submit(){
    let input = document.getElementsByTagName("input")[0];
    let p = document.getElementById ("content");
    p.innerText = input.value;
    input.value = "";
}