window.onload=()=>{
	
	
}
function Play(){
	//déclenche une transition+lecture de la vidéo
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var glad=new Image();
	glad.src="images/gladiateurs.png";

	
	glad.onload=(w,h)=>{
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(glad,300,300);
	transition1();
	}
}
function Pause(){
	
}
function Transition(){

}
