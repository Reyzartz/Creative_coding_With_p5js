function setup() {
    createCanvas(400,400)
    slider=createSlider(50,1000,50,1)
    frameRate(10) 
    //noLoop()
}
let k=2,i=0,j=0
function draw() {
  
  if(mouseIsPressed){
    zoomIn()
    maxitterate=50
  }
  else{
    maxitterate=slider.value()
  }
  if(keyIsPressed){
    key_pressed()
  }
  if(zoomOut){
    zoom_Out()
  }
    set_pixel()
    stroke(0)
    strokeWeight(5)
}

let lx=-k,ux=k,ly=-k,uy=k,
    scl=0.1,sclF=0.005,
    maxitterate=50,zoomOut=false
function zoomIn(){
  if(mouseX<=width && mouseY<height){
    k*=(0.9+scl*0.1)
    lx=-k
    ux=k
    ly=-k
    uy=k
    auto_shift()
  }
  
}
function key_pressed(){
  if(keyCode === UP_ARROW)
    manual_shift(0,-height/2)
  else if(keyCode === DOWN_ARROW)
    manual_shift(0,height/2)
  if(keyCode === LEFT_ARROW)
    manual_shift(-width/2,0)
  else if(keyCode === RIGHT_ARROW)
    manual_shift(width/2,0)

  if(keyCode===82){
    zoomOut=true
    
  }
  
}
function auto_shift(){
  x=mouseX-width/2
  y=mouseY-height/2
  //console.log(scl,sclF);
  scl+=sclF
  i-=x*scl
  j-=y*scl
  //console.log(k);
  
}
function manual_shift(x,y){
  //console.log(scl,sclF);
  i-=x*scl
  j-=y*scl
  maxitterate=50
  //console.log(k);
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
        if(abs(a+b)>15)
          break;
        n++;
      }
      if(n!==maxitterate){
        value=map(sqrt(n)*n,0,maxitterate,0,255)
        hue_=map(maxitterate-n,0,maxitterate,0,1)
        hue_=map(sqrt(hue_),0,1,0,255)
        colors=hsv_to_rgb(hue_,value);
      }
      else{
        colors={
          red:0,
          blue:0,
          green:0
        }
      }
      
      pixels[pix+0]=floor(colors.green)
      pixels[pix+1]=floor(colors.blue)
      pixels[pix+2]=floor(colors.blue)
      pixels[pix+3]=255
    }
  }
  updatePixels()
}