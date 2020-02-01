class Attracter{
    constructor(x,y,dia,dir=1){
        this.loc=createVector(x,y);
        this.dia=dia;
        this.mass=50;
        this.dir=dir;
    }
    
    attract=(pla)=>{
        let m2=pla.mass;
        let frc = this.loc.copy().sub(pla.loc);
        let d = frc.mag();
        d = constrain(d,5,25);
        frc.normalize();
        frc.mult((this.dir*G*this.mass*1)/(d*d));
        return frc

    }

    show=()=>{
        fill(255);
        circle(this.loc.x,this.loc.y,30)
    }

}