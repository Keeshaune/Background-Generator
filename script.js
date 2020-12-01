var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document. querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// body.style.background = "red";
function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";
}

function randGenerate() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return fullHex(red, green, blue);
}

function fullHex(r, g, b) {
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);
	return red+green+blue;
}

function rgbToHex(rgb) {
	var hex = Number(rgb).toString(16);
  		if (hex.length < 2) {
       	hex = "0" + hex;
  	}
  	return hex;
}

function setRandGradient() {
	color1.value = "#" + randGenerate();
	color2.value = "#" + randGenerate();
	setGradient();
}

button.addEventListener("click", setRandGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);