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
