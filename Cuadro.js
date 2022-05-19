class Cuadro{
    constructor(posX, posY,  columna = 1, fila = 1, valor = 0){
        this.x = posX;
        this.y = posY;
        this.valor = valor;
        this.fila = fila ;
        this.columna = columna;
        this.bomba = false;
        this.clickeado = false;
        this.color = 100;
    }

    dibujar(){
        fill(this.color);
        strokeWeight(2)
        rect(this.x, this.y,  w,  h);
        textSize(40);
        textAlign(CENTER);  // Centra texto
        if (this.valor>0){
            fill(0);
            text(this.valor , this.x + w/2  , this.y + height/13 );
        }
    }
}

