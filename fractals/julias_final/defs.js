"use strict";
const canvas_principal=document.getElementById("canvas");
const ctx=canvas_principal.getContext("2d");
const prp=document.getElementById("progression")

let MAX_ITER=20;
const RATIO=1/120;
const LARGEUR=canvas_principal.width;
const HAUTEUR=canvas_principal.height;
const DECALAGE_DROITE=LARGEUR/2;
const DECALAGE_BAS=HAUTEUR/2;

const rslider = document.getElementById("Rslider");
const islider = document.getElementById("Islider");
const iterslider=document.getElementById("iterSlider");
const iterp=document.getElementById("iterp");
const raison=document.getElementById("raison");
const rs=document.getElementById("rs");
const cmplx = document.getElementById("cmplx"); 

//Fonction trouvée à l'adresse:https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
function hsl2rgb(h,s,l) 
{
let a=s*Math.min(l,1-l);
let f= (n,k=(n+h/30)%12) => l - a*Math.max(Math.min(k-3,9-k,1),-1);                 
return [f(0),f(8),f(4)];
} 