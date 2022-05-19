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

function verificarBordesIzq(cuadro) {
    //BORDE IZQUIERDO PARA CUALQUIER MATRIZ MxN  (5 cuadros colindantes para los bordes siempre)
    if (cuadro.fila == 0) {
        let indice = n * cuadro.columna;
        //cuadro de la derecha
        if (ArregloCuadros[indice + 1].bomba) {
            print("derecha")
            cuadro.valor += 1;
        }
        //cuadro de la derecha arriba
        if (ArregloCuadros[(indice - n) + 1].bomba) {
            cuadro.valor += 1;
            print("Arriba derecha")
        }

        //cuadro de la derecha abajo
        if (ArregloCuadros[(indice + n) + 1].bomba) {
            cuadro.valor += 1;
            print("Derecha abajo")
        }

        // cuadro superior
        if (ArregloCuadros[(indice - n)].bomba) {
            cuadro.valor += 1;
            print("Arriba")
        }
        //cuadro inferior 
        if (ArregloCuadros[(indice + n)].bomba) {
            cuadro.valor += 1;
            print("Abajo")
        }
    }
}

function verificarBordesDer(cuadro) {
    //BORDE DERECHO PARA CUALQUIER MATRIZ MxN  (5 cuadros colindantes para los bordes siempre)
    if (cuadro.fila == n - 1) {
        let indice = n * cuadro.columna;
        // superior izquierdo
        if (ArregloCuadros[indice - 2].bomba) {
            print("superior izquierdo");
            cuadro.valor += 1;
        }
        // superior
        if (ArregloCuadros[indice - 1].bomba) {
            print("superior");
            cuadro.valor += 1;
        }

        // izquierda
        if (ArregloCuadros[indice + n - 2].bomba) {
            print("izquierda");
            cuadro.valor += 1;
        }

        // inferior izquierdo
        if (ArregloCuadros[indice + 2 * n - 2].bomba) {
            print("izquierda abajo");
            cuadro.valor += 1;
        }

        // inferior
        if (ArregloCuadros[n * cuadro.columna + 2 * n - 1].bomba) {
            print("Inferior");
            cuadro.valor += 1;
        }

    }
}

function verificarBordesSup(cuadro) {

    if (cuadro.columna == 0) {
        //Izquierdo
        if (ArregloCuadros[cuadro.fila - 1].bomba) {
            print("Izquierdo");
            cuadro.valor += 1;
        }
        //Derecho
        if (ArregloCuadros[cuadro.fila + 1].bomba) {
            print("Derecho");
            cuadro.valor += 1;
        }
        //Abajo
        if (ArregloCuadros[n + cuadro.fila].bomba) {
            print("Abajo");
            cuadro.valor += 1;
        }
        //Abajo Izquierda
        if (ArregloCuadros[n + cuadro.fila - 1].bomba) {
            print("Abajo Izquierda");
            cuadro.valor += 1;
        }
        //Abajo Derecha
        if (ArregloCuadros[n + cuadro.fila + 1].bomba) {
            print("Abajo Derecha");
            cuadro.valor += 1;
        }
    }


}

function verificarBordesInf(cuadro) {

    let indice = cuadro.columna * n;

    if (cuadro.columna == m - 1) {
        if (ArregloCuadros[indice + cuadro.fila - 1].bomba) {
            print("Izquierda");
            cuadro.valor += 1;
        }
    }

    if (cuadro.columna == m - 1) {
        if (ArregloCuadros[indice + cuadro.fila +1].bomba) {
            print("Derecha");
            cuadro.valor += 1;
        }
    }

    if (cuadro.columna == m - 1) {
        if (ArregloCuadros[indice - n + cuadro.fila].bomba) {
            print("Arriba");
            cuadro.valor += 1;
        }
    }

    if (cuadro.columna == m - 1) {
        if (ArregloCuadros[indice - n + cuadro.fila - 1].bomba) {
            print("Arriba  Izquierda");
            cuadro.valor += 1;
        }
    }

    if (cuadro.columna == m - 1) {
        if (ArregloCuadros[indice - n + cuadro.fila + 1].bomba) {
            print("Arriba  Derecha");
            cuadro.valor += 1;
        }
    }
}

function verificarInternos(cuadro){
    let indice = n*cuadro.columna+cuadro.fila;
    
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
    
    print(cuadro.fila, cuadro.columna);
    if (cuadro.fila == 0 || cuadro.fila == n - 1) {
        if (cuadro.columna == 0 || cuadro.columna == m - 1) {
            verificarEsquinas(cuadro);
        }
        else {
            verificarBordesIzq(cuadro);
            verificarBordesDer(cuadro);
        }
    }
    else if (cuadro.columna == 0 || cuadro.columna == m - 1) {
        if (cuadro.fila !== 0 || cuadro.fila !== n - 1) {
            verificarBordesSup(cuadro);
            verificarBordesInf(cuadro);
        }
    }
    else {
        verificarInternos(cuadro);     
    }
}

function mouseClicked() {
    // RECORRE LOS CUADROS
    for (let cuadro of ArregloCuadros) {
        if (hoover(cuadro)) {
            if (!cuadro.clickeado) {
                calcularBombasVecinos(cuadro);
                if (cuadro.bomba) {
                    cuadro.color = [255, 0, 150];
                    return true;
                }
                cuadro.clickeado = true;
                cuadro.color = [0, 250, 150];
                return true;
            }
            return false;
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