puissance=(z,r)=>{
	//Renvoie z^r avec z un complexe et r un entier positif (TODO:r n'importe quel nombre décimal)
	let tmp=z;
	for(let k=1;k<r;k++){
		tmp=mult(z,tmp)
	}
	return tmp;
}

moduleCarre=(complexe)=>{
	//cette fonction renvoie le carré du module du nombre complexe d'entrée
	let r = complexe[0];
	let i = complexe[1];
	let m = r**2+i**2;
	return m;
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
