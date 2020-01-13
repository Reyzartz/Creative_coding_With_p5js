function setup() {
    createCanvas(400,400)
    frameRate(10) 
    //noLoop()
}
let k=3,i=0,j=0
function draw() {
  if(mouseIsPressed){
    zoomIn()
    maxitterate=50
  }
  else{
    maxitterate=200
  }
    set_pixel()
    stroke(0)
    strokeWeight(5)
}
let lx=-k,ux=k,ly=-k,uy=k,
    scl=0.01,sclF=0.005,
    maxitterate=50
function zoomIn(){
  k*=0.95
 
  lx=-k
  ux=k
  ly=-k
  uy=k
  shift()
}
function shift(){
  x=mouseX-width/2
  y=mouseY-height/2
  console.log(scl,sclF);
  scl+=sclF
  i-=x*scl
  j-=y*scl
  sclF*=0.985
}
function set_pixel(){
  let a,b,aa,bb,n,ca,cb;
  pixelDensity(1)
  loadPixels();
  for(let x=0;x<width;x++){
    for(let y=0;y<height;y++){
      let pix = (x+y*width)*4

      bright=51;
      a=map(x,0+i,width+i,lx,ux)
      b=map(y,0+j,height+j,ly,uy)
      ca=a;
      cb=b;
      n=0;
      while(n<maxitterate){
        aa=(a*a)-(b*b)
        bb=2*a*b
        a=aa+ca;
        b=bb+cb;
        if(abs(a+b)>16)
          break;
        n++;
      }
      bright=map(n,0,maxitterate,0,255)
      pixels[pix+0]=bright
      pixels[pix+1]=bright
      pixels[pix+2]=bright
      pixels[pix+3]=255
    }
  }
  updatePixels()
}