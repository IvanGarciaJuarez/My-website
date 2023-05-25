function setup() {
  createCanvas(700,700);
}

function draw() {
  strokeWeight(4);
  stroke('black');
  background(0,229,238);
  rectMode(CENTER)
  textSize(50);
  text('Klik op de linkermuisknop', 500, 50);
  fill('black');
  
   if (mouseIsPressed == true) {
  background(0,0,200);
  fill(0,0,200)
  
} 
    
  fill('#EBD595');
  rect(0, 600, 1500, 500);// Grond
    
  if (mouseIsPressed == true) {
  fill('#CC9460');
  rect(0, 600, 1500, 500);// Grond Donker
    }
  
  //Robot
  
  if (mouseIsPressed == false) {
  fill('#CC2F0B');
  rect(200, 100, 150, 120,8,8,8,8);//Hoofd
  rect(200,290, 200, 220,20,20,10,10);//Romp
  fill('#EBE2E0');
  rect(200,290, 140, 160,10,10,10,10);//Romp klein
  noStroke();
  fill('#CC2F0B');
  rect(200,290, 120, 30,20,20,20,20);//kruis
  rect(200,290, 30, 120,20,20,20,20);//kruis
  
  stroke('black');
    
  fill('#F2E71B')
  rect(200,20, 30, 40,20,20,0,0);//Sirenen Geel
  noStroke();
  fill('#0B52CC');
  rect(200,20, 15, 25,20,20,0,0);//Sirenen b
  stroke('black');
  fill('#CC2F0B');
  rect(150,510,70, 220,0,0,15,15);//Been R
  rect(250,510, 70, 220,0,0,15,15);//Been L
  rect(75,300, 40, 190,30,0,10,10);//arm R
  rect(325,300, 40, 190,0,30,10,10);//arm L
  rect(200,170, 50, 20);//Nek
  
  fill(200);
  rect(120,90, 10, 20);//Oor L
  rect(280,90, 10, 20);//Oor R
  
  fill('#EBE2E0');
  ellipse(160,100,30,30)//Oog
  ellipse(240,100,30,30)//Oog
  fill(250);
  quad(170,130,230,130,220,150,180,150)//Mond
  
  ellipse(75, 400, 40, 40);//Hand L
  ellipse(325, 400, 40, 40);//Hand R
  
  fill('#393534');
  rect(290,465,35,65);
  rect(290,545,35,65);
  rect(110,465,35,65);
  rect(110,545,35,65);
  
  noStroke()
  fill(255,255,0)
  arc(524, 347, 300, 300, PI, TWO_PI)
  fill(255,235,0);
  arc(525, 347, 240, 240, PI, TWO_PI)
  fill(255,215,0);
  arc(525, 347, 200, 200, PI, TWO_PI)
  
  } 
  
  if (mouseIsPressed == true) {
    
   stroke(255); // Black pencil
  strokeWeight(10); //"Hard pencil"

  for (i = 0; i < 2; i++) {
  point(random(700), random(350));
  }
    
  strokeWeight(4);
  stroke('black');
  fill(250);  
  ellipse(600,90, 140,140);//maan
  fill(200);
    ellipse(640,90, 15,15);//maan k
    ellipse(560,100, 30,30);//maan k
    ellipse(620,120, 30,30);//maan k
    ellipse(600,50, 20,20);//maan k
    ellipse(600,80, 15,15);//maan k
} 
  
  
  
  //Auto
  
     if (mouseIsPressed == true) {
    
  stroke('black');
  fill('#EBE2E0');
  rect(250,480, 300, 220,20,20,0,20);//Bak
  rect(250,580, 300, 30,0,0,20,20);//Bak
  fill('#CC2F0B');
  quad(400,530,580,530,510,400,400,400)//Cabine 1
  rect(490,560, 180, 60,0,0,20,0);//Cabine 2
  fill('#000000');
  rect(250,580, 300, 30,0,0,20,20);//Bak
  fill('#393534');
  ellipse(490, 590,100,100);//wiel 2
  ellipse(220, 590,100,100);//wiel
  fill('#FFFFFF');
  ellipse(220, 590,20,20);//As
  ellipse(490, 590,20,20);//As 2
  noStroke();
  fill('#CC2F0B');
  rect(250,460, 120, 30,20,20,20,20);//kruis
  rect(250,460, 30, 120,20,20,20,20);//kruis
  fill('#324D8EAF');  
  quad(420,480,530,480,495,420,420,420)// Raam
  stroke('black');
  fill('#F2E71B')
  rect(450,380, 30, 40,20,20,0,0);//Sirenen Geel
  noStroke();
  fill('#0B52CC');
  rect(450,380, 15, 25,20,20,0,0);//Sirenen b
  } 
  
  fill(0)
  rect(mouseX,mouseY,10,10)
  
  

  
  }

  