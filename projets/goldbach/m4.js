function goldbach2(n,premiers)
{   
    /*A un nombre PAIR n strictement SUPERIEUR à 2, 
    on associe le nombre de façons de décomposer 
    ce nombre comme une somme de deux nombres premiers
    */
    let termes=0;
    for(let k=0;k<n/2+1;k++){
        if(premiers[n-k]&&premiers[k]){
            termes++;
            
        }
    }

    return termes;
}

const x4=c4.getContext("2d");

let X4=0;
x4.fillRect(0,0,c1.width,c1.height);
x4.fillStyle="red";
x4.font="10px Comic Sans MS";

function u4(){  
    for(let Y=0;Y<TAILLE;Y++){
        if(goldbach2(X4,crible_atk)==Y){
            x4.fillText("+",X4,c4.width-Y*20);
        }
    }
    X4+=2
    requestAnimationFrame(u4);
}