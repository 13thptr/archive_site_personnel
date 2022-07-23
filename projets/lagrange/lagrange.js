function changementRepereX(x){
    let X=x;
    return X;
}
function changementRepereY(y){
    let Y=y;
    return Y;
}

function polynome_lagrangien(liste,j){
    str_produit="";
    let n=liste.length;
    produit = new Polynomial([1]);
    for(i=0;i<n;i++){
        x_i=changementRepereX(liste[i][0]);
        x_j=changementRepereX(liste[j][0]);
        if(i!=j){
            str_produit+=`((x-${x_i})/(${x_i}-${x_j}))`;
            let denom=x_j-x_i;
            produit=produit.mul([-x_i/denom,1/denom]);
            if(i<n-1){
                str_produit+="*";
            }
        }
    }
    return [produit,str_produit];
}

function Lagrange(liste){  
    let lagrange_str="";
    let interpolateur = new Polynomial("0");
    n=liste.length;
    for(j=0;j<n;j++){
        y_j=changementRepereY(liste[j][1]);
        pol=polynome_lagrangien(liste,j);
        produit=pol[0].mul([y_j]);
        interpolateur=interpolateur.add(produit);
        lagrange_str+=`${y_j}*${pol[1]}`;
        lagrange_str+="+";
    }
    lagrange_str=lagrange_str.substring(0,lagrange_str.length-2);
    console.log(lagrange_str);
    console.log(interpolateur.toString());
    return interpolateur;
}

function tracePoly(poly,NB_POINTS){
    //const NB_POINTS=1000;//Plus de points => plus de précision, moins de points => plus rapide
    let y=0;
    for(i=0;i<NB_POINTS;i++){
        x=i/NB_POINTS*c.width;
        y=poly.eval(x);
        ctx.fillRect(x,y,1,1);
        //ctx.fillRect(x,-y,1,1);
    }
    
    
}