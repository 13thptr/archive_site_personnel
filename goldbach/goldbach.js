X=frame;p=n=>{for(i=n;n%--i;);return 1==i}
g=n=>{for(k=n*n,e=0;k--;){i=k%n;j=k/n|0;p(i)&p(j)&i+j==n?e++:0}return e/2};for(Y=15;Y--;)g(X*2)==Y&&x.fillRect(X*10+100,1e3-Y*10,5,5)





p=n=>{for(i=n;n%--i;);return 1==i}
t||(d=new ImageData(500,500),a=d.data,a.set(a.map((e,i)=>[255,0,0,255][i%4])),x.putImageData(d,0,0))

p=n=>{for(i=n;n%--i;);return 1==i}
g=n=>{for(k=m=0;k<n/2+1;k++){p(n-k)&&p(k)?m++:0;return m}
throw g(326)
R=Math.random;Y=R()*50|0;
g(X=R()*90|0)==Y&&x.fillRect(X*5,1e3-Y*99,5,5)