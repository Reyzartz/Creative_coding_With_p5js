let particles=[];
const g=0.18;
let noOfParticles=100;
let xSpeed=0;
let ySpeed=0;

function setup() {
    createCanvas(innerWidth,innerHeight)
    init()
}

function draw() {
    background("#ddd")
    for(let i=0;i<noOfParticles;i++){
        particles[i].update();
    }
}
function init(){
    for(let i=0;i<noOfParticles;i++){
        particles.push(new particle(innerWidth/2,200,random(-2,2),random(-4,1),20))
    }
}