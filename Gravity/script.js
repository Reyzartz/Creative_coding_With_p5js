function setup(){
  createCanvas(innerWidth,innerHeight); 
  //colorMode(HSB);
   for(let i=0;i<1;i++){
    planets.push(new Planet(random(300,width-200),random(200,height-200),random(1,5    )))
   }
  a1 = new Attracter(width/2,height/2,100);
  a2 = new Attracter(width-200,height/2,100,); 
  a3 = new Attracter(200,height/2,100,); 
  background(0);
  noStroke();
}
let planets=[];
let s ;
let G=0.4;
function draw(){
    //translate(width/2,height/2);
    //background(51);
    fill(0,20);
    rect(0,0,width,height);
    planets.forEach(p=>{
        //p.applyForce(createVector(0.01,0));
        p.applyForce(a1.attract(p));
        //p.applyForce(a2.attract(p));
        //p.applyForce(a3.attract(p));
        p.update();
        p.show();
    })
    if(mouseIsPressed){
        planets.push(new Planet(mouseX,mouseY,random(1,3)))
    }
    a1.show();
    //a2.show();
    //a3.show();

    //p.applyForce(createVector(0.1,1));
    //p.edges();
    
}