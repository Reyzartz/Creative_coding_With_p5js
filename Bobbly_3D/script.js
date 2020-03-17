let circles=[]
function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    //strokeWeight(1);
    //stroke(150);
    //noFill();
    noStroke()
    noiseDetail(1);
    for(let i =55;i>0;i--){
      circles.push(new WrappedCircle(i*5))
    }

}
let t=0,dx,offset=0,l=120,u=360,dir=0,yoff=0;
function draw() {
  translate(width/2,height/2);
  rotate(-frameCount*1);
  background(0)
  circles.forEach( circle=>{
    circle.draw()
  })
  offset+=0.05;
  dir+=0.005;
  yoff+=0.001
}