function setup() {
  createCanvas(700,700);
}

function draw() {
  background(0,229,238);
  rectMode(CENTER)
  fill(222,184,135);
  rect(0, 600, 1500, 500);// Grond

  fill(25, 240,25 );
  rect(200, 100, 150, 120);//Hoofd
  rect(200,290, 200, 220);//Romp
  rect(200,170, 50, 20);//Nek
  rect(150,510, 80, 220);//Been R
  rect(250,510, 80, 220);//Been L
  rect(75,320, 40, 180);//arm R
  rect(325,320, 40, 180);//arm L
  
  fill(200);
  rect(120,90, 10, 20);//Oor L
  rect(280,90, 10, 20);//Oor R
  
  fill(125, 182, 203);
  ellipse(160,100,30,30)//Oog
  ellipse(240,100,30,30)//Oog
  fill(250);
  quad(170,130,230,130,220,150,180,150)//Mond
  
  ellipse(75, 410, 40, 40);//Hand L
  ellipse(325, 410, 40, 40);//Hand R
  
 
  fill(255,255,0);
  arc(525, 350, 240, 240, PI, TWO_PI)
  fill(255,215,0);
  arc(525, 350, 200, 200, PI, TWO_PI)
  fill(255,155,0)
  quad(425,350,625,350,540,800,500,800)//zon
}