function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    init();
    frameRate(30);
    background(0);
    noiseDetail(1);
    strokeWeight(1)
}
const init=()=>{
  particles=[];
  for(let i=0;i<20;i++){
    particles.push(new Particle(random(10),random(10)));
  }
}
let x1,y1,x2,y2,an,t=0,ang;
let particles=[];
function draw() {
  noStroke();
  fill(0,max_speed*2.5);
  if(frameCount%5==0){
    fill(0,max_speed*15);
  }
  rect(0,0,width,height);
  translate(width/2,height/2);
  if(mouseIsPressed){

  }
  // if(mouseIsPressed){
  //   x1=pmouseX - width/2;
  //   y1=pmouseY - height/2;
  //   x2=mouseX - width/2;
  //   y2=mouseY - height/2;
  //   for(let i=0;i<side;i++){
  //     push();
  //     rotate(an*i);
  //     line(x1,y1,x2,y2);
  //     scale(1,-1);
  //     line(x1,y1,x2,y2);
  //     pop();
  //   }
  // }
  particles.forEach((p,i)=>{
      t+=0.002;
      ang=noise(t)*360;
      let frc = p5.Vector.fromAngle(ang);
      p.applyForce(frc.setMag(max_speed*0.2));
      p.edge();
      p.update();
      bri=map(ang,0,360,0,255)
      stroke(bri,255,200);
    if(i<=NoofParticles+1)
      p.show();
  })
  
}