function setup() {
    cnv=createCanvas(windowWidth,windowHeight,WEBGL)
    noStroke()
    cnv.mouseClicked(c<3?fill_box:null)
    fill("orangeRed") 
}
let grid_size=9;
let c=0;
let box_arr=[new Cube(0,0,0,300)]
function draw() {
  background(1)
   rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  directionalLight(250, 250, 250, 0,0, -1);
  box_arr.forEach(b=>{
    b.show();
  })
}

function fill_box(){
  c++;
  temp_box=[...box_arr]
  box_arr=[]
  temp_box.forEach(br=>{
    for(let i=-1;i<=1;i++){
      for(let j=-1;j<=1;j++){
        for(let k=-1;k<=1;k++){
          if(k!==0){
                if((i!==0 || j!==0) || (i!==0 && j!==0)){
                  box_arr.push(new Cube((i*br.side/3)+br.x,(j*br.side/3)+br.y,(k*br.side/3)+br.z,br.side/3))
                }
              }
              else{
                if(i!==0 && j!==0){
                  box_arr.push(new Cube((i*br.side/3)+br.x,(j*br.side/3)+br.y,(k*br.side/3)+br.z,br.side/3))
                }
              }
          
        }
      }
    }
  })  
}