var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b1b721d4-902a-4ac6-b21d-d136866a9865","941dc146-fd76-4e3e-bb86-1e6d90ad5320","3cfe8b88-5ac3-4eb8-a1e6-09fbfc0e291c","351a653c-d7e3-4ec1-9b16-274e1ba49aee","2aec536f-c4d5-483f-b299-d10b7ecf3b38","4d881750-8a17-49c6-8202-30b21a8c9a62","567e991d-b0ae-4920-8c60-29c6f27b0fe5","96e5379c-2451-4967-ad9e-49f4e06d9bc5","c4ff4e8f-27e2-42ce-9a6f-54dfbe0e00aa","ee348fc3-ed2f-44f0-aec1-1fcd668ffc56","8135a88a-a7df-4e6e-868d-0596c748feaf","2731141e-0e8c-4f53-8c84-cf517da8d17a","7579f65b-a6a3-4c00-aeff-5b75364deeb3","1828a189-ed12-44b7-9548-d01f94bd70c4"],"propsByKey":{"b1b721d4-902a-4ac6-b21d-d136866a9865":{"name":"bull","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"HSkAHk2FwxdBVSFQn5ZXC1FnXreIqsoe","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b1b721d4-902a-4ac6-b21d-d136866a9865.png"},"941dc146-fd76-4e3e-bb86-1e6d90ad5320":{"name":"bull_big","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"DgZw7wHK4sZg9M3nqCd.OjDBrs7dIdHQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/941dc146-fd76-4e3e-bb86-1e6d90ad5320.png"},"3cfe8b88-5ac3-4eb8-a1e6-09fbfc0e291c":{"name":"boxhiter","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6iQeHpTKepG7sugAW34SpQr4msxPDlPL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3cfe8b88-5ac3-4eb8-a1e6-09fbfc0e291c.png"},"351a653c-d7e3-4ec1-9b16-274e1ba49aee":{"name":"boxhiter2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"o9CONCCV.TUcBx2PauqV7IQq.ngN9rZE","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/351a653c-d7e3-4ec1-9b16-274e1ba49aee.png"},"2aec536f-c4d5-483f-b299-d10b7ecf3b38":{"name":"boxhiter1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"XvSh93fa.y4qDJwLhKCYzao2m2Wcy_MC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/2aec536f-c4d5-483f-b299-d10b7ecf3b38.png"},"4d881750-8a17-49c6-8202-30b21a8c9a62":{"name":"pl","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3KATzdonY5JtUZGcqPSZdm2Mj0re86wT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4d881750-8a17-49c6-8202-30b21a8c9a62.png"},"567e991d-b0ae-4920-8c60-29c6f27b0fe5":{"name":"pl_tank","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Io0_YkEmIHDaQcAHmxOqNkktOEvCKt.j","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/567e991d-b0ae-4920-8c60-29c6f27b0fe5.png"},"96e5379c-2451-4967-ad9e-49f4e06d9bc5":{"name":"pl_speed","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"HHH.b7s7Ozxttrwb.3gM50OoqEQ1ydq4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/96e5379c-2451-4967-ad9e-49f4e06d9bc5.png"},"c4ff4e8f-27e2-42ce-9a6f-54dfbe0e00aa":{"name":"pl_big","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"SP4Pj7nJlfVO.mfpULoEDwSXxeNcCScB","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c4ff4e8f-27e2-42ce-9a6f-54dfbe0e00aa.png"},"ee348fc3-ed2f-44f0-aec1-1fcd668ffc56":{"name":"pl_big_shoot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NbGZ_ypUfgFXPKqU0YZZTQWMrIs.TRgA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ee348fc3-ed2f-44f0-aec1-1fcd668ffc56.png"},"8135a88a-a7df-4e6e-868d-0596c748feaf":{"name":"pl_shoot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FCMTS4akZtwETx6dhVazfjid8qYNDXUC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8135a88a-a7df-4e6e-868d-0596c748feaf.png"},"2731141e-0e8c-4f53-8c84-cf517da8d17a":{"name":"Bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"qkkZLMJ9qYlbY8qd26P50WR5Gdh7Em5p","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/2731141e-0e8c-4f53-8c84-cf517da8d17a.png"},"7579f65b-a6a3-4c00-aeff-5b75364deeb3":{"name":"badbull","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"8YxyTZutWC.FgQWr93D2UyZsavWOiBei","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/7579f65b-a6a3-4c00-aeff-5b75364deeb3.png"},"1828a189-ed12-44b7-9548-d01f94bd70c4":{"name":"barrel","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6HaOzzpfoOYCLo2iYo6t_LSqiKcUcxbj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1828a189-ed12-44b7-9548-d01f94bd70c4.png"}}};
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

//code by hans vink and andrew ball
//boss battle 0.2 beta
//this code was 
//published on november 30 at 10:02AM in 2021






  //variables
var fire = false;
var Bg = createSprite(200,200);
Bg.setAnimation("Bg");
var Pl = createSprite(200,200);
Pl.setCollider("circle",0,0,30);
Pl.scale = 1;
Pl.setAnimation("pl");
var upon = false;
var won = false;
var aon = false;
var lefton = false;
var don = false;
var righton = false;
var downon = false;
var son = false;
var speed = 0;
var big = 1;
var skillpoints = 2;
var health = 0;
var truehealth = 10;
var damge = 0;
var bullspeed = 0;
var bosshealth = 100;
var speedx = 1;
var wave = 1;
var tank = 1;
var shoot = true;
var urebig = false;
var uretank = false;
var urespeed = false;
var bbullit = createSprite(2000000,200000);
bbullit.setAnimation("badbull");
bbullit.setCollider("circle",0,0,20);
var bullit = createSprite(2000000,2000000);
var boss = createSprite(200,0);
boss.setAnimation("boxhiter1");
boss.scale =0.01;
bullit.setCollider("circle",0,0,10);



  //the main function


function draw() {
  
  
  //drawing sprites
drawSprites();
  
  
  //the boss spawning and health systems
  if(boss.y > 150){
    if(wave > 2){
         boss.setAnimation("boxhiter2");
         boss.scale = 1.2;
      boss.y = 170;
      fire = true;
      boss.setCollider("rectangle",0,0,40,70);
    }else{
      boss.setAnimation("boxhiter");
    }
  }else{
    boss.rotation = 90;
    fire = false;
    if(boss.scale < 0.8){
    boss.scale = boss.scale + 0.01;
    }
    boss.y = boss.y+2.3;
    bosshealth = 100*wave;
    boss.setAnimation("boxhiter1");
  }
  if(bosshealth<0){
    wave = wave + 1;
    boss.y = -100;
    bosshealth = 100*wave;
    boss.scale =0.001;
    boss.rotation = 0;
    skillpoints = skillpoints + 2;
  }
Pl.collide(boss);
  bullit.setAnimation("bull");
  
  
  //boss taking damage
 if(bullit.isTouching(boss)){
  boss.tint = "darkred";
  bosshealth = bosshealth - 1 - damge*big;
  bullit.x = 10000000;
  shoot = true;
  
 }else{
  boss.tint = "clear";
}
  
  
  
  //inhouse varibles
  var shootx = World.mouseX-Pl.x;
  var shooty = World.mouseY-Pl.y;
  var bsootx = Pl.x - boss.x;
  var bsooty = Pl.y - boss.y;
  
  
  //player movment
  if(keyDown("up")){
    if(won === false){
    Pl.y = Pl.y - speed*speedx - 3;
   upon = true; 
    }
  }else{
    upon = false;
  }
  if(keyDown("w")){
    if(upon === false){
    Pl.y = Pl.y - speed*speedx - 3 ;
   won = true; 
  }
  }else{
    won = false;
  }
  if(keyDown("down")){
    if(son === false){
    Pl.y = Pl.y + speed*speedx + 3;
   downon = true; 
    }
  }else{
    downon = false;
  }
  if(keyDown("s")){
    if(downon === false){
    Pl.y = Pl.y + speed*speedx + 3 ;
   son = true; 
  }
  }else{
    son = false;
  }
  if(keyDown("left")){
    if(aon === false){
    Pl.x = Pl.x - speed*speedx - 3;
   lefton = true; 
    }
  }else{
    lefton = false;
  }
  if(keyDown("a")){
    if(lefton === false){
    Pl.x = Pl.x - speed*speedx - 3;
   aon = true; 
  }
  }else{
    aon = false;
  }
  if(keyDown("right")){
    if(don === false){
    Pl.x = Pl.x + speed*speedx + 3;
   righton = true; 
    }
  }else{
    righton = false;
  }
  if(keyDown("d")){
    if(righton === false){
    Pl.x = Pl.x + speed*speedx + 3;
   don = true; 
  }
  }else{
    don = false;
  }
  
  
  //player aiming and shooting 
 Pl.pointTo(World.mouseX,World.mouseY );
  if(shoot === true){
  if(mouseWentDown("leftButton")||keyDown("e")){
    playSound("assets/category_poof/puzzle_game_click_fire_poof_02.mp3");
     bullit.x = Pl.x;
     bullit.y = Pl.y;
    bullit.rotation = Pl.rotation;
   bullit.setVelocity(shootx/(20-bullspeed), shooty/(20-bullspeed));
    shoot = false; 
    if(urebig === true){
      Pl.setAnimation("pl_big");
    }else{
      if(urespeed === true){
        Pl.setAnimation("pl_speed");
      }else{
        if(uretank === true){
          Pl.setAnimation("pl_tank");
        }else{
         Pl.setAnimation("pl_shoot");  
        }
      }
    }
  }
  }
  //upgarding your skills
  if(skillpoints >0){
if(keyWentDown("n")){
  if(speed===10){
  }else{
    if(skillpoints>0){
      speed = speed +1;
      skillpoints = skillpoints -1;
    }
  }
}
fill(rgb(76,81,81));
  text("Skill-points " +skillpoints, 0, 330);
  fill(rgb(50, 145, 135));
  text("Player-speed " +speed,0,345);
  if(keyWentDown("h")){
    if(health === 20){
    }else{
     health = health + 1;
     skillpoints = skillpoints -1;
     truehealth = health*10*tank;
    }
  }
  text("Health-extra " + health,0,360);
  if(keyWentDown("g")){
    if(bullspeed ===10 ){
    }else{
     bullspeed = bullspeed +1;
     skillpoints = skillpoints -1;
    }
  }
  text("bullet-speed " + bullspeed,0,375);
  if(keyWentDown("v")){
    if(damge ===100 ){
    }else{
     damge = damge +1;
     skillpoints = skillpoints -1;
    }
  }
    text("Bullet-damage " + damge,0,390); 
  }
 fill(rgb(76,81,81));
text("Boss HP "+bosshealth, 170,370);


  //player taking damage
if(Pl.isTouching(boss)){
  truehealth = truehealth - 1;
  bosshealth = bosshealth - 1;
}

  //death screen
textSize(30);
  text("HP "+truehealth,300,390);
  if(truehealth <1){
    Pl.x = 200;
    Pl.y = 400;
    background("white");
    wave = 1;
    text("how did you die",50,200);
    textSize(10);
    
    text("press space to try again",50,216);
    if(keyWentDown("space")){
      truehealth = health*10 + 10;
       speed = 0;
       skillpoints = 2;
       health = 0;
       damge = 0;
       bullspeed = 0;
    }
  }
  textSize(10);
  
  
  //player bullit outofbounds
  if(bullit.x > 500){
    shoot = true;
  }
  if(bullit.x < -100){
    shoot = true;
  }
  if(bullit.y > 500){
    shoot = true;
  }
  if(bullit.y < -100){
    shoot = true;
  }
  
  
  // showing what wave ure on
  text("Current-Wave "+wave,300,360);
  
  
  //win screen 
if(wave === 26){
   background("green");
  textSize(35);
  fill("yellow");
  text("Wow... you actualy won",10,200);
  textSize(15);
 text("press space to play again",10,216);
  Pl.x = 1000000000000000;
  if(keyWentDown("space")){
    Pl.x = 200;
    Pl.y = 500;
    skillpoints = 2;
    wave = 1;
    bosshealth = 100;
    speed = 0;
    health = 0;
    truehealth = 10;
    damge = 0;
 bullspeed = 0;
  }
}
fill("black");
textSize(10);


  //boss shooting and aiming
if(wave > 2){
  if(fire ===true){
  boss.pointTo(Pl.x,Pl.y);
  if(bbullit.isTouching(Pl)){
    if(bbullit.isTouching(Pl)){
      truehealth = truehealth - (wave-2);
    }
    bbullit.x = boss.x;
    bbullit.y = boss.y;
    bbullit.setVelocity(bsootx/(40),bsooty/(40));
    bbullit.pointTo(Pl.x,Pl.y);
    
    
    }else{
    if(bbullit.x  > 400|| bbullit.x < 0){
    bbullit.x = boss.x;
    bbullit.y = boss.y;
    bbullit.setVelocity(bsootx/(30), bsooty/(30));
  }
  if(bbullit.y > 400|| bbullit.y < -0){
    bbullit.x = boss.x;
    bbullit.y = boss.y;
    bbullit.setVelocity(bsootx/(30), bsooty/(30));
  }
  }
}
}
//evolving
if(urebig === true){
  Pl.setAnimation("pl_big");
  bullit.setAnimation("bull_big");
  big = 2;
}
if(urespeed === true){
  Pl.setAnimation("pl_speed");
  speedx = 2;
}
if(tank === true){
  Pl.setAnimation("pl_tank");
  tank = 2;
}
if(wave > 4){
  
  if(keyWentDown("y")){
    if(urespeed == false){
     urebig = true; 
    }
    if(keyWentDown("u")){
    if(urespeed == false && urebig == false){
     uretank = true; 
    }
    if(keyWentDown("i")){
    if(urebig == false && uretank == false){
     urespeed = true; 
    }
  
}
}
}
}
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
