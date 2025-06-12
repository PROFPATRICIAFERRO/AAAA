// Variáveis globais
let fase = 0;
let nomeJogador = "";
let inputNome;
let botaoComecar;
let textoInicialX;
let tempoPiscar = 0;
let falaAtual = 0;
let imgColegio;

function preload() {
  imgColegio = loadImage('Colégio.jpg');
}

function setup() {
  createCanvas(800, 600);
  textFont('Arial');

  textoInicialX = width;

  inputNome = createInput();
  inputNome.position(width/2 - 100, height/2 + 50);
  inputNome.size(200, 30);
  inputNome.hide();

  botaoComecar = createButton("Vamos começar");
  botaoComecar.position(width/2 - 60, height/2 + 50);
  botaoComecar.size(120, 40);
  botaoComecar.mousePressed(() => {
    fase = 2;
    inputNome.hide();
    botaoComecar.hide();
    iniciarFase2();
  });
  botaoComecar.hide();

  cestoX = width / 2;
  caminhaoX = -200;
  caminhaoY = height - 120;
}

function draw() {
  if (fase === 0) fase0();
  else if (fase === 1) fase1();
  else if (fase === 2) fase2();
  else if (fase === 3) fase3();
  else if (fase === 3.5) fase3_5();
  else if (fase === 4) fase4();
  else if (fase === 5) faseFinal();
}

function fase0() {
  background(0, 0, 128);
  fill(255);
  textSize(40);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);

  text("Agrinho: Campoliga Cresce com Você", textoInicialX, height / 2);
  textoInicialX -= 3;
  if (textoInicialX < -500) textoInicialX = width;

  tempoPiscar++;
  if (tempoPiscar % 60 < 30) {
    if (imgColegio) {
      imageMode(CENTER);
      let imgWidth = 300;
      let imgHeight = (imgColegio.height * imgWidth) / imgColegio.width;
      image(imgColegio, width/2, height/3, imgWidth, imgHeight);
    }
    
    fill(255);
    rect(width/2 - 100, height/2 + 100, 200, 60, 10);
    fill(0, 0, 128);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("COMEÇAR", width/2, height/2 + 130);
  }

  if (mouseIsPressed) {
    if (mouseX > width/2 - 100 && mouseX < width/2 + 100 &&
        mouseY > height/2 + 100 && mouseY < height/2 + 160) {
      fase = 1;
      textoInicialX = width;
      delayInputShow();
    }
  }
}

// ... (continue com o restante do código que você já tem para as outras fases)
// Certifique-se de incluir TODAS as funções que estavam no seu código original
