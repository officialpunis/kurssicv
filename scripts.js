function testi() {
    console.log("script");
}



function rockIt(){
	var needle = document.getElementById("needle");
	var rnd = (Math.random()*0.75)+1;
		needle.setAttribute("style", "animation-duration: " + rnd + "s;");
}

setInterval (function(){ rockIt(); }, 500);

