let ArregloCuadros = [];
let w, h; //anchos y altos de cada cuadro
//matriz
let n = 9;
let m = 9;
let gameState = 'menu'


function llenarListaCuadros(){
    let lista = []
    for (let fila = 0; fila < m; fila++) {
        for (let columna = 0; columna < n; columna++) {
            let posX = columna * w;
            let posY = fila * h;
            let cuadro = new Cuadro(posX, posY, fila, columna) 
            lista.push(cuadro);
        }
    }
    return lista;
}

function reiniciarCuadros(){
    ArregloCuadros = []
    ArregloCuadros = llenarListaCuadros()  // retorna un arreglo con objetos Cuadro
    dibujarLineas();  // GRID
    for (let _ of ArregloCuadros){
        _.asignarValor(ArregloCuadros);  // El valor se asigna después ya que necesitan estar todas las bombas creadas
    }
}

function setup() {
    createCanvas(600, 600);
    button = createButton("Reiniciar");
    button.mousePressed(reiniciarCuadros);
    w = width / n; // ancho que tendrá cada cuadro
    h = height / m;  // altura de cada cuadro
    reiniciarCuadros()
}


function draw() {

    if (gameState == 'menu') {
        background(150);
        textSize(30);
        textAlign(CENTER, CENTER)
        text("Para empezar, presione Enter...", width / 2, height / 2);
    }
    else if (gameState == 'play') {
        for (let _ of ArregloCuadros) {
            _.dibujar();
        }
    }
    else if (gameState == 'gameOver') {
        textSize(30);
        textAlign(CENTER, CENTER)
        text("GameOver, presione Enter...", width / 2, height / 2);
    }

}

