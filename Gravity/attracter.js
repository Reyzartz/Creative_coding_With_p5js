class Attracter{
    constructor(x,y,dia){
        this.loc=createVector(x,y);
        this.vel = createVector(0,0);
        //this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.dia=dia;
        this.mass=50;
    }
    
    attract=(pla)=>{
        let m2=pla.mass;
        let frc = this.loc.copy().sub(pla.loc);
        let d = frc.mag();
        d= constrain(d,1,25);
        frc.normalize();
        frc.mult((G*this.mass)/(d*d));
        // if(dist(pla.x,pla.y,this.loc.x,this.loc.y)<20)
        //     frc.mult(-1);
        return frc

    }
    update=()=>{
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        
        this.acc.mult(0);
    }

    applyForce=(f)=>{
        this.acc.add(f.div(this.mass));
    }
    show=()=>{
        fill(255);
        circle(this.loc.x,this.loc.y,30);
    }

}