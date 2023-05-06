const paX = document.getElementById("accX");
            const paY = document.getElementById("accY");
            const paZ = document.getElementById("accZ");

            const poZ = document.getElementById("oriZ");

            /*const sensor = new AbsoluteOrientationSensor();

            Promise.all([
                navigator.permissions.query({ name: "accelerometer" }),
                navigator.permissions.query({ name: "magnetometer" }),
                navigator.permissions.query({ name: "gyroscope" }),
            ]).then((results) => {
                if (results.every((result) => result.state === "granted")) {
                    sensor.start();
                    // …

                } else {
                    console.log("No permissions to use AbsoluteOrientationSensor.");
                }
            });
            */
            window.addEventListener("deviceorientation", (event) => {
                poZ.innerHTML=`${event.alpha.toFixed(2)} : ${event.beta.toFixed(2)} : ${event.gamma.toFixed(2)}`;
                oscillator.frequency.value=event.alpha.toFixed(2)*25;
            });
            
            let aX=0;
            let aY=0;
            let aZ=0;
            console.log("works");
            const acl = new Accelerometer({ frequency: 60 });

            acl.addEventListener("reading", () => 
            {
            aX=acl.x.toFixed(5);
            aY=acl.y.toFixed(5);
            aZ=acl.z.toFixed(5);
            paX.innerHTML=`Accélération selon l'axe X: ${aX}`;
            paY.innerHTML=`Accélération selon l'axe Y:${aY}`;
            paZ.innerHTML=`Accélération selon l'axe Z:${aZ}`;
            
                
            if(aX>3){}
            });

            acl.start();
            
