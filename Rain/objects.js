function  drop(x,y,len,depth){
    this.x=x;
    this.y=y;
    this.len=len;
    this.speed=speed;
    this.draw=()=>{
        if(this.y>0){
            stroke(depth)
            strokeWeight(2)
            line(this.x,this.y,this.x,this.y+this.len)
        }
        
    }
    this.update=()=>{
        if(this.y<0){
            this.y+=this.speed;
            //console.log(this.y);
            
        }
        if(this.y>0 && this.y<innerHeight){
            this.speed+=this.speed*g;
            this.y+=this.speed;
            
        }
        else{
            this.speed=speed;
            this.y=random(-innerHeight,0);
            this.x=random(0,innerWidth)
        }
        this.draw();
    }
}
function  cloud(x,y,rad){
    this.x=x;
    this.y=y;
    this.rad=rad;
    this.speed=0.5;
    this.draw=()=>{
        if(this.x>0){
            fill("rgba(230,230,230,0.9)")
            noStroke()
            circle(this.x,this.y,this.rad)
        }
            
        
    }
    this.update=()=>{
        
        if(this.x<innerWidth){
            this.x+=this.speed;
            
        }
        else{
            this.speed=0.5;
            this.x=0;
            this.y=random(0,100);
            this.rad=random(150,200);
        }
        this.draw();
    }
}