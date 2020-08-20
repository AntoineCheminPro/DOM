
// création d'une liste
let mainContainer = document.getElementsByTagName("main")[0];
let liste = document.createElement("ul");
liste.id = "exemple";   
let input = document.getElementsByTagName("input")[0];


function submit(){
        let listeItem = document.createElement("li")
        listeItem.innerText = input.value;
        listeItem.addEventListener("click", function() {
                if (this.style.textDecoration !== "line-through"){
                this.style.textDecoration = "line-through";
                }
                else {
                    this.style.textDecoration = "none";
                }
            });
        liste.appendChild(listeItem);
        listeItem.style.listStyle="decimal";
        mainContainer.append(liste);
        input.value = "";
}

input.onkeyup = function(event) {
    if(event.keyCode === 13) {
        let listeItem = input.value;
        if(listeItem.length > 0) {
            submit(listeItem);
        }
    }
};