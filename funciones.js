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

function asignarVecinos(fila, columna) {
    let listaVecinos = [];

    //Vecinos de los Bordes
    if (fila == 0) {  // PRIMERA FILA

        if (columna == 0) {  //ESQUNA SUPERIOR IZQUIERDA
            listaVecinos.push(1);
            listaVecinos.push((columna + 1) * n);
            listaVecinos.push((columna + 1) * n + 1);
            return listaVecinos;
        }

        else if (columna == m - 1) {  //ESQUNA SUPERIOR DERECHA
            listaVecinos.push(n - 2);
            listaVecinos.push(2 * n - 2);
            listaVecinos.push(2 * n - 1);
            return listaVecinos;
        }

        else if (columna > 0 && columna < m - 1) {  //BORDE SUPERIOR
            listaVecinos.push(columna - 1);
            listaVecinos.push(columna + 1);
            listaVecinos.push(columna + n - 1);
            listaVecinos.push(columna + n);
            listaVecinos.push(columna + n + 1);
            return listaVecinos;
        }

    } else if (fila == n - 1) { //ULTIMA FILA

        if (columna == 0) {
            listaVecinos.push((n - 2) * m);
            listaVecinos.push((n - 2) * m + 1);
            listaVecinos.push((n - 1) * m + 1);
            return listaVecinos;
        } 

        else if (columna == m - 1) {  //ESQUINA INFERIOR DERECHA
            listaVecinos.push((n - 1) * m - 2);
            listaVecinos.push((n - 1) * m - 1);
            listaVecinos.push(n * m - 2);
            
            return listaVecinos;
        }

        else if (columna > 0 && columna < m - 1) {  //BORDE INFERIOR
            let indice = fila * m + columna;
            listaVecinos.push(indice - m - 1);
            listaVecinos.push(indice - m);
            listaVecinos.push(indice - m + 1);
            listaVecinos.push(indice - 1);
            listaVecinos.push(indice + 1);
            return listaVecinos;
        }

    } else if (fila > 0 && fila < n - 1) {  //EN MEDIO
        if (columna == 0) {  //BORDE IZQUIERDO

            let indice = fila * m;
            listaVecinos.push(indice - m);
            listaVecinos.push(indice - m + 1);
            listaVecinos.push(indice + 1);
            listaVecinos.push(indice + m);
            listaVecinos.push(indice + m + 1);
            return listaVecinos;
        } else if (columna == m - 1) {  //BORDE DERECHO

            let indice = fila * m + columna;
            listaVecinos.push(indice - m - 1);
            listaVecinos.push(indice - m);
            listaVecinos.push(indice - 1);
            listaVecinos.push(indice + m - 1);
            listaVecinos.push(indice + m);
            
            return listaVecinos;
        }
        else if (fila > 0 && fila < n - 1) {  //TODO LO INTERIOR

            let indice = columna + fila * m;
            listaVecinos.push(indice - m - 1);
            listaVecinos.push(indice - m);
            listaVecinos.push(indice - m + 1);
            listaVecinos.push(indice - 1);
            listaVecinos.push(indice + 1);
            listaVecinos.push(indice + m - 1);
            listaVecinos.push(indice + m);
            listaVecinos.push(indice + m + 1);
            return listaVecinos;
        }
    }
    return [];
}

function hoover(cuadro) {
    if (cuadro.x < mouseX && cuadro.y < mouseY && mouseX < cuadro.x + w && mouseY < cuadro.y + h) {
        return true;
    }
    return false;
}

function asignarValor(cuadro){
    print(cuadro.vecinos);
    for (let i of cuadro.vecinos){
        if(ArregloCuadros[i].bomba){
            cuadro.valor += 1;
        }
    }
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
    if (gameState == 'play') {
        // RECORRE LOS CUADROS
        for (let cuadro of ArregloCuadros) {
            if (hoover(cuadro)) {
                if (!cuadro.clickeado) {
                    cuadro.clickeado = true;
                    if (!cuadro.bomba) {
                        asignarValor(cuadro);
                    }
                    else if (cuadro.bomba) {
                        cuadro.color = [255, 0, 150];
                        cuadro.dibujar();
                        //gameState = 'gameOver';
                        return true;

                    }
                    //Deja inutilizable el boton
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
    }
    return false
}


