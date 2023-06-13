var css = document.querySelector("h3");
var leftColor = document.querySelector(".color1");
var rightColor = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function colorPicker() {
    body.style.background = "linear-gradient(to right, " + leftColor.value 
    + ", " 
    + rightColor.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomizer() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i =0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColors() {
    leftColor.value = randomizer();
    rightColor.value = randomizer();

    colorPicker();
}

leftColor.addEventListener("input", colorPicker);

rightColor.addEventListener("input", colorPicker);

button.addEventListener("click", randomColors);

colorPicker();