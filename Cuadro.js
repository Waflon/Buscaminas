class Cuadro {
    n = 9;
    m = 9;
    constructor(posX, posY, fila, columna) {
        this.x = posX;
        this.y = posY;
        this.fila = fila;
        this.columna = columna;
        this.indice = fila * m + columna;
        this.valor = 0;
        this.bomba = false;
        this.clickeado = false;
        this.color = 100;
        this.vecinos = [];
        this.vecinosDiagonales = [];
        this.asignarVecinos();
        this.generarBomba();
    }

    generarBomba() {
        let i = Math.floor(Math.random() * 100);
        if (i < 10) { // ASIGNAR BOMBAS CON UN 20 PORCIENTO DE PROBABILIDAD
            this.bomba = true;
        }
    }

    Indices(llave1 = '', llave2 = '') {
        let i = this. indice;
        /*
        IZQUIERDA   M    DERECHA
         _______ _______ _______ 
        |       |       |       | 
        | i-m-1 | i - m | i-m+1 |  ARRIBA
        |_______|_______|_______|
        |       |       |       |
        | i - 1 |   i   | i + 1 |   N          // PARA TODA MATRIZ MXN DE 3x3 PARA ANALIZAR VECINOS PARA UN INDICE i
        |_______|_______|_______|
        |       |       |       |
        | i+m-1 | i + m | i+m+1 |  ABAJO
        |_______|_______|_______|

        */
        if (llave1 == 'ARRIBA') {
            if (llave2 == '') {  
                return [i + 1, i - 1, i + m, i + m + 1, i + m - 1]
            }
            else if (llave2 == 'IZQUIERDA') {
                //this.vecinosDiagonales = [i+m+1];  // ESQUINA DE ABAJO A LA DERECHA
                return [i + 1, i + m, i+m+1];
            }
            else if (llave2 == 'DERECHA') {
                return [i - 1, i + m, i + m - 1];
            }
        }
        else if (llave1 == 'ABAJO') {
            if (llave2 == '') {  
                return [i + 1, i - 1, i - m, i - m + 1, i - m - 1]
            }
            else if (llave2 == 'IZQUIERDA') {
                //this.vecinosDiagonales = [i-m+1];  // ESQUINA DE ABAJO A LA IZQUIERDA
                return [i + 1, i - m, i - m + 1];
            }
            else if (llave2 == 'DERECHA') {
                return [i - 1, i - m, i - m - 1];
            }
        }
        else if (llave1 == 'IZQUIERDA'){  //arreglar
            if (llave2 == '') {  
                return [i - m, i-m+1, i + 1, i + m, i+m+1];
            }
        }
        else if (llave1 == 'DERECHA'){  //arreglar
            if (llave2 == '') {  
                return [i - m, i-m-1, i - 1, i + m, i+m-1];
            }
        }
        else if (llave1 == 'CENTRO'){  //arreglar
            if (llave2 == '') {  
                return [i-m-1, i - m, i-m+1, i - 1, i + 1, i+m-1, i + m, i+m+1];
            }
        }
        return [];
    }

    asignarVecinos() {
        this.vecinos = [];  //limpia la lista de vecinos
        //Vecinos de los Bordes
        if (this.fila > 0 && this.fila < n - 1) {  //EN MEDIO
            if (this.columna == 0) {  //BORDE IZQUIERDO
                this.vecinos = this.Indices("IZQUIERDA");
            } else if (this.columna == m - 1) {  //BORDE DERECHO
                this.vecinos = this.Indices("DERECHA");
            }
            else if (this.columna > 0 && this.columna < n - 1) {  //TODO LO INTERIOR (EL MÁS GENERAL)
                this.vecinos = this.Indices("CENTRO");
            }
        }
         else if (this.fila == n - 1) { //ULTIMA FILA

            if (this.columna == 0) {  // Primera columna
                this.vecinos = this.Indices("ABAJO", "IZQUIERDA");
            }
            else if (this.columna == m - 1) {  //ESQUINA INFERIOR DERECHA
                this.vecinos = this.Indices("ABAJO", "DERECHA");
            }
            else if (this.columna > 0 && this.columna < m - 1) {  //BORDE INFERIOR
                this.vecinos = this.Indices("ABAJO");
            }

        } else if (this.fila == 0) {  // PRIMERA FILA

            if (this.columna == 0) {  //ESQUNA SUPERIOR IZQUIERDA
                this.vecinos = this.Indices("ARRIBA", "IZQUIERDA");
            }
            else if (this.columna == m - 1) {  //ESQUNA SUPERIOR DERECHA
                this.vecinos = this.Indices("ARRIBA", "DERECHA");
            }
            else if (this.columna > 0 && this.columna < m - 1) {  //BORDE SUPERIOR
                this.vecinos = this.Indices("ARRIBA");
            }

        }
    }

    

    dibujar() {
        fill(this.color);
        strokeWeight(2)
        rect(this.x, this.y, w, h);
        textSize(40);
        textAlign(CENTER);  // Centra texto
        if (this.clickeado && this.valor > 0 && !this.bomba) {
            fill(0);
            text(this.valor, this.x + w / 2, this.y + height / 13);
        }
    }

    asignarValor(lista) {
        for (let vecino of this.vecinos) {
            if (lista[vecino].bomba) {  // verifica si uno de los cuadros vecinos tiene una bomba
                this.valor += 1;
            }
        }
    }
}

