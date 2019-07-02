






p=n=>{for(i=n;n%--i;);return 1==i}
g=n=>{E=0;for(k=n/2+1;k--;)if(p(n-k)&p(k)){E++}return E}
g=n=>{E=0;for(k=n/2+1;k--;)p(n-k)&p(k)?E++:0;return E}

throw g(326)
R=Math.random;Y=R()*50|0;
g(X=R()*90|0)==Y&&x.fillRect(X*5,1e3-Y*99,5,5)






p=n=>{for(i=n;n%--i;);return 1==i}
g=n=>{E=0;for(k=n/2+1;k--;)p(n-k)&p(k)?E++:0;return E}
with(Math){
X=random()*50|0;
Y=random()*50|0;
}
g(X)==Y&&x.fillRect(X*3,1e3-Y*3,3,3)


p=n=>{for(i=n;n%--i;);return 1==i}
g=n=>{for(k=n/2+1,E=0;k--;)p(n-k)&p(k)?E++:0;return E}
for(X=9;X--;)Y=t|0;g(X)==Y&&x.fillRect(X*3,1e3-Y,3,3)





