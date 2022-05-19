//Funciones recopiladas en un archivo para facilidad de lectura

function hoover(cuadro) {
    if (cuadro.x < mouseX && cuadro.y < mouseY && mouseX < cuadro.x + w && mouseY < cuadro.y + h) {
        return true;
    }
    return false;
}

function verificarEsquinas(cuadro) {
    if (cuadro.fila == 0) {

        if (cuadro.columna == 0) { 
            //ESQUNA SUPERIOR IZQUIERDA
            print("Esquina Superior Izquierda");
            if (ArregloCuadros[1].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[n].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[n + 1].bomba) {
                cuadro.valor += 1;
            }
        }
        else if (cuadro.columna == m - 1) { 
            //ESQUNA INFERIOR IZQUIERDA
            print("Esquina Inferior Izquierda");
            let indice = (cuadro.fila + 1 * (n)) * cuadro.columna + 1;
            print(indice);
            print(indice-5);
            print(indice +n -2);
            if (ArregloCuadros[indice].bomba) {
                print("derecha");
                cuadro.valor += 1;
            }
            if (ArregloCuadros[indice - n].bomba) {
                print("superior derecho");
                cuadro.valor += 1;
            }
            if (ArregloCuadros[indice - n-1].bomba) {
                print("superior");
                cuadro.valor += 1;
            }
        }

    } else if (cuadro.fila == n - 1) {
        //ESQUNA SUPERIOR DERECHA
        if (cuadro.columna == 0) { 
            print("Esquina Superior Derecha");
            if (ArregloCuadros[n - 2].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[n * 2 - 1].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[n * 2 - 2].bomba) {
                cuadro.valor += 1;
            }
        }
        //ESQUNA Inferior DERECHA
        else if (cuadro.columna == m - 1) { 
            print("Esquina Inferior Derecha");
            let indice = (cuadro.fila * n + cuadro.columna);
            if (ArregloCuadros[indice - 1].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[indice - n].bomba) {
                cuadro.valor += 1;
            }
            if (ArregloCuadros[indice - n - 1].bomba) {
                cuadro.valor += 1;
            }
        }
    }
}

function verificarBordesSup(cuadro) {  //Revisado
    //BORDE Superior PARA CUALQUIER MATRIZ MxN  (5 cuadros colindantes para los bordes siempre)
    if (cuadro.fila == 0) {
        //cuadro de la derecha
        if (ArregloCuadros[cuadro.columna + 1].bomba) {
            print("derecha")
            cuadro.valor += 1;
        }
        //cuadro de la Izquierda
        if (ArregloCuadros[cuadro.columna - 1].bomba) {
            print("izquierda")
            cuadro.valor += 1;
        }
        //cuadro de abajo
        if (ArregloCuadros[cuadro.columna + n].bomba) {
            print("abajo")
            cuadro.valor += 1;
        }
        //cuadro de abajo Izquierdo
        if (ArregloCuadros[cuadro.columna + n - 1].bomba) {
            print("abajo Izquierdo")
            cuadro.valor += 1;
        }
        //cuadro de abajo Derecho
        if (ArregloCuadros[cuadro.columna + n + 1].bomba) {
            print("abajo derecho")
            cuadro.valor += 1;
        }                  
    }
}

function verificarBordesInf(cuadro) {  // Revisado
    print(cuadro);
    //BORDE DERECHO PARA CUALQUIER MATRIZ MxN  (5 cuadros colindantes para los bordes siempre)
    if (cuadro.fila == n - 1) {
        
        let indice = n * cuadro.fila + cuadro.columna;
        print(indice)
        // Derecha
        if (ArregloCuadros[indice +1].bomba) {
            print("Derecha");
            cuadro.valor += 1;
        }

        // izquierda
        if (ArregloCuadros[indice -1].bomba) {
            print("izquierda");
            cuadro.valor += 1;
        }

        //Arriba
        if (ArregloCuadros[indice - n].bomba){
            print("Arriba");
            cuadro.valor +=1;
        }

        //Arriba Izquierda
        if (ArregloCuadros[indice - n -1].bomba){
            print("Arriba Izquierda");
            cuadro.valor +=1;
        }        
        //Arriba Derecha
        if (ArregloCuadros[indice - n +1].bomba){
            print("Arriba Derecha");
            cuadro.valor +=1;
        }      
    }
}

