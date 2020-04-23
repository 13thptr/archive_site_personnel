puissance=(z,r)=>{
	//Renvoie z^r avec z un complexe et r un entier positif (TODO:r n'importe quel nombre décimal)
	let tmp=z;
	for(let k=1;k<r;k++){
		tmp=mult(z,tmp)
	}
	return tmp;
}

moduleCarre=complexe=>{
	//cette fonction renvoie le carré du module du nombre complexe d'entrée
	let r = complexe[0];
	let i = complexe[1]; 
	return r**2+i**2;
}
module=complexe=>{
	//cette fonction renvoie le  module du nombre complexe d'entrée
	let r = complexe[0];
	let i = complexe[1];
	return Math.sqrt(r**2+i**2);;
}
argument=complexe=>{
	return Math.atan2(complexe[1],complexe[0]);
}

mult=(z1,z2)=>{
	let x1 = z1[0];
	let x2 = z2[0];
	let y1 = z1[1];
	let y2 = z2[1];
	//z1*z2=(x1*x2)-(y1*y2)+i(x1*y2+y1*x2)
	return [(x1*x2)-(y1*y2),(x1*y2+y1*x2)];
}
ajoute=(z1,z2)=>{
	let r1=z1[0];
	let r2=z2[0];
	let i1=z1[1];
	let i2=z2[1];

	let res = [r1+r2,i1+i2];
	return res;

}
//Exponentielle complexe (formule d'Euler)
function e(angle){
	return [Math.cos(angle),Math.sin(angle)];
}
function TFD(fonction,N){
	let nombre_echantillons=fonction.length;
	let liste_coefs=[];
	//let liste_rayons=[];
	//let liste_phases=[];
	//N est le nombre de coefficients voulu
	for(let n=-N;n<N;n++){
		let cn=[0,0];
		for(let i=0;i<nombre_echantillons;i++){
			cn=ajoute(cn,mult(fonction[i],e(-2*Math.PI*i*n/nombre_echantillons)))
		}
		//let R=module(cn);
		//let θ=Math.atan2(cn[1],cn[0]);
		//liste_phases.push(θ);
		//liste_rayons.push(R);
		liste_coefs.push(cn);

	}
	
	//return [liste_coefs,liste_rayons,liste_phases];
	return liste_coefs;
}



