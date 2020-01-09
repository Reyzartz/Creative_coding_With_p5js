let height=150
let angle=0;
let tree=[];
function setup() {
    createCanvas(windowWidth,windowHeight)
    frameRate(30)
   //stroke("rgba(0,0,0,0.6)")
    angleMode(DEGREES)
    slider = createSlider(0,180,30,0.01)
    set_branch_len(200);
    console.log(tree);
    strokeCap(PROJECT)
    
}

function draw() {
  background(180)
  translate(innerWidth/2,innerHeight)
  //height=slider.value()
  angle=slider.value()
  // angle = slider.value()
  tree[0].update()
  tree[0].update()
  display_tree(1)
}

const set_branch_len=(len)=>{
  // line(0,0,0,-len)
  tree.push(new Branch(len))
   translate(0,-len)
  if(len>3){
    set_branch_len(len*0.677)
    set_branch_len(len*0.677)
  }
}

const display_tree=(i)=>{
  // line(0,0,0,-len)
  if(i<tree.length){
    if(tree[i-1].len>tree[i-1].Maxlen){
      tree[i].update()
      tree[i].show()
    }
    else
      tree[i].show()
  if(tree[i].len>3){
    push()
    rotate(angle)
    display_tree(i+1)
    pop()
    push()
    rotate(-angle)
    display_tree(i+1)
    pop()
  }
}
}