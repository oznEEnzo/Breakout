var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//primeira linha de caixas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//segunda linha de caixas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

//criando raquete e bola
var raquete = createSprite(200, 375, 50, 15);
var bola = createSprite(200, 250, 20, 20);
var score=0;
var estadoJogo = "lancar";

function draw() {
  //mudar a cor de fundo
  background("white");
  
  //exibir pontuação
  textSize(15);
  stroke("red");
  text("Pontuação :"+score,300,20);
 //instruções do estado de jogo lançar. 
  if (estadoJogo == "lancar") {
    text("Pressione Enter para jogar", 100,200);
    //mover a bola ao pressionar a tecla enter
  if(keyDown("enter")){
    bola.velocityX = 3;
    bola.velocityY = 4;
  
  estadoJogo="jogar";
    
  }
  
  }
 //estado de jogo jogar.
  if (estadoJogo == "jogar") {
   //movimentar a raquete utilizando o mouse.
  raquete.x=World.mouseX; 
//instrução para mudança do estado do jogo para fim de jogo.
if (score==16 ||(bola.y>400)) {
   estadoJogo="fim";
 }
  
  }
  //estado do jogo fim.
  if (estadoJogo == "fim") {
  bola.velocityX=0;
  bola.velocityY=0;

//mensagem de fim de jogo.
stroke("red");
textSize(30);
text("FIM DE JOGO!", 100, 240);
    
    
  }
  
  
  
 
  
  //fazer a bola rebater na raquete e em três lados da tela
  createEdgeSprites();
  bola.bounceOff(rightEdge);
  bola.bounceOff(leftEdge);
  bola.bounceOff(topEdge);
  bola.bounceOff(raquete);


  
  //Destruir as caixas quando a bola as toca
if(bola.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(bola.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(bola.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(bola.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(bola.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(bola.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(bola.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(bola.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(bola.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(bola.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(bola.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(bola.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(bola.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(bola.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(bola.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(bola.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