function verificarBordesIzq(cuadro) {  // Revisado
    
    if (cuadro.columna == 0) {
        let indice = cuadro.fila * n;

        //Abajo
        if (ArregloCuadros[indice + n].bomba) {
            print("Abajo");
            cuadro.valor += 1;
        }
        //Abajo derecha
        if (ArregloCuadros[indice + n + 1].bomba) {
            print("Abajo derecha");
            cuadro.valor += 1;
        }        
        //Derecha
        if (ArregloCuadros[indice + 1].bomba) {
            print("Derecha");
            cuadro.valor += 1;
        }       
        //Arriba
        if (ArregloCuadros[indice - n].bomba) {
            print("Arriba");
            cuadro.valor += 1;
        }
        //Arriba Derecha
        if (ArregloCuadros[indice - n + 1].bomba) {
            print("Arriba Derecha");
            cuadro.valor += 1;
        }        
    }


}

function verificarBordesDer(cuadro) {  //Revisado?

    let indice = cuadro.fila * n + cuadro.columna;
    print(indice );
    if (cuadro.columna == n - 1) {
        if (ArregloCuadros[indice - 1].bomba) {
            print("Izquierda");
            cuadro.valor += 1;
        }
        if (ArregloCuadros[indice - n].bomba) {
            print("Arriba");
            cuadro.valor += 1;
        }
        if (ArregloCuadros[indice + n ].bomba) {
            print("Abajo");
            cuadro.valor += 1;
        }
        if (ArregloCuadros[indice + n -1].bomba) {
            print("Abajo Izquierda");
            cuadro.valor += 1;
        }
        if (ArregloCuadros[indice - n - 1].bomba) {
            print("Arriba  Izquierda");
            cuadro.valor += 1;
        }
    }

}

function verificarInternos(cuadro){
    let indice = cuadro.columna+cuadro.fila*n;
    // Derecha
    if(ArregloCuadros[indice+1].bomba){
        print("derecha");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice-1].bomba){
        print("izquierda");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice-n].bomba){
        print("arriba");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice-n+1].bomba){
        print("arriba derecha");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice-n-1].bomba){
        print("arriba izquierda");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice+n].bomba){
        print("abajo");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice+n+1].bomba){
        print("abajo derecha");
        cuadro.valor += 1;
    }

    if(ArregloCuadros[indice+n-1].bomba){
        print("abajo izquierda");
        cuadro.valor += 1;
    }
}

function calcularBombasVecinos(cuadro) {
    if (cuadro.fila == 0 || cuadro.fila == n - 1) {
        if (cuadro.columna == 0 || cuadro.columna == m - 1) {
            verificarEsquinas(cuadro);
        }
        else {  
            verificarBordesSup(cuadro);
            verificarBordesInf(cuadro);
        }
    }
    else if (cuadro.columna == 0 || cuadro.columna == m - 1) {
        if (cuadro.fila !== 0 || cuadro.fila !== n - 1) {
           
            verificarBordesIzq(cuadro);
            verificarBordesDer(cuadro);
        }
    }
    else {
        verificarInternos(cuadro);     
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
    if (gameState=='play'){
        // RECORRE LOS CUADROS
        for (let cuadro of ArregloCuadros) {
            if (hoover(cuadro)) {
                if (!cuadro.clickeado) {
                    cuadro.clickeado = true;
                    if (!cuadro.bomba){
                        calcularBombasVecinos(cuadro);
                    }
                    else if (cuadro.bomba) {
                        cuadro.color = [255, 0, 150];
                        cuadro.dibujar();
                        gameState='gameOver';
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
    else{
        gameState='play';
    }
    
}

function keyPressed() {
    if (gameState=='menu'){
        if (keyCode === ENTER) {
            gameState = 'play';      
        }
    }
    return false
  }


