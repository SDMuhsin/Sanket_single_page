var buttons = document.getElementsByClassName("details");

//TWO FUNCTIONS FOR EACH ELEMENT BECUASE I SUCK AT JS
function m1(){
	document.getElementById("m1").style.display = "flex";
}
function closem1(){
	document.getElementById("m1").style.display = "none";
}
function m2(){
	document.getElementById("m2").style.display = "flex";
}
function closem2(){
	document.getElementById("m2").style.display = "none";
}
function m3(){
	document.getElementById("m3").style.display = "flex";
}
function closem3(){
	document.getElementById("m3").style.display = "none";
}
function m4(){
	document.getElementById("m4").style.display = "flex";
}
function closem4(){
	document.getElementById("m4").style.display = "none";
}
function m5(){
	document.getElementById("m5").style.display = "flex";
}
function closem5(){
	document.getElementById("m5").style.display = "none";
}

//NAVBAR
function openNav(){
	var d = document.querySelector('.drop-down');
	d.style.display = "block";
	var x = document.querySelector(".nav-close");
	x.style.display = "block";
	var menu = document.querySelector(".nav-open");
	menu.style.display = "none";
}
window.addEventListener('resize', function(){
	console.log(window.innerWidth);
	if (window.innerWidth > 700){
		var a = document.querySelector(".drop-down");
		a.style.display = "none";
		var x = document.querySelector(".nav-close");
		x.style.display = "none";
		var menu = document.querySelector(".nav-open");
		menu.style.display = "none";
	}
	else if (window.innerWidth < 700){
		var menu = document.querySelector(".nav-open");
		menu.style.display = "block";
	}
})

function closeNav(){
	var d = document.querySelector('.drop-down');
	d.style.display = "none";
	var x = document.querySelector(".nav-close");
	x.style.display = "none";
	var menu = document.querySelector(".nav-open");
	menu.style.display = "block";	
}

