class Planet{
    constructor(x,y,dia){
        this.loc = createVector(x,y);
        this.vel = createVector(1,0);
        //this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.dia=dia;
        this.mass=dia;
    }
    

    update=()=>{
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        
        this.acc.mult(0);
    }

    applyForce=(f)=>{
        this.acc.add(f.div(this.mass));
    }
    edges=()=>{
        if(this.loc.x<0 || this.loc.x>width){
            this.vel.x = -this.vel.x
        }
        if(this.loc.y<0 || this.loc.y>height){
            this.vel.y = -this.vel.y
        }
    }
    show=()=>{
        fill(255);
        circle(this.loc.x,this.loc.y,2)
    }

}