let height=150
let noOfB=0;
function setup() {
    createCanvas(windowWidth,windowHeight)
    frameRate(0.3)
    stroke("#2b1d0e")
   //stroke("rgba(0,0,0,0.6)")
    strokeCap(PROJECT)
    angleMode(DEGREES)
    slider = createSlider(2,50,5,1)

}

function draw() {
  background(180)
  translate(innerWidth/2,innerHeight)
  //height=slider.value()
  noOfB=slider.value()
  branch(height)
  //angle = slider.value()
  //branch(200)
}

const branch=(len)=>{
  strokeWeight(map(len,0,height,0,30))
  if(len<7.5){
    stroke(0,69,0,200)
  }
  line(0,0,0,-len)
  translate(0,-len)
  let Langle=random(15,30)
  let Llen=random(len*0.6,len*0.85)
  let Rlen=random(len*0.6,len*0.85)
  let Mlen=random(len*0.6,len*0.85)
  let Mangle=random(-10,+10)
  let Rangle=random(Langle-10,Langle+10)
  if(len>noOfB){
    push()
    rotate(Langle)
    branch(Llen)
    pop()
    if(random(-0.5,1)>0){
      push()
      rotate(Mangle)
      branch(Mlen)
      pop()
    }
    
    push()
    rotate(-Rangle)
    branch(Rlen)
    pop()
  }
}