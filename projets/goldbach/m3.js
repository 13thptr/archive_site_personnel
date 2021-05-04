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

const x3=c3.getContext("2d");


x3.fillRect(0,0,c1.width,c1.height);

let imageData=new ImageData(c3.width,c3.height);
let data=imageData.data;

/*function u3(){  
    let index=0;
    data.set(data.map((e,i)=>{
        let X=i%2048;
        let Y=512-i/2048|0;
        if(goldbach2(X/4|0,crible_era)==Y/4){
            return [255,0,0,255][i%4];
        }
        else{
            return [0,0,0,255][i%4];
        }
    }))
    
    
}
*/

x3.fillStyle="red";
let Y=0;
function u3(){
let alpha=0;  


        for(let X=0;X<c3.width*30;X+=2){

            if(goldbach(X,crible_era)==Y){
                alpha+=10;
                x3.fillStyle=`rgba(255,0,0,${alpha/100}`;
                x3.fillRect((X/30)|0,c3.width-Y,1,1);
            }
        
        }
    
    Y++;
    if(Y<c3.height){requestAnimationFrame(u3);}
    else{
        cancelAnimationFrame(u3);
    }
}