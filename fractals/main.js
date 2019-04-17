const x=document.getElementById("canvas").getContext("2d");
const ITER=0;
let V=["F"];
let S=["+","-"];
let o="F++F++F";
let P=["F-F--F-F"];
let instructions=LString(V,S,o,P,ITER);
draw(instructions,x);
console.log(instructions);