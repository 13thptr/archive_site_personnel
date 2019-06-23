
const x2=c2.getContext("2d");
let crible_era=new Uint8Array(TAILLE);

for(let a=4;a<TAILLE;a+=2){
    crible_era[a]=0;
    crible_era[a+1]=1;
}
crible_era[2]=1;
crible_era[3]=1;


for(let b=3;b<TAILLE**.5|0;b+=2){
    for(let c=b;c<TAILLE;c+=b){
        if(c!=b)crible_era[c]=0;
    }
}
let X2=0;
x2.fillRect(0,0,c1.width,c1.height);
x2.fillStyle="red";
x2.font="10px Comic Sans MS";

function u2(){  
    for(let Y=0;Y<TAILLE;Y++){
        if(goldbach(X2,crible_era)==Y){
            x2.fillText("+",X2,c2.width-Y*20);
        }
    }
    X2+=2
    requestAnimationFrame(u2);
}