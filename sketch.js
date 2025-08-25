  var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Millaray Dinamarca");
                select("#aprendizaje").html("a programar cosas bonitas");
            }
            function draw() {
                background(237,93,143);
                orbitControl();
                pointLight (255,255,255, valor/3, valor/5, 50);
                specularMaterial(255);
                shininess(50);
                metalness(1);
                fill(70,120,255);
                torus(valor/4, valor/4);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
