class Planet{
    constructor(x,y,z,dia){
        this.loc = createVector(x,y);
        this.prevPos = createVector(x,y);
        this.vel = createVector(random(-1,1),0);
        //this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.dia=dia;
        this.mass=dia;
    }
    

    update=()=>{
        this.prevPos.set(this.loc.x,this.loc.y);
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
    }

    applyForce=(f)=>{
        this.acc.add(f.div(this.mass));
    }
    show=()=>{
        fill(255);
        stroke(200);
        line(this.prevPos.x,this.prevPos.y,this.loc.x,this.loc.y)
    }

}