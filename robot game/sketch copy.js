
function draw() {
  strokeWeight(4);
  stroke('black');
  rectMode(CENTER)
  

    
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
    
    
  

  

  
  }