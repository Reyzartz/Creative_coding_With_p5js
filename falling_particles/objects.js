function  particle(x,y,xspeed,yspeed,rad){
    this.x=mouseX;
    this.y=mouseY;
    this.rad=rad;
    this.xspeed=xspeed;
    this.yspeed=yspeed;
    this.alpha=1;
    this.color=`rgba(${int(random(255))},${int(random(255))},${int(random(255))},`;
    this.draw=()=>{
            fill(`${this.color}${this.alpha})`);
            noStroke()
            circle(this.x,this.y,this.rad)
        
    }
    this.update=()=>{
        if(this.x<innerWidth && this.y<innerHeight && this.alpha>0.1 && this.y>0){
            if(this.yspeed>0){
                this.yspeed+=g;
            } 
            else{
                this.yspeed+=g;

            }
                
            this.y+=this.yspeed;
            this.x+=this.xspeed;
            this.alpha-=0.01
            
        }
        else{
            this.x=mouseX;
            this.y=mouseY;
            this.xspeed=random(-2,2);
            this.yspeed=random(-4,1);
            this.alpha=1;
        }
        this.draw();
    }
}
