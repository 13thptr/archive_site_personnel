/*
2019 Mehdi Sahtali
Ce fichier contient:
	-La definition de la fonction "fleche" qui permet de représenter les vecteurs/nombres complexes dont on fait la somme
	-Les fonctions qui gèrent les entrées des "sliders"
	-Le système de sauvegarde par fichiers (à faire)
*/


/*
Renvoie le chemin SVG d'une flèche :
X et Y sont les coordonnées de la base de la flèche et u est sa longueur(norme du vecteur)
*/
function fleche(X,Y,u){

	base=u/10;
	hauteur=u-u/4 ;
	cote=u/10;
	perp=u/4;
	centre=u/8;
	return`M${X} ${Y} L${X+=base/2} ${Y} L${X} ${Y+=hauteur} L${X+=cote} ${Y} L${X-=centre} ${Y+=perp} L${X-=centre} ${Y-=perp} L${X+=cote} ${Y} L${X} ${Y-=hauteur} Z`;	
}
/*
Renvoie une liste contenant plus de points (interpolation linéaire)
*/
function intercale(points){
	for(i=0;i<points.length;i+=2){
		let X_prev=points[i][0];
		let Y_prev=points[i][1];
		let X_next=[i+1][0];
		let Y_next=[i+1][1];
		let avg_X=X_prev+X_next/2;
		let avg_Y=Y_prev+Y_next/2;
		points.splice(i+1,0,[avg_X,avg_Y])
	}
	return points;
}

/*
Obtention des contextes de dessin pour les deux élements <canvas>:
il y a deux canevas transparents superposés afin de garder la trace de la pointe de la plus petite flèche (le dessin)
-pas d'effacement,canevas n°1- tout en effaçant les cercles à chaque image-effacement,canevas n°2.
*/
const x1=c1.getContext`2d`;
const x2=c2.getContext`2d`;
let NOMBRE_COEFS=1000;
let VITESSE=1;
	
const bouton_fl=document.getElementById`fl`;
const bouton_cl=document.getElementById`cl`;

//const slider_coefs=document.getElementById`coefsNb`;
//const slider_vitesse=document.getElementById`vitesse`;
//const slider_zoom=document.getElementById`zoom`;
let fl_toggled=true;
let cl_toggled=false;



let reformate=[];
for(let i=0;i<coords.length;i+=2){
	reformate.push([(coords[i])/2e3,(coords[i+1])/2e3]);
}
console.log(reformate)
//Todo:ajouter échelle logarithmique pour le nombre de coefficients
/*slider_coefs.oninput=()=>{
	frame=0;
	t=0;
	NOMBRE_COEFS=slider_coefs.value|0;	
}

slider_vitesse.oninput=()=>{
	frame=0;
	t=0;
	VITESSE=slider_vitesse.value|0;
	VITESSE/=10;
	document.getElementById`vitp`.innerHTML="Vitesse de l'animation (unité arbitraire):"+VITESSE;
}
slider_zoom.oninput=()=>{
	ZOOM=Number(slider_zoom.value);
}

*/

bouton_fl.onclick=()=>{
	if(fl_toggled){
		fl_toggled=false;
		bouton_fl.innerHTML="Montrer les flèches";
	}
	else{
		fl_toggled=true;
		bouton_fl.innerHTML="Cacher les flèches";
	}
}
bouton_cl.onclick=()=>{
	if(cl_toggled){
		cl_toggled=false;
		bouton_cl.innerHTML="Montrer les cercles";
	}
	else{
		cl_toggled=true;
		bouton_cl.innerHTML="Cacher les cercles";
	}
}
