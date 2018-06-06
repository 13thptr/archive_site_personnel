var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = 3/5*canvas.width; 
function resize(){
	"use strict";
	canvas.width = window.innerWidth;
	canvas.height = 3/5*canvas.width; 
}
window.onresize=resize;