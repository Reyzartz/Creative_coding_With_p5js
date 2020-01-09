class Branch{
    constructor(Maxlen){
        this.Maxlen=Maxlen;
        this.len=0;
        this.incre=map(Maxlen,0,200,0.1,1.5)
    }
    show=()=>{
        strokeWeight(map(this.len,0,200,0.5,30))
        line(0,0,0,-this.len)
        translate(0,-this.len)
    }
    update=()=>{
        if(this.len<=this.Maxlen){
            this.len+=this.incre;
        }
        //this.show()
    }
}