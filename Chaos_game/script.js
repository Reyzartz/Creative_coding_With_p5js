let points=[],n,step=1-0.5,noofsides=3,x,y,an=0,drag=false,dragIn=-1,prevPos=0;
let side,dis;
function setup() {
    createCanvas(windowHeight,windowHeight)

    sliders();
    n = createVector(random(width),random(height));
    init();
    background(0);
    stroke(255);
}
function sliders(){
  side = createSlider(3,10,3,1);
  side.position(width+20,100);
  dis = createSlider(0.5,0.9,0.5,0.01);
  dis.position(width+20,200);
}
function draw() {
  strokeWeight(5);
  stroke(255);
  if(step!=dis.value()){
    step=dis.value();
    background(0);
  };
  if(noofsides!=side.value()){
    noofsides=side.value();
    init();
  };
  points.forEach( p =>{
    point(p.x,p.y);
  } )
  if(mouseIsPressed){
    drag=true;
  }
    strokeWeight(1);
  //  stroke(255,20);
    for(let i=0;i<1000;i++){
      let clr=map(dist(width/2,height/2,n.x,n.y),0,height,150,255);
      stroke(clr,255-clr,clr/2,20);
      //stroke(255,10);
      point(abs(n.x),abs(n.y));
      setPoint();
    }
  draging();
}
function init(){
    points = [];
    an=0;
    m=TWO_PI/noofsides;
    len =height/2-10;
    for(let i=0;i<noofsides;i++){
      x = width/2 + len*cos(an);
      y = height/2 + len*sin(an);
      points.push(createVector(x,y));
      an+=m;
    }
    background(0);
}
const setPoint=()=>{
  let ran = int(random(noofsides));
    if(ran!=prevPos){
    let m = atan2(points[ran].y - n.y,points[ran].x - n.x);
    let len = dist(n.x,n.y,points[ran].x,points[ran].y)*step;
    n.x = n.x + len*cos(m);
    n.y = n.y + len*sin(m);
    prevPos=ran;
  }
  
}

function draging(){
  if(drag){
    if(dragIn==-1)
    points.forEach( (p,i)=>{
      if(dist(p.x,p.y,mouseX,mouseY) < 25){
        dragIn=i;
      }
    })
    else if(dragIn >-1){
      points[dragIn].x=mouseX;
      points[dragIn].y=mouseY;
    }
  }
  
}
function mouseReleased(){
  drag = false;
  dragIn = -1;
  background(0);
}