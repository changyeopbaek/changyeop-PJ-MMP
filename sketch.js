let x=200
let y=150
let circ=20
let r=0
let g=0
let b=0
function setup() {
  createCanvas(400,100);  
 }

function draw() {
  background(r,g,b);
  fill(255,200,13);
  ellipse(x,y,100,100);
  noStroke()
  fill("white")
  text("SUNRISE",25,55);
  textSize(16);
  textFont("Montserrat");
  text("SUNSET",300,55);
  ellipse(mouseX,mouseY,circ,circ);
  fill(0,255,0);
triangle(119, 100, 147, 45, 175, 100);
fill(0,240,0)
  triangle(165, 100, 200, 35, 235, 100);
fill(0,255,0)
  triangle(225, 100, 253, 45, 281, 100);
 if(y<50){
  y=50;}
  if(y>150){y=150;}
}
function mouseClicked(){
 if(mouseX<200){
 y=y-5
 r=r+112/20
 g=g+222/20
 b=b+255/20
 }else{ 
y=y+5
 r=r-112/20
 g=g-222/20
 b=b-255/20
 }
}
