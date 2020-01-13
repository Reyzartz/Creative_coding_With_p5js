function setup() {
    createCanvas(500,500)
    rectMode(CENTER)
    sliderX=createSlider(-10,10,0,1)
    sliderY=createSlider(-10,10,0,1)
    noFill()
}
let x=0,y=0
function draw() {
  background(111)
  x=sliderX.value()
  y=sliderY.value()
  strokeWeight(1)
  stroke(0)
  translate(width/2,height/2)
  for(let i=-10;i<=10;i++){
    line(-width/2,map(i,-10,10,-height/2,height/2),width/2,map(i,-10,10,-height/2,height/2))
    line(map(i,-10,10,-width/2,width/2),-height/2,map(i,-10,10,-width/2,width/2),height/2)
  }
  strokeWeight(3)
  stroke("green")
  line(-width/2,0,width/2,0)
  line(0,-height/2,0,height/2)
  stroke("red")
  point(map(x,-10,10,-width/2,width/2),map(y,-10,10,-height/2,height/2))
  rect(map(x,-10,10,-width/2,width/2),map(y,-10,10,-height/2,height/2),width*0.8,height*0.8)
  
}