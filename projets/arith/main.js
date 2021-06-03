let MOD=10;
let TABLE=2;
let pas=TAU/10;
slider_mod.oninput=()=>{
	MOD=Number(slider_mod.value);
	//MOD=Math.log(2000-MOD)/Math.log(10);
	pas=TAU/MOD;
	affichage_mod.innerHTML=MOD;
	rendu();
}
slider_tab.oninput=()=>{
	TABLE=Number(slider_tab.value);
	affichage_tab.innerHTML=TABLE;
	rendu();
}
		

function rendu(){
	ctx.clearRect(0,0,c.width,c.height);

	//Dessin du cercle "support"
	ctx.beginPath();
	ctx.arc(DX,DY,RAYON,0,TAU);
	ctx.stroke();

	
	for(let i=0;i<MOD;i++){

		let angle_crnt=pas*i;
		let angle_dest=i*TABLE%MOD*pas;
		//On prend en compte la largeur du texte pour bien centrer le nombre:
		let X_crnt=RAYON*Math.cos(angle_crnt)+DX;
		let Y_crnt=RAYON*Math.sin(angle_crnt)+DY;

		let X_txt=(RAYON+30)*Math.cos(angle_crnt)+DX;
		let Y_txt=(RAYON+30)*Math.sin(angle_crnt)+DY;

		
		let X_dest=RAYON*Math.cos(angle_dest)+DX;
		let Y_dest=RAYON*Math.sin(angle_dest)+DY;
		
		//Dessin des disques pour mieux voir quels sont les points/nombres reliés entre eux
		ctx.beginPath();
		ctx.arc(X_crnt,Y_crnt,RAYON_,0,TAU);
		ctx.fill();
		//Affichage des nombres
		if(MOD<=100)
		{
			ctx.fillText(i,X_txt-ctx.measureText(i).width/2,Y_txt+5);
		}

		ctx.beginPath();
		ctx.moveTo(X_crnt,Y_crnt);
		ctx.lineTo(X_dest,Y_dest);
		ctx.stroke();
		
	}
	
}
rendu();

