//Funciones recopiladas en un archivo para facilidad de lectura
function generarBombas() {
    let c = 0;

    while (c < 20) {
        let i = Math.floor(Math.random() * n * m);
        if (!ArregloCuadros[i].bomba) {
            ArregloCuadros[i].bomba = true;
            c++;
        }
    }
}


function hoover(cuadro) {
    if (cuadro.x < mouseX && cuadro.y < mouseY && mouseX < cuadro.x + w && mouseY < cuadro.y + h) {
        return true;
    }
    return false;
}



function dibujarLineas() {
    stroke(255);
    for (let i = 0; i < n; i++) {
        line(i * w, 0, i * w, height);
    }
    for (let j = 0; j < m; j++) {
        line(0, j * h, width, j * h);
    }
}

//funciones llamadas siempre por P5
function mouseClicked() {

    // SI EL ESTADO ES PLAY
    if (gameState == 'play') {

        // RECORRE LOS CUADROS
        for (let cuadro of ArregloCuadros) {
            if (hoover(cuadro)) {

                if (!cuadro.clickeado) {
                    //Deja inutilizable el boton
                    cuadro.clickeado = true;

                    if (cuadro.bomba) {
                        cuadro.color = [255, 0, 150];
                        //gameState = 'gameOver';
                        return true;
                    }

                    cuadro.color = [0, 250, 150];
                    return true;
                }
                return false;
            }
        }
    }
    else {
        gameState = 'play';
    }

}

function keyPressed() {
    if (gameState == 'menu') {
        if (keyCode === ENTER) {
            gameState = 'play';
        }
    } else if (gameState == 'play') {
        if (keyCode === ESCAPE) {
            gameState = 'menu';
        }
    }
    return false
}


