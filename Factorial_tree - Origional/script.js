let height=150
let angle=0;
function setup() {
    createCanvas(windowWidth,windowHeight)
    frameRate(30)
   //stroke("rgba(0,0,0,0.6)")
    angleMode(DEGREES)
    slider = createSlider(0,180,30,0.01)

}

function draw() {
  background(180)
  translate(innerWidth/2,innerHeight)
  //height=slider.value()
  angle=slider.value()
  branch(height)
  // angle = slider.value()
}

const branch=(len)=>{
  line(0,0,0,-len)
  translate(0,-len)
  if(len>3){
    push()
    rotate(angle)
    branch(len*0.677)
    pop()
    push()
    rotate(-angle)
    branch(len*0.677)
    pop()
  }
}