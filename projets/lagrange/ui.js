/*--Début initialisation canevas--*/
const c=document.getElementById`c`;
const ctx=c.getContext`2d`;
/*--Fin initialisation canevas--*/
let NB_POINTS=200;

let liste_points=[];//Liste des paires de coordonnées des points.
let seDeplace=false;
let indice_point_en_deplacement=-1;
let distance_carree_point_en_deplacement=0;
let rayon_disque=10;
function getNearestPointIndexAndDistance(l,X,Y){
    let min_d_squared=c.width**2;
    let index=-1;
    for(i in l){
        d_squared=(l[i][0]-X)**2+(l[i][1]-Y)**2;
        if(d_squared<=min_d_squared){
            min_d_squared=d_squared;
            index=i;
        }
    }
    return [min_d_squared,index];
}

function getMousePosition(canvas, event) {
    let x=event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
     //Si le curseur tombe suffisamment près d'un point existant 
    //(moins d'un certain rayon r), alors on ne fait rien. 
    //Sinon on ajoute un point.
    let g=getNearestPointIndexAndDistance(liste_points,x,y);
    distance_carree_point_en_deplacement=g[0];
    if(distance_carree_point_en_deplacement>4*rayon_disque**2){
        //Si le curseur est à plus d'un diamètre de distance du point le plus proche, on peut ajouter un point
        ajouterPoint([x,y]);
        //dessinerPoints(liste_points);
    }
    indice_point_en_deplacement=g[1];
    //console.log(liste_points);
}
window.addEventListener('load', ()=>{
    c.addEventListener("mousedown", function(e)
    {
        getMousePosition(c, e);
        seDeplace=true;
        render();
    });
    //document.addEventListener('mouseup', stopPainting);
    c.addEventListener('mousemove', e => {
        if (seDeplace === true && distance_carree_point_en_deplacement<=rayon_disque**2) {
          //On déplace le point le plus proche.
            liste_points[indice_point_en_deplacement]=[e.x,e.y];
            //dessinerPoints(liste_points);
            render();
        }
      });
    c.addEventListener('mouseup',e=>{
        seDeplace=false;
    });
    /*btn=document.getElementById('btnajt');
    text_switch=1;
    btn.onclick=()=>{
        text_switch^=1;
        btn.innerHTML=["Ajouter des points (cliquer dans le canevas)","Retirer des points (cliquer sur les disques qui les représentent)"][text_switch];
    }
    */
    slider=document.getElementById`slider`;
    slider.oninput=()=>{
        NB_POINTS=slider.value;
        render();
    }
    let btn_copie1=document.getElementById`copieFactorise`;
    let btn_copie2=document.getElementById`copieDvp`;
    btn_copie1.onclick=()=>{
        let copyText=localStorage.getItem("chaine_fac");
        navigator.clipboard.writeText(copyText);
        alert("Expression polynomiale copiée: " + copyText); 
    }
    btn_copie2.onclick=()=>{
        let copyText=localStorage.getItem("chaine_dvp");
        navigator.clipboard.writeText(copyText);
        alert("Expression polynomiale copiée: " + copyText); 
    }
});

function ajouterPoint(point){
    liste_points.push(point);
}
function dessinerPoints(liste){
    for(i in liste){
        let X=liste[i][0];
        let Y=liste[i][1];     
        ctx.fillText(`${changementRepereX(X,0).toFixed(2)},${changementRepereY(Y,0).toFixed(2)}`,X,Y-rayon_disque);
        ctx.beginPath();
        ctx.arc(X,Y,rayon_disque,0,2*Math.PI);
        ctx.fill();
    }
}
function dessinerRepere(){
    let midX=c.width/2;
    let midY=c.height/2;
    ctx.beginPath();
    //Axe des ordonnées
    ctx.fillRect(midX-1,0,1,c.height);

    //Axe des abcisses
    ctx.fillRect(0,midY-1,c.width,1);
    //Graduations:
    const GRAD=16;
    const pas = (c.width/GRAD);
    for(i=0;i<GRAD;i++){
        ctx.fillRect(i*pas*2,midY-5,1,10);
    }
}

function render(){
    ctx.clearRect(0,0,c.width,c.height);
    //dessinerRepere();
    dessinerPoints(liste_points);
    
    let L=Lagrange(liste_points);
    tracePoly(L[0],NB_POINTS);
    let chaine_latex_dvp=L[0].toString();//.replace(/x/gi,"X")
    localStorage.setItem("chaine_dvp",chaine_latex_dvp);
    localStorage.setItem("chaine_fac",L[2]);
    katex.render(chaine_latex_dvp, document.getElementById`katexDvp`, {
        throwOnError: true
    });
    if(L[0].degree()<4){
        //On n'affiche le LaTeX que s'il y a moins de 5 points, sinon le rendu est trop lent. 
        //(Ce seuil est arbitraire,je l'ai choisi en fonction de mon PC)
        katex.render(L[1], document.getElementById`katexFactorise`, {
            throwOnError: true
        });
    }
    else{
        document.getElementById`katexFactorise`.innerHTML=L[2];
    }
}
render();