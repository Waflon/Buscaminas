//Funciones recopiladas en un archivo para facilidad de lectura
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

function activarCuadro(ArregloCuadros){
    for (let cuadro of ArregloCuadros) {
        if (hoover(cuadro)) {

            if (!cuadro.clickeado) {
                //Deja inutilizable el boton
                cuadro.clickeado = true;
                cuadro.color = [0, 250, 150];
                if (cuadro.bomba) {
                    cuadro.color = [255, 0, 150];
                    //gameState = 'gameOver';
                    return true;
                }
                if (cuadro.valor == 0) {
                    checkearVacios(cuadro.vecinos, ArregloCuadros);
                }
                

                return true;
            }
            return false;
        }
    }
}

//funciones llamadas siempre por P5
function mouseClicked() {

    // SI EL ESTADO ES PLAY
    if (gameState == 'play') { // RECORRE LOS CUADROS
        activarCuadro(ArregloCuadros);
    }
    else {
        gameState = 'play';
    }

}


function checkearVacios(listaIndices, ArregloCuadros) {
    let lista = [];
    
    if (listaIndices[0] != undefined){
        print(listaIndices);

        for (let indice of listaIndices) {
            let objeto = ArregloCuadros[indice];
            if (objeto.valor == 0 && !objeto.clickeado) {
                
                objeto.clickeado = true;
                objeto.color = [0, 250, 150];
                for (let _ of objeto.vecinos){
                    if (ArregloCuadros[_].valor == 0 && !ArregloCuadros[_].clickeado){
                        lista.push(_);
                    }
                    if (ArregloCuadros[_].valor > 0 && !ArregloCuadros[_].clickeado){
                        ArregloCuadros[_].clickeado = true;
                        ArregloCuadros[_].color = [0, 250, 150];
                    }
                }
            }
            
        }

        return checkearVacios(lista, ArregloCuadros);;
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


