function setup() {
    cnv=createCanvas(windowWidth,windowHeight,WEBGL)
    cnv.mouseClicked(c<3?fill_pyramid:null)
    angleMode(DEGREES)
    noStroke()
    //fill("white") 
    tetra_arr=[new Tetrahedron(0,0,0,400)]
}
let grid_size=9;
let c=0;
let tetra_arr
function draw() {
  background(0)
  orbitControl(1,1,1)
  //rotateZ(frameCount *0.5)
  rotateZ(180)
  rotateY(frameCount *0.5)
  directionalLight(250, 250, 250, 0,1, 0);
  directionalLight(250, 250, 250, 1,0, 0);
  //directionalLight(250, 250, 250, 0,1, 0);
  tetra_arr.forEach(b=>{
    b.show();
  })
  
}

function fill_pyramid(){
  
  if(c<5){
    c++;
  temp_box=[...tetra_arr]
  tetra_arr=[]
  temp_box.forEach(br=>{
                  transY=br.height/4;
                  transX=br.radius/2*sin(60);
                  transZ=br.radius/2*cos(60);
                  tetra_arr.push(new Tetrahedron(br.x,br.y+transY,br.z,br.side/2))
                  tetra_arr.push(new Tetrahedron(br.x-transX,br.y-transY,br.z-transZ,br.side/2))
                  tetra_arr.push(new Tetrahedron(br.x+transX,br.y-transY,br.z-transZ,br.side/2))
                  tetra_arr.push(new Tetrahedron(br.x,br.y-transY,br.z+br.radius/2,br.side/2))
      }) 
    }
}