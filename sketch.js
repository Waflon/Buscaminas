let ArregloCuadros = [];
let w, h; //anchos y altos de cada cuadro
//matriz
let n = 9;
let m = 9;
let gameState = 'menu'


function llenarListaCuadros(ArregloCuadros){
    for (let fila = 0; fila < m; fila++) {
        for (let columna = 0; columna < n; columna++) {
            let lista = asignarVecinos(fila, columna)
            ArregloCuadros.push(new Cuadro(columna * w, fila * h, fila, columna, lista));
        }
    }
    return ArregloCuadros
}


function setup() {
    createCanvas(600, 600);
    w = width / n; // ancho que tendrá cada cuadro
    h = height / m;  // altura de cada cuadro
    llenarListaCuadros(ArregloCuadros)
    dibujarLineas();
    generarBombas();
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

