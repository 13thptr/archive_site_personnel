"use strict";
let r,i=0;
let c1=0;
let c2=0;
let exposant=0|0;

rs.value=2;
rslider.value=0;
islider.value=0;
rslider.oninput=()=>{
	c1 = Number(rslider.value);
	cmplx.innerHTML="Ensemble de Julia défini en "+c1+"+"+c2+"i.";
}
islider.oninput=()=>{
	c2=Number(islider.value);
	cmplx.innerHTML="Ensemble de Julia défini en "+c1+"+"+c2+"i.";

}
iterslider.oninput=()=>{
	MAX_ITER=Number(iterslider.value);
	iterp.innerHTML="Nombre d'itérations souhaité:"+MAX_ITER;
}
rs.oninput=()=>{
	exposant=rs.value
	raison.innerHTML="Exposant de la suite:"+exposant;
	
}

function Generer(){
	
	c1=Number(rslider.value);
	c2=Number(islider.value);
	//c1=-.123;
	//c2=.745
	let rouge = 0|0;
	let vert = 0|0;
	let bleu = 0|0;
	let alpha = 255|0;
	let X=0|0;
	let Y=0|0;
	let index=0|0;
	let couleur=[];
	let mod_z=0;

	if(!exposant)exposant=2;
	let imgData=new ImageData(LARGEUR,HAUTEUR);
	let LONGUEUR=LARGEUR*HAUTEUR;

	for(let k=0|0;k<LONGUEUR;k++){
		index=k*4;//après un test de performance, on s'aperçoit que k<<2 n'est pas plus rapide
		X=k%LARGEUR;
		Y=k/HAUTEUR|0;
    	r=(X-DECALAGE_DROITE)*RATIO;
		i=(Y-DECALAGE_BAS)*RATIO;
		let z=[r,i];
		
		for(let e=0|0;e<MAX_ITER;e++){
			rouge=2.5*e+30;
			vert=3.5*e+30;
			bleu=8.5*e+30;

			if(e==MAX_ITER-1){
				rouge=bleu=vert=0;
			}

			z=ajoute(puissance(z,exposant),[c1,c2]);
			mod_z=moduleCarre(z);
    		if(mod_z<4||e==0){
    			imgData.data[index]=rouge;
    			imgData.data[index+1]=vert
    			imgData.data[index+2]=bleu;
    			imgData.data[index+3]=alpha;	
    		}
    		
    	}
    }
    ctx.putImageData(imgData,0,0);
    
}

