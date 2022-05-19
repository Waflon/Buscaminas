let ArregloCuadros = [];
let w, h; //anchos y altos de cada cuadro
//matriz
let n = 9;
let m = 9;
let gameState = 'menu'

function setup() {
    createCanvas(600, 600);
    w = width / n; // ancho que tendrá cada cuadro
    h = height / m;  // altura de cada cuadro
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            ArregloCuadros.push(new Cuadro(i * w, j * h, i, j));
        }
    }

    dibujarLineas();
    ArregloCuadros[0].bomba = true;
    ArregloCuadros[5].bomba = true;
    ArregloCuadros[6].bomba = true;
    ArregloCuadros[n + 4].bomba = true;
    ArregloCuadros[n + 5].bomba = true;
    ArregloCuadros[5 * n].bomba = true;
    ArregloCuadros[61].bomba = true;
    ArregloCuadros[62].bomba = true;
    ArregloCuadros[53].bomba = true;
    ArregloCuadros[78].bomba = true;
    ArregloCuadros[69].bomba = true;
    ArregloCuadros[70].bomba = true;
    ArregloCuadros[66].bomba = true;
    ArregloCuadros[6 * n + 5].bomba = true;
}

function draw() {
    if(gameState=='menu'){
        textSize(30);
        textAlign(CENTER, CENTER)
        text("Para empezar, presione Enter...", width/2, height/2);
    }   
    else if(gameState=='play'){
        for (let _ of ArregloCuadros) {
            _.dibujar();
        }
    }
    else if(gameState=='gameOver'){
        textSize(30);
        textAlign(CENTER, CENTER)
        text("GameOver, presione Enter...", width/2, height/2);
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
