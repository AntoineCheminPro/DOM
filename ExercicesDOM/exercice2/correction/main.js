let choices = document.getElementsByClassName("choice");
let choosenColor = document.getElementById("choosenColor");

for (let i = 0; i < choices.length; i++) {
  choices[i].onclick = function() {
    var color = this.style.background;
    choosenColor.style.background = color;
  };
}
