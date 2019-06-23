const x3=c3.getContext("2d");
let crible_atk=new Uint8Array(TAILLE);




let X3=0;
x3.fillRect(0,0,c1.width,c1.height);
x3.fillStyle="red";
x3.font="10px Comic Sans MS";

function u3(){  
    for(let Y=0;Y<TAILLE;Y++){
        if(goldbach2(X3,crible_atk)==Y){
            x3.fillText("+",X3,c3.width-Y*20);
        }
    }
    X3+=2
    requestAnimationFrame(u3);
}