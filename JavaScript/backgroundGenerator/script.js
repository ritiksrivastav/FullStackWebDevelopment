var css = document.querySelector("h3");
var css2 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
console.log(body);
function setGradient(){
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background+";";
    css2.textContent = "Color on left: "+color1.value+" || Color on right: "+color2.value;
}
color1.addEventListener("input",setGradient)
color2.addEventListener("input",setGradient)