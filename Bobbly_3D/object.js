class WrappedCircle{
    constructor(r){
        this.rad=r;
    }
    draw=()=>{
        let angle=0,offrange,m=l+((u-l)/2),x,y;
        fill(map(this.rad,0,320,255,0))
        beginShape()
        while(angle<=360){
            if( angle>=l && angle<=u){
                if(angle>=l && angle<=m)
                    offrange = map(angle,l,m,0,this.rad);
                else
                    offrange =map(angle,m,u,this.rad,0)
            dx=map(noise(t),0,1,-offrange/2,offrange);            
            t += noise(dir) * 0.4;
            }
            else 
                dx=0;
            x=sin(angle)*(this.rad+dx);
            y=cos(angle)*(this.rad+dx);
            vertex(x,y);
            angle+=map(this.rad,0,height/2,25,1);
        }
        t=offset;
        
        endShape(CLOSE);
    }
}