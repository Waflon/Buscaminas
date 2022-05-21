class Cuadro {
    n = 9;
    m = 9;
    constructor(posX, posY, fila, columna) {
        this.x = posX;
        this.y = posY;
        this.fila = fila;
        this.columna = columna;
        this.valor = 0;
        this.bomba = false;
        this.clickeado = false;
        this.color = 100;
        this.vecinos = [];
        this.asignarVecinos();
        this.generarBomba();
    }

    generarBomba(){
        let i = Math.floor(Math.random() * 100);
        if (i<15){ // ASIGNAR BOMBAS CON UN 20 PORCIENTO DE PROBABILIDAD
            this.bomba = true;
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
    
    asignarValor(lista){
        for (let vecino of this.vecinos){
            if(lista[vecino].bomba){
                this.valor += 1;
            }
        }
    }

    asignarVecinos(){
        this.vecinos = [];  //limpia la lista de vecinos
        //Vecinos de los Bordes
        if (this.fila == 0) {  // PRIMERA FILA
    
            if (this.columna == 0) {  //ESQUNA SUPERIOR IZQUIERDA
                this.vecinos.push(1);
                this.vecinos.push((this.columna + 1) * n);
                this.vecinos.push((this.columna + 1) * n + 1);
            }
    
            else if (this.columna == m - 1) {  //ESQUNA SUPERIOR DERECHA
                this.vecinos.push(n - 2);
                this.vecinos.push(2 * n - 2);
                this.vecinos.push(2 * n - 1);
            }
    
            else if (this.columna > 0 && this.columna < m - 1) {  //BORDE SUPERIOR
                this.vecinos.push(this.columna - 1);
                this.vecinos.push(this.columna + 1);
                this.vecinos.push(this.columna + n - 1);
                this.vecinos.push(this.columna + n);
                this.vecinos.push(this.columna + n + 1);
            }
    
        } else if (this.fila == n - 1) { //ULTIMA FILA
    
            if (this.columna == 0) {
                this.vecinos.push((n - 2) * m);
                this.vecinos.push((n - 2) * m + 1);
                this.vecinos.push((n - 1) * m + 1);
            }
    
            else if (this.columna == m - 1) {  //ESQUINA INFERIOR DERECHA
                this.vecinos.push((n - 1) * m - 2);
                this.vecinos.push((n - 1) * m - 1);
                this.vecinos.push(n * m - 2);
            }
    
            else if (this.columna > 0 && this.columna < m - 1) {  //BORDE INFERIOR
                let indice = this.fila * m + this.columna;
                this.vecinos.push(indice - m - 1);
                this.vecinos.push(indice - m);
                this.vecinos.push(indice - m + 1);
                this.vecinos.push(indice - 1);
                this.vecinos.push(indice + 1);
            }
    
        } else if (this.fila > 0 && this.fila < n - 1) {  //EN MEDIO
            if (this.columna == 0) {  //BORDE IZQUIERDO
    
                let indice = this.fila * m;
                this.vecinos.push(indice - m);
                this.vecinos.push(indice - m + 1);
                this.vecinos.push(indice + 1);
                this.vecinos.push(indice + m);
                this.vecinos.push(indice + m + 1);

            } else if (this.columna == m - 1) {  //BORDE DERECHO
    
                let indice = this.fila * m + this.columna;
                this.vecinos.push(indice - m - 1);
                this.vecinos.push(indice - m);
                this.vecinos.push(indice - 1);
                this.vecinos.push(indice + m - 1);
                this.vecinos.push(indice + m);
            }
            else if (this.fila > 0 && this.fila < n - 1) {  //TODO LO INTERIOR (EL MÁS GENERAL)
    
                let indice = this.columna + this.fila * m;
                this.vecinos.push(indice - m - 1);
                this.vecinos.push(indice - m);
                this.vecinos.push(indice - m + 1);
                this.vecinos.push(indice - 1);
                this.vecinos.push(indice + 1);
                this.vecinos.push(indice + m - 1);
                this.vecinos.push(indice + m);
                this.vecinos.push(indice + m + 1);
            }
        }
    }

    
}

