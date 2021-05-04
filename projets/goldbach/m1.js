function estPremier(n)
{
    //Renvoie 1 si n est premier, 0 sinon
    if(n<2){return false;}
    if(n%2==0&&n>2){return false;}
    for(let i=3;i<n/2;i+=2){
        if(n%i==0){
            return false;
        }
    }

    return true;
}
function goldbach(n,premiers)
{   
    /*A un nombre PAIR n strictement SUPERIEUR à 2, 
    on associe le nombre de façons de décomposer 
    ce nombre comme une somme de deux nombres premiers
    */
    let termes=0;

  
    for(let k=0;k<n/2+1;k++){
        if(estPremier(n-k)&&estPremier(k)){
            termes++;
            
        }
    }
    


    return termes;
}

const x1=c1.getContext("2d");
const TAILLE=c1.width;

let premiers=new Uint8Array(TAILLE);
for(let k=0;k<TAILLE;k++)
{
    if(estPremier(k)){
        premiers[k]=1;
    }
    else{
        premiers[k]=0;
    }
}
let X=0;
x1.fillRect(0,0,c1.width,c1.height);
x1.fillStyle="red";
x1.font="10px Comic Sans MS";


function u1(){  
    for(let Y=0;Y<TAILLE/4;Y++){
        if(goldbach(X,premiers)==Y){
            x1.fillText("+",X,c1.height-Y*8);
        }
    }
    X+=2
    if(X<c1.width){
        requestAnimationFrame(u1);
    }
    else{
        cancelAnimationFrame(u1);
    }
}
	