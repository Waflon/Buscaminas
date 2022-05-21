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
                    if (cuadro.valor == 0){
                        buscarVaciosColindantes(cuadro,ArregloCuadros);
                        print(cuadro.vecinos)
                     }
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


function buscarVaciosColindantes(cuadro, ArregloCuadros){
    let lista = [];
    let indice = cuadro.columna + cuadro.fila * m;
    if (cuadro.valor == 0){
        if (cuadro.columna == 0){  //PRIMERA COLUMNA

            if (ArregloCuadros[indice+1].valor == 0){  // COLUMNA DERECHA
                lista.push(ArregloCuadros[indice+1]);
            }
            if (cuadro.fila > 0){
                if (ArregloCuadros[indice-m].valor == 0){ // FILA SUPERIOR
                    lista.push(ArregloCuadros[indice-m]);
                }
            }
            if (cuadro.fila < n-1){
                if (ArregloCuadros[indice+m].valor == 0){ // FILA INFERIOR
                    lista.push(ArregloCuadros[indice+m]);
                }
            }
            
        }else if (cuadro.columna == m-1){  //ULTIMA COLUMNA
            if (ArregloCuadros[indice-1].valor == 0){  // COLUMNA DERECHA
                print("derecha")
                ArregloCuadros[indice-1].clickeado = true;
                ArregloCuadros[indice-1].color = [0, 250, 150];
                lista.push(ArregloCuadros[indice-1]);
            }
            if (cuadro.fila > 0){
                if (ArregloCuadros[indice-m].valor == 0){ // FILA SUPERIOR
                    print("arriba");
                    ArregloCuadros[indice-m].clickeado = true;
                    ArregloCuadros[indice-m].color = [0, 250, 150];
                    lista.push(ArregloCuadros[indice-m]);
                }
            }
            if (cuadro.fila < n-1){
                if (ArregloCuadros[indice+m].valor == 0){ // FILA SUPERIOR
                    print("abajo");
                    ArregloCuadros[indice+m].clickeado = true;
                    ArregloCuadros[indice+m].color = [0, 250, 150];
                    lista.push(ArregloCuadros[indice+m]);
                }
            }
        }
        else if (cuadro.columna > 0 && cuadro.columna < m-1){
            if(cuadro.fila == 0){
                if (ArregloCuadros[indice-1].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice-1].clickeado){
                        print("izquierda")
                        lista.push(ArregloCuadros[indice-1]);
                    }
                }
                if (ArregloCuadros[indice+1].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice+1].clickeado){
                        print("derecha")
                        lista.push(ArregloCuadros[indice+1]);
                    }
                }
                if (ArregloCuadros[indice+m].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice+m].clickeado){
                        print("abajo")
                        lista.push(ArregloCuadros[indice+m]);
                    }
                }
            }
            if(cuadro.fila == m-1){
                if (ArregloCuadros[indice-1].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice-1].clickeado){
                        print("izquierda")
                        lista.push(ArregloCuadros[indice-1]);
                    }
                }
                if (ArregloCuadros[indice+1].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice+1].clickeado){
                        print("derecha")
                        lista.push(ArregloCuadros[indice+1]);
                    }
                }
                if (ArregloCuadros[indice-m].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice-m].clickeado){
                        print("arriba")
                        lista.push(ArregloCuadros[indice-m]);
                    }
                }
            }
            if (cuadro.fila >0 && cuadro.fila < n-1){
                if (ArregloCuadros[indice-1].valor == 0){  // COLUMNA IZQUIERDA
                    if(!ArregloCuadros[indice-1].clickeado){
                        print("izquierda")
                        lista.push(ArregloCuadros[indice-1]);
                    }
                    
                }
                if (ArregloCuadros[indice+1].valor == 0){  // COLUMNA DERECHA
                    if(!ArregloCuadros[indice+1].clickeado){
                        print("derecha")
                        lista.push(ArregloCuadros[indice+1]);
                    }
                }
                if (ArregloCuadros[indice-m].valor == 0){ // FILA SUPERIOR
                    if(!ArregloCuadros[indice - m].clickeado){
                        print("arriba")
                        lista.push(ArregloCuadros[indice-m]);
                    }
                }
                if (ArregloCuadros[indice+m].valor == 0){ // FILA SUPERIOR
                    if(!ArregloCuadros[indice + m].clickeado){
                        print("abajo");
                        lista.push(ArregloCuadros[indice+m]);
                    }
                } 
            }

            let listaVacios = [...lista];
            
            for(let i=listaVacios.length-1; i>=0; i--){
                listaVacios[i].clickeado = true;
                listaVacios[i].color = [0, 250, 150];
                listaVacios.splice(i,1);
            }
            print(lista)
            for (let l of lista){
                listaVacios = buscarVaciosColindantes(l, ArregloCuadros);
            }
            return listaVacios;
        }
        
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


