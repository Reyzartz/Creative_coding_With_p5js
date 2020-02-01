function setup() {
    createCanvas(innerWidth,innerHeight)
    background(0)
    angleMode(DEGREES)
    colorMode(HSB)
    noStroke()  
    ellipseMode(CORNER) 
    //strokeWeight(2) 
    //noLoop()
}
let len=1.01,deg=0,r=222.49223594999998;
function Point(x,y){
  this.x=x
  this.y=y
  this.draw=()=>{
      fill(255-map(this.x,0,width/2,0,255),200,200)
      ellipse(this.x,this.y,this.x,sqrt(this.x)*0.3)
      //ellipse(this.x,this.y,sqrt(this.x),this.x)
      //rect(this.x,this.y,this.x,this.x)
      //arc(this.x,this.y,this.x,this.x,0,30)
      //stroke(255-map(this.x,0,width/2,0,255),200,200)
      //strokeWeight(sqrt(this.x)*0.5)
      //point(this.x,this.y)
      //circle(this.x,this.y,this.x)
      //line(this.x,this.y,this.x,this.x)
      
  }
}
let p=new Point(10,10)
function draw() {
  translate(width/2,height/2)
  rotate(deg)
  p.draw()
  if(deg >= 360){
    p.x*=len
    deg-=360
  }
    
  deg+=r
  console.log(p.x);
  if(p.x>width){
    rotate(10)
  }
}