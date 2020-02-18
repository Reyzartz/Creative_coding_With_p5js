class Particle{
    constructor(x,y){
        this.loc = createVector(x,y);
        this.prevPos = createVector(x,y);
        this.vel = createVector(random(-1,1),random(-1,1));
        this.acc = createVector(0,0);
    }
    update=()=>{
        this.prevPos.set(this.loc.x,this.loc.y);
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.vel.limit(max_speed);
        this.acc.mult(0);
    }

    applyForce=(f)=>{
        this.acc.add(f);
    }
    edge=()=>{
        if(this.loc.x>height/2 || this.loc.x<-height/2 || this.loc.y>height/2 || this.loc.y<-height/2){
            this.loc.mult(0);
            this.vel.mult(0);
        }
    }
    show=()=>{
        an=360/side;
        for(let i=0;i<side;i++){
            push();
            rotate(an*i);
            line(this.prevPos.x,this.prevPos.y,this.loc.x,this.loc.y);
            scale(1,-1);
            line(this.prevPos.x,this.prevPos.y,this.loc.x,this.loc.y);
            pop();
          }
    }

}