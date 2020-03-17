let t=0,yoff,clr,to,offset=0,d=0;
function setup() {
    createCanvas(windowWidth,windowHeight)
    stroke(0)
    noStroke();
    strokeWeight(1);
    noiseDetail(3,0.3)
    clr=color(255,120,50);
    to=color(0,0,0);
}

function draw() {
  background(lerpColor(clr,color(255,255,255),0.5))
  for(let i=1;i<=6;i++){
    createMountains(random(i*50),lerpColor(clr,to,i/6),i*100);
  }
  noLoop()
}
function createMountains(k,c,h){
  fill(c)
  beginShape()
  vertex(0,height)
  for(i=0;i<=width;i+=5){ 
    yoff=noise(t)*h;
    vertex(i,h+yoff);
    t+=0.04;
  }
  vertex(width,height)
  endShape(CLOSE)
}