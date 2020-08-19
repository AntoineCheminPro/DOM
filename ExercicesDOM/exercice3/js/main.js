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

// création d'une liste
let mainContainer = document.getElementsByTagName("main")[0];

let liste = document.createElement("ul");
liste.id = "exemple";   


function submit(){
        let input = document.getElementsByTagName("input")[0];
        let listeItem = document.createElement("li")
        listeItem.classList.add("list-item");
        listeItem.innerText = input.value;
        let listItems = document.getElementsByClassName("list-item");
        listeItem.addEventListener("click", function() {
                if (this.style.textDecoration !== "line-through"){
                this.style.textDecoration = "line-through";
                }
                else {
                    this.style.textDecoration = "none";
                }
            });
        liste.appendChild(listeItem);
        mainContainer.append(liste);
        input.value = "";
}

input.addEventListener("keypress==13", submit());