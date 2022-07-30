function changementRepereX(x,sens)
{   let X=0;
    const ECHELLE=21;
    /*
    Du système de coordonnées du canevas à un système plus "naturel" ou usuel:
    - Axe des ordonnées orienté vers le haut et non vers le bas;
    - Origine du repère au centre du canevas et non dans le coin haut gauche.
    - Mise à l'échelle 
    */
    if(sens==0){
        X=(x-c.width/2)/ECHELLE;
    }
    /*
    Et le sens inverse, nécessaire pour l'affichage: 
    */
    else if(sens==1){
        X=ECHELLE*x+c.width/2;
    }
    return X;
}
function changementRepereY(y,sens){
    const ECHELLE=21;
    let Y=0;
    if(sens==0){
        Y=(c.height/2-y)/ECHELLE;
    }
    else{
        Y=c.height/2-ECHELLE*y;
    }
    return Y;
}

function polynome_lagrangien(liste,j){
    let str_produit="";
    let str_produit_latex="";
    let n=liste.length;
    let produit = new Polynomial([1]);
    for(i=0;i<n;i++){
        let x_i=changementRepereX(liste[i][0],0);
        let x_j=changementRepereX(liste[j][0],0);
        let X_i=x_i.toFixed(2);//On limite l'affichage à 2 chiffres après la virgule
        let X_j=x_j.toFixed(2);
        if(i!=j){
            str_produit_latex+=`( \\frac{x-${X_i}}{${X_j}-${X_i}})`.replace("--","+").replace("--","+");
            str_produit+=`((x-${X_i})/(${X_j}-${X_i}))`.replace("--","+").replace("--","+");
            let denom=x_j-x_i;
            produit=produit.mul([-x_i/denom,1/denom]);
        }
    }
    return [produit,[str_produit_latex,str_produit]];
}

function Lagrange(liste){  
    let lagrange_latex_str="";//la chaîne qui sera rendue en LaTeX
    let lagrange_str="";//celle qui a vocation à être copiée
    let interpolateur = new Polynomial("0");
    let n=liste.length;
    for(j=0;j<n;j++){
        y_j=changementRepereY(liste[j][1],0);
        pol=polynome_lagrangien(liste,j);
        produit=pol[0].mul([y_j]);
        interpolateur=interpolateur.add(produit);
        lagrange_latex_str+=`${y_j.toFixed(2)}${pol[1][0]}`;
        lagrange_latex_str=lagrange_latex_str.replace("+-","-");
        lagrange_latex_str+="+";
        lagrange_str+=`${y_j.toFixed(2)}${pol[1][1]}`;
        lagrange_str+="+";
    }
    lagrange_latex_str=lagrange_latex_str.substring(0,lagrange_latex_str.length-1);
    lagrange_str=lagrange_str.substring(0,lagrange_str.length-1);
    return [interpolateur,lagrange_latex_str,lagrange_str];
}
function tracePoly(poly,NB_POINTS){
    //const NB_POINTS=1000;//Plus de points => plus de précision, moins de points => plus rapide
    let y=0;
    for(i=0;i<NB_POINTS;i++){
        x=i/NB_POINTS*c.width;
        y=poly.eval(changementRepereX(x,0));
        ctx.fillRect(x,changementRepereY(y,1),1,1);
    }   
}
