function setup(){
  createCanvas(innerWidth,innerHeight); 
  //colorMode(HSB);
   for(let i=0;i<50;i++){
    //planets.push(new Planet(random(width),random(height),random(30,50)));

}
   console.log(planets);
   
   attracters.push(new Attracter(width/2,height/2,100));
  background(0);
  
}
let planets=[];
let attracters = [];
let s ;
let G=0.4;
function draw(){
   fill(0,10);
   rect(0,0,width,height);
   //background(0);
    
    planets.forEach(p=>{
        attracters.forEach(a=>{
            p.applyForce(a.attract(p));
        })
        
        p.update();
        p.show();
    })
    // attracters.forEach((a,i)=>{
    //     attracters.forEach((at,j)=>{
    //         if(i!==j)
    //         at.applyForce(a.attract(at));
    //     })
        
    // })
    if(mouseIsPressed){
        planets.push(new Planet(mouseX,mouseY,random(1,3)))
    }
    attracters.forEach( a=>{
       // a.update();
        a.show();
    } )
    
}
function doubleClicked(){
   attracters.push(new Attracter(mouseX,mouseY));
}