//A gombok stílusának kinyerése
var d1 = document.getElementsByClassName("szavas");

$(".szavas").click(function() {
    for (index = 0; index < 10; index++) {
        d1[index].style.backgroundColor = "white"
    }
    this.style.backgroundColor = "yellow"
});