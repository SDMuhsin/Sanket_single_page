function dropdown(){
	var a = document.getElementById("findme");
	if (a.className === "hidden_navbar"){a.className+=" hidden";}
	else{a.className = "hidden_navbar";}
}
window.addEventListener('resize',function(){
	var b = document.getElementById("findme");
	if (window.innerWidth > 700){
		b.className = "hidden_navbar hidden";
	}
})