var boss=3;var bosstime=0;var bossStage=0;var bosstimetemp=0;var yellow=0;var sus =0; var temp=0;var time2=0;
function preload() {
  playimage = loadImage("./images/play.png");
  settingimage = loadImage("./images/help.png");
  gobackimage = loadImage("./images/goback.png");
  keyimage = loadImage("./images/key.png");
  tImage=loadImage("./images/teleportimage.png");
  trasereimage=loadImage("./images/treasure.png");
  susimage=loadImage("./images/sus.png");
};
function create4(){
  gg1 = createSprite(20, -3407, 20, 20);
  gg2 = createSprite(70, -3407, 20, 20);
  gg3 = createSprite(120, -3407, 20, 20);
  gg4 = createSprite(170, -3407, 20, 20);
  gg5 = createSprite(220, -3407, 20, 20);
  gg6 = createSprite(270, -3407, 20, 20);
  gg7 = createSprite(320, -3407, 20, 20);
  gg8 = createSprite(370, -3407, 20, 20);
  boss1 = createSprite(370, -3500, 40, 40);
  a1 = createSprite(3300, -3650, 7, 7);
  a2 = createSprite(3300, -3550, 7, 7);
  a3 = createSprite(3300, -3550, 7, 7);
  a4 = createSprite(3300, -3550, 15, 15);
  a5 = createSprite(3300, -3550, 7, 7);
  b1 = createSprite(3300, -3550, 15, 15);
  b2 = createSprite(3300, -3550, 15, 15);
  b3 = createSprite(3300, -3550, 15, 15);
  b4 = createSprite(3300, -3550, 15, 15);
  b5 = createSprite(3300, -3550, 15, 15);
  b6 = createSprite(3300, -3550, 15, 15);
  b7 = createSprite(3300, -3550, 15, 15);
  b8 = createSprite(3300, -3550, 15, 15);
  box65 = createSprite(200, -4000, 400, 15);
  ivbox65 = createSprite(200, -4001, 400, 15);
  treasure = createSprite(350, -4031, 400, 15);
  treasure.addImage(trasereimage);
  treasure.scale=0.1
  gift = createSprite(350, -4031, 400, 15);
  gift.visible=false;
  gift.addImage(susimage);
  gift.scale=0.1;};
function pro3(){
  console.log(bosstime)
  if(camera.y===-3200){boss1.velocityY = boss1.velocityY + 0.5;bosstimetemp++;};
  if(bosstimetemp>20){bosstime++;bosstimetemp=0}
  textSize(24);fill("black");textAlign("center");text(`boss:${boss}`,200,-3350)
  ivbox65.visible=false
  gg1.shapeColor = '#a37708';
   gg2.shapeColor = '#a37708';
   gg3.shapeColor = '#a37708';
   gg4.shapeColor = '#a37708';
   gg5.shapeColor = '#a37708';
   gg6.shapeColor = '#a37708';
   gg7.shapeColor = '#a37708';
   gg8.shapeColor = '#a37708';
   boss1.shapeColor='black';
   a1.shapeColor='red';
   a2.shapeColor='red';
   a3.shapeColor='red';
   a4.shapeColor='red';
   a5.shapeColor='red';
   b1.shapeColor='red';
   b2.shapeColor='red';
   b3.shapeColor='red';
   b4.shapeColor='red';
   b5.shapeColor='red';
   b6.shapeColor='red';
   b7.shapeColor='red';
   b8.shapeColor='red';
   box65.shapeColor='green';
   red.collide(box63);
   red.collide(box65);
   boss1.collide(box63)
};
function jump2(){
  if(bosstime>4){
  if(bosstime===5){a1.x=boss1.x-30;a1.y=boss1.y;a1.velocityX=-8-(bosstime/80)};
  if(bosstime===10){a2.x=boss1.x-30;a2.y=boss1.y;a2.velocityX=-8-(bosstime/80)};
  if(bosstime===15){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===20){a1.x=boss1.x-30;a1.y=boss1.y;a1.velocityX=-8-(bosstime/80)};
  if(bosstime===25){a2.x=boss1.x-30;a2.y=boss1.y;a2.velocityX=-8-(bosstime/80)};
  if(bosstime===35){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===40){a1.x=boss1.x-30;a1.y=boss1.y;a1.velocityX=-8-(bosstime/80)};
  if(bosstime===45){a2.x=boss1.x-30;a2.y=boss1.y;a2.velocityX=-8-(bosstime/80)};
  if(bosstime===55){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===60){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===65){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===70){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===75){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===80){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===85){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===90){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===95){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===100){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===100){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===104){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===105){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===109){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===110){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===114){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===118){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===201){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===205){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  if(bosstime===208){a3.x=boss1.x-30;a3.y=boss1.y;a3.velocityX=-8-(bosstime/80)};
  };if(bosstime>19){
  if(bosstime===25||b1.y>box63.y+900){
    b1.x=gg1.x;b1.y=gg1.y;
    b1.setVelocity(0,7);
  }if(bosstime===20||b2.y>box63.y+1200){
    b2.x=gg2.x;b2.y=gg1.y;
    b2.setVelocity(0,7);
  }if(bosstime===25||b3.y>box63.y+900){
    b3.x=gg3.x;b3.y=gg1.y;
    b3.setVelocity(0,7);
  } if(bosstime===20||b4.y>box63.y+1200){
    b4.x=gg4.x;b4.y=gg1.y;
    b4.setVelocity(0,7);
  } if(bosstime===25||b5.y>box63.y+900){
    b5.x=gg5.x;b5.y=gg1.y;
    b5.setVelocity(0,7);
  } if(bosstime===20||b6.y>box63.y+1200){
    b6.x=gg6.x;b6.y=gg1.y;
    b6.setVelocity(0,7);
  } if(bosstime===25||b7.y>box63.y+900){
    b7.x=gg7.x;b7.y=gg1.y;
    b7.setVelocity(0,7);
  }}
  textSize(28);
  textAlign("center");
  fill('black');
  text('The CITY Of Square',200,-4330);
  textSize(20);
  text(`Time taken:${time2}  (game sec)`,200,-4300);
  textSize(20);
  text('-------------------------------------------',200,-4270);
  text('made by Tanmay',200,-4240);
  textSize(14)
  textAlign('center')
  text('discord--https://discord.gg/BUSFbfpH',200,-4200);
  text('the village of square(link in discord server too)',200,-4180);
  text('https://tanmay-agarwal-24.github.io/The-village-of-Square',200,-4160);
  textSize(15)
  fill('red')
  if(keys===0&&temp===0){
  text('you need key',320,-4120);
  text('to open trasure',320,-4105);
  text('(key was somewhere',320,-4090);
  text('(hidden in game)',320,-4075);
  }
  if(temp===0&&keys===1){
    fill('green');
    text('you have key',320,-4120);
  text('you can open trasure',320,-4105);
  text('touch treasure to open it',320,-4090);

  }
  if(temp===1){
    textSize(14);
    fill('red');
    text('YOU FIND A SUS IN BOX',310,-4085);
  text('LOOOOOOOOL',310,-4070);
 }
  if(red.isTouching(a1)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;a1.x=5000;sus=0;};
  if(red.isTouching(a2)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;a2.x=5000;sus=0;};
  if(red.isTouching(a3)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;a3.x=5000;sus=0;};
  if(red.isTouching(a4)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;a4.x=5000;sus=0;};
  if(red.isTouching(a5)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;a5.x=5000;sus=0;};
  if(red.isTouching(b1)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b1.x=5000;sus=0;};
  if(red.isTouching(b2)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b2.x=5000;sus=0;};
  if(red.isTouching(b3)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b3.x=5000;sus=0;};
  if(red.isTouching(b4)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b4.x=5000;sus=0;};
  if(red.isTouching(b5)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b5.x=5000;sus=0;};
  if(red.isTouching(b6)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b6.x=5000;sus=0;};
  if(red.isTouching(b7)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b7.x=5000;sus=0;};
  if(red.isTouching(b8)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b8.x=5000;sus=0;};
  if(red.isTouching(boss1)){boss=3;bosstime=0;bossStage=0;bosstimetemp=0;yellow=0;boss1.y=-3500;red.x=50;b8.x=5000;sus=0;};
  if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox65)) { red.velocityY = -9 }};
  if (red.isTouching(treasure)&&keys===1) {
    gift.visible=true;
    treasure.x=10000;
    temp=1;
  }; 
  if(bosstime===40&&boss==3){
  a4.x=370
  a4.y=-3600
  a4.velocityY = a4.velocityY + 0.5
  };
  if(bosstime===80&&boss==2){
    a4.x=370
    a4.y=-3600
    a4.velocityY = a4.velocityY + 0.5
  };
  if(bosstime===125){
      a4.x=370
      a4.y=-3600
      a4.velocityY = a4.velocityY + 0.5
    };
  if(a4.isTouching(boss1)){
    boss--;
    a4.x=370
    a4.y=-3600
    a4.velocityY=0;
    if(boss==0){
      red.y=-4200
      time2=time
    }
  };
  if(boss==0){
    camera.x=200;
    camera.y=-4200; 
  };
};
function create3() {box18 = createSprite(360, -1006, 70, 5);ivbox18 = createSprite(360, -1007, 70, 5);box19 = createSprite(500, -1046, 5, 200);t1 = createSprite(475, -946, 50, 50);box20 = createSprite(1050, -950, 400, 15);ivbox20 = createSprite(1050, -951, 400, 15);box21 = createSprite(1250, -1150, 15, 400);box22 = createSprite(850, -1150, 15, 400);key1 = createSprite(1200, -980, 20, 20);key1.addImage(keyimage);key1.scale=0.04;box23 = createSprite(260, -1066, 40, 5);ivbox23 = createSprite(260, -1067, 40, 5);box24 = createSprite(160, -1126, 40, 5);ivbox24 = createSprite(160, -1127, 40, 5);box25 = createSprite(60, -1186, 40, 5);ivbox25 = createSprite(60, -1187, 40, 5);box26 = createSprite(160, -1246, 40, 5);ivbox26 = createSprite(160, -1247, 40, 5);box27 = createSprite(260, -1306, 40, 5);ivbox27 = createSprite(260, -1307, 40, 5);box28 = createSprite(360, -1366, 40, 5);ivbox28 = createSprite(360, -1367, 40, 5);box29 = createSprite(260, -1426, 40, 5);ivbox29 = createSprite(260, -1427, 40, 5);box30 = createSprite(160, -1486, 40, 5);ivbox30 = createSprite(160, -1487, 40, 5);box31 = createSprite(60, -1546, 40, 5);ivbox31 = createSprite(60, -1547, 40, 5);box32 = createSprite(160, -1606, 40, 5);ivbox32 = createSprite(160, -1607, 40, 5);box33 = createSprite(300, -1606, 70, 5);ivbox33 = createSprite(300, -1607, 70, 5);box34 = createSprite(350, -1676, 50, 5);ivbox34 = createSprite(350, -1677, 50, 5);t2 = createSprite(350, -1706, 10, 10);box35 = createSprite(200, -1876, 400, 5);ivbox35 = createSprite(200, -1877, 400, 5);t2.addImage(tImage);t2.scale=0.1;box36 = createSprite(250, -1926, 25, 25);ivbox36 = createSprite(250, -1927, 25, 25);box37 = createSprite(350, -1916, 20, 20);ivbox37 = createSprite(350, -1917, 20, 20);box38 = createSprite(120, -1946, 20, 20);ivbox38 = createSprite(120, -1947, 20, 20);box39 = createSprite(185, -1986, 20, 20);ivbox39 = createSprite(185, -1987, 20, 20);box40 = createSprite(55, -1983, 15, 15);ivbox40 = createSprite(55, -1984, 15, 15);box41 = createSprite(315, -1980, 25, 25);ivbox41 = createSprite(315, -1981, 25, 25);box42 = createSprite(225, -2020, 15, 15);ivbox42 = createSprite(225, -2021, 15, 15);box43 = createSprite(115, -2033, 35, 35);ivbox43 = createSprite(115, -2034, 35, 35);box44 = createSprite(340, -2053, 30, 30);ivbox44 = createSprite(340, -2054, 30, 30);box45 = createSprite(250, -2166, 25, 25);ivbox45 = createSprite(250, -2167, 25, 25);box46 = createSprite(185, -2126, 20, 20);ivbox46 = createSprite(185, -2127, 20, 20)
box47 = createSprite(55, -2123, 15, 15);ivbox47 = createSprite(55, -2124, 15, 15);box48 = createSprite(315, -2120, 25, 15);ivbox48 = createSprite(315, -2121, 25, 15);box49 = createSprite(115, -2173, 35, 35);ivbox49 = createSprite(115, -2174, 35, 35);box50 = createSprite(340, -2193, 30, 30);ivbox50 = createSprite(340, -2194, 30, 30);box51 = createSprite(250, -2266, 25, 25);ivbox51 = createSprite(250, -2267, 25, 25);box52 = createSprite(185, -2226, 20, 20);ivbox52 = createSprite(185, -2227, 20, 20);box53 = createSprite(55, -2223, 15, 15);ivbox53 = createSprite(55, -2224, 15, 15);box54 = createSprite(315, -2220, 25, 15);ivbox54 = createSprite(315, -2221, 25, 15);box55 = createSprite(115, -2273, 35, 35);ivbox55 = createSprite(115, -2274, 35, 35);box56 = createSprite(340, -2313, 30, 30);ivbox56 = createSprite(340, -2314, 30, 30);box57 = createSprite(250, -2386, 25, 25);ivbox57 = createSprite(250, -2387, 25, 25);box58 = createSprite(185, -2346, 20, 20);ivbox58 = createSprite(185, -2347, 20, 20);box59 = createSprite(55, -2343, 15, 15);ivbox59 = createSprite(55, -2344, 15, 15);box60 = createSprite(315, -2340, 25, 15);ivbox60 = createSprite(315, -2341, 25, 15);box61 = createSprite(115, -2393, 35, 35);ivbox61 = createSprite(115, -2394, 35, 35);box62 = createSprite(340, -2413, 30, 30);ivbox62 = createSprite(340, -2414, 30, 30);t3 = createSprite(200, -2500, 30, 30);box63 = createSprite(200, -3000, 400, 6);ivbox63 = createSprite(200, -3001, 400, 6);t3.addImage(tImage);t3.scale=0.1;box64 = createSprite(1090, -950, 250, 15.1);create4();};function pro2() {ivbox18.visible = false;box19.visible = false;t1.visible = false;ivbox20.visible = false;ivbox23.visible = false;ivbox24.visible = false;ivbox25.visible = false;ivbox26.visible = false;ivbox27.visible = false;ivbox28.visible = false;ivbox29.visible = false;ivbox30.visible = false;ivbox31.visible = false;ivbox32.visible = false;ivbox33.visible = false;ivbox34.visible = false;ivbox35.visible = false;ivbox36.visible = false;ivbox37.visible = false;ivbox38.visible = false;ivbox39.visible = false;ivbox40.visible = false;ivbox41.visible = false;ivbox43.visible = false;ivbox44.visible = false;ivbox42.visible = false;ivbox45.visible = false;ivbox46.visible = false;ivbox47.visible = false;ivbox48.visible = false;ivbox49.visible = false;ivbox50.visible = false;ivbox51.visible = false;ivbox52.visible = false;ivbox53.visible = false;ivbox54.visible = false;ivbox55.visible = false;
ivbox56.visible = false;ivbox57.visible = false;ivbox58.visible = false;ivbox59.visible = false;ivbox60.visible = false;ivbox61.visible = false;ivbox62.visible = false;ivbox63.visible = false;box18.shapeColor = 'green';box19.shapeColor = 'green';box20.shapeColor = 'green';box21.shapeColor = 'green';box22.shapeColor = 'green';box23.shapeColor = 'green';box24.shapeColor = 'green';box25.shapeColor = 'green';box26.shapeColor = 'green';box27.shapeColor = 'green';box28.shapeColor = 'green';box29.shapeColor = 'green';box30.shapeColor = 'green';box31.shapeColor = 'green';box32.shapeColor = 'green';box33.shapeColor = 'green';box34.shapeColor = 'green';box35.shapeColor = 'green';box36.shapeColor = 'green';box37.shapeColor = 'green';box38.shapeColor = 'green';box39.shapeColor = 'green';box40.shapeColor = 'green';box41.shapeColor = 'green';box42.shapeColor = 'green';box43.shapeColor = 'green';box44.shapeColor = 'green';box45.shapeColor = 'green';box46.shapeColor = 'green';box47.shapeColor = 'green';box48.shapeColor = 'green';box49.shapeColor = 'green';box50.shapeColor = 'green';box52.shapeColor = 'green';box51.shapeColor = 'green';box53.shapeColor = 'green';box54.shapeColor = 'green';box55.shapeColor = 'green';box56.shapeColor = 'green';box57.shapeColor = 'green';box58.shapeColor = 'green';box59.shapeColor = 'green';box60.shapeColor = 'green';box61.shapeColor = 'green';box62.shapeColor = 'green';box63.shapeColor = 'green';   if (red.isTouching(box64)){box64.shapeColor="green"}else{box64.shapeColor = 'skyblue';};
red.collide(box18);red.collide(box19);red.collide(box20);red.collide(box21);red.collide(box22);red.collide(box23);red.collide(box24);red.collide(box25);red.collide(box26);red.collide(box27);red.collide(box28);red.collide(box29);red.collide(box30);red.collide(box31);red.collide(box32);red.collide(box33);red.collide(box35);red.collide(box34);red.collide(box35);red.collide(box36);red.collide(box37);red.collide(box38);red.collide(box39);red.collide(box40);red.collide(box41);red.collide(box42);red.collide(box43);red.collide(box44);red.collide(box45);red.collide(box46);red.collide(box47);red.collide(box48);red.collide(box49);red.collide(box50);red.collide(box51);red.collide(box52);red.collide(box53);red.collide(box54);red.collide(box55);red.collide(box56);red.collide(box57);red.collide(box58);red.collide(box59);red.collide(box60);red.collide(box61);red.collide(box62);red.collide(box63);pro3();};function jump() {if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(INVGROUND1)) { red.velocityY = -9 } };
if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox1)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox2)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox3)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox4)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox6)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox5)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox8)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox9)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox10)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox11)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox12)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox13)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox14)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox15)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox16)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox17)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox18)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox20)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox23)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox24)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox25)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox26)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox27)) { red.velocityY = -9 } };
if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox28)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox29)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox30)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox31)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox32)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox33)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox34)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox36)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox37)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox35)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox38)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox39)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox40)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox41)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox43)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox42)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox44)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox45)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox46)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox47)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox48)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox49)) { red.velocityY = -9 } };
if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox50)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox50)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox51)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox52)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox53)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox54)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox55)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox56)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox57)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox58)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox59)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox60)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox61)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox62)) { red.velocityY = -9 } };if (keyDown(UP_ARROW) || keyDown(32) || keyDown(87)) { if (red.isTouching(ivbox63)) { red.velocityY = -9 } };if (red.isTouching(op1)) { red.y = -283; red.x = 380 };if (red.isTouching(op2)) { red.y = -283; red.x = 380 };if (red.isTouching(t1)) { red.x = 875; camera.x = 1050; red.y = -1000; };if (red.isTouching(key1)) {keys=1;red.x=350;red.y=-1020.5;camera.x=200;};if (red.isTouching(t2)){red.y=-1890; red.x=150;};if (red.isTouching(t3)){red.y=-3010; red.x=50;};jump2();};
function times() { temptime = temptime + 1; if (temptime > 10) { temptime = 0; time = time + 1; text(time, 200, 10000); } }; function create1() { createCanvas(400, 400); play = createSprite(200, 180, 70, 10); play.addImage(playimage); play.scale = 0.5; setting = createSprite(380, 20, 10, 10); setting.addImage(settingimage); setting.scale = 0.2; camera.x = 0; camera.y = 0; goback = createSprite(1000, 280); goback.addImage(gobackimage); goback.scale = 0.1; red = createSprite(200, -220, 20, 20) }; function stateChange() { if (state === "intro") { camera.x = 200; camera.y = 200; background("skyblue"); fill("red"); textSize(34); textFont("inconsolata"); text("The CITY of SQUARE", 40, 70); if (mousePressedOver(play)) { state = "l-1" }; if (mousePressedOver(setting)) { state = "help" } }; if (state === "help") { background("gray"); camera.x = 1000; camera.y = 200; fill("red"); textSize(34); textFont("inconsolata"); text("Help", 970, 50); fill("black"); textSize(24); text("use arrows and wsad keys to move", 830, 80); text("space button to jump", 830, 110); text("falling is good?(kidding)", 830, 140); text("there is hidden keys in game for box", 830, 170); text("go back", 965, 350); if (mousePressedOver(goback)) { state = "intro" } }; if (state === "l-1") { background("skyblue"); if(red.y<-400&&red.y>-3000){camera.y = red.y;}else if(red.y<-3000){camera.y=-3200}else{camera.y=-400} control(); times() } }; function control() { red.velocityY = red.velocityY + 0.5; if (keyDown("A") || keyDown(LEFT_ARROW)) { red.velocityX = -5 }; if (keyDown("D") || keyDown(RIGHT_ARROW)) { red.velocityX = 5 };; if (keyWentUp("A") || keyWentUp(LEFT_ARROW)) { red.velocityX = 0 }; if (keyWentUp("D") || keyWentUp(RIGHT_ARROW)) { red.velocityX = 0 } }; var state = "intro"; var time = 00; var temptime = 00;var keys=0; function setup() { create1(); create2() }; function draw() { background("skyblue"); stateChange(); properties(); drawSprites(); jump() };
function properties() {INVGROUND1.visible = false; ivbox1.visible = false; ivbox2.visible = false; ivbox3.visible = false; ivbox4.visible = false; ivbox5.visible = false; ivbox6.visible = false; ivbox8.visible = false; ivbox9.visible = false; ivbox10.visible = false; ivbox11.visible = false; ivbox12.visible = false; ivbox13.visible = false; ivbox14.visible = false; ivbox15.visible = false; ivbox16.visible = false; ivbox17.visible = false; GROUND1.shapeColor = 'black'; GROUNDR1.shapeColor = 'black'; GROUNDL1.shapeColor = 'black'; red.shapeColor = 'red'; box1.shapeColor = 'green'; box2.shapeColor = 'green'; box3.shapeColor = 'green'; box4.shapeColor = 'blue'; box5.shapeColor = 'green'; box6.shapeColor = 'green'; box7.shapeColor = 'green'; box8.shapeColor = 'green'; box9.shapeColor = 'green'; box10.shapeColor = 'green'; box12.shapeColor = 'green'; box11.shapeColor = 'green'; box13.shapeColor = 'green'; box14.shapeColor = 'green'; box15.shapeColor = 'green'; box17.shapeColor = 'green'; box16.shapeColor = 'green'; op1.shapeColor = 'red'; op2.shapeColor = 'red'; red.collide(GROUND1); if (red.y < box18.y || red.y > box17.y) {red.collide(GROUNDL1)};red.collide(GROUNDR1); red.collide(box1); red.collide(box2); red.collide(box3); red.collide(box4); red.collide(box5); red.collide(box6); red.collide(box7); red.collide(box8); red.collide(box9); red.collide(box10); red.collide(box11); red.collide(box12); red.collide(box13); red.collide(box14); red.collide(box15); red.collide(box16); red.collide(box17); pro2()};function create2() {
GROUND1 = createSprite(200, -200, 400, 5); GROUNDL1 = createSprite(398, -2200, 6, 4000); GROUNDR1 = createSprite(2, -2200, 6, 4000); INVGROUND1 = createSprite(200, -203, 400, 5); box1 = createSprite(350, -270, 100, 5); ivbox1 = createSprite(350, -273, 100, 5); box2 = createSprite(170, -313, 40, 5); ivbox2 = createSprite(170, -316, 40, 5); box3 = createSprite(40, -333, 70, 5); ivbox3 = createSprite(40, -336, 70, 5); box4 = createSprite(125, -456, 150, 5); ivbox4 = createSprite(125, -455, 130, 5); box5 = createSprite(240, -410, 100, 5); ivbox5 = createSprite(240, -411, 100, 5); box6 = createSprite(26, -360, 40, 5); ivbox6 = createSprite(26, -363, 40, 5); box7 = createSprite(46, -347.5, 5, 30); box8 = createSprite(325, -486, 50, 5); ivbox8 = createSprite(325, -487, 50, 5); box9 = createSprite(370, -536, 50, 5); ivbox9 = createSprite(370, -537, 50, 5); box10 = createSprite(320, -606, 50, 5); ivbox10 = createSprite(320, -607, 50, 5); box11 = createSprite(370, -676, 50, 5); ivbox11 = createSprite(370, -677, 50, 5); box12 = createSprite(370, -746, 50, 5);ivbox12 = createSprite(370, -747, 50, 5); box13 = createSprite(370, -816, 50, 5); ivbox13 = createSprite(370, -817, 50, 5); box14 = createSprite(270, -856, 50, 5); ivbox14 = createSprite(270, -857, 50, 5); op1 = createSprite(125, -461, 130, 3.5); box15 = createSprite(130, -856, 50, 5); op2 = createSprite(200, -870, 8, 32); ivbox15 = createSprite(130, -857, 50, 5); box16 = createSprite(40, -866, 70, 6); ivbox16 = createSprite(40, -867, 70, 6); box17 = createSprite(275, -946, 450, 6); ivbox17 = createSprite(275, -947, 450, 6); create3()}