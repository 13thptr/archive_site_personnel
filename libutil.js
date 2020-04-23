/*
2019 Mehdi Sahtali
Ce fichier contient:
	-La definition de la fonction "fleche" qui permet de représenter les vecteurs/nombres complexes dont on fait la somme
	-Les fonctions qui gèrent les entrées des "sliders"
	-Le système de sauvegarde par fichiers
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
Renvoie une liste contenant plus de points
Màj du 23 avril 2020: j'ai appris depuis qu'il s'agissait d'une interpolation,
je renomme donc la fonction "intercale" "interpole" 
*/
function interpole(liste){
	//liste de listes :[[a,b],[c,d],...,[y,z]]
	let interpolee=[];
	
		for(i=0;i<liste.length;i+=2){
			let xp=liste[i][0];
			let yp=liste[i][1];
			if(liste[i+1]){
				let xs=liste[i+1][0];
				let ys=liste[i+1][1];
				interpolee.push([xp,yp],[(xp+xs)/2,(yp+ys)/2],[xs,ys]);
			}
			else{
				interpolee.push([xp,yp]);
			}
		}
	
	return interpolee;
}
console.log("Test interpolation", interpole([[10,15],[30,40]],3));

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
const armbutton=document.getElementById`arm`;

//const slider_coefs=document.getElementById`coefsNb`;
//const slider_vitesse=document.getElementById`vitesse`;
//const slider_zoom=document.getElementById`zoom`;
let fl_toggled=true;
let cl_toggled=false;
let arm_toggled=true;


let reformate=[];
for(let i=0;i<coords.length;i+=2){
	reformate.push([(coords[i]-100)/2e3,(coords[i+1]-150)/2e3]);
}
//reformate=interpole(interpole(interpole(reformate)));
console.log(reformate)



/*bouton_fl.onclick=()=>{
	if(fl_toggled){
		fl_toggled=false;
		bouton_fl.innerHTML="Show arrows (slower)";
	}
	else{
		fl_toggled=true;
		bouton_fl.innerHTML="Hide arrows (draws faster)";
	}
}
bouton_cl.onclick=()=>{
	if(cl_toggled){
		cl_toggled=false;
		bouton_cl.innerHTML="Show circles (slower)";
	}
	else{
		cl_toggled=true;
		bouton_cl.innerHTML="Hide circles (faster)";
	}
}*/
armbutton.onclick=()=>{
	if(arm_toggled){
		arm_toggled=false;
		armbutton.innerHTML="Show arm (slower)";
	}
	else{
		arm_toggled=true;
		armbutton.innerHTML="Hide arm (faster)";
	}
}
