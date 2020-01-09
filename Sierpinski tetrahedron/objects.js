class Tetrahedron {
    constructor(x,y,z,side){
        this.x=x
        this.y=y
        this.z=z
        this.side=side
        this.height=Math.sqrt(2/3)*this.side
        this.radius=Math.sqrt(3/8)*this.side
        this.color=`rgb(${floor(map(this.x,-244,244,0,255))},${floor(map(this.y,-244,244,0,255))},${floor(map(this.z,-244,244,0,255))})`
        
    }
    show=()=>{
        push()
        translate(this.x,this.y,this.z)
        fill(this.color)
        cone(this.radius,this.height,3,1)
        pop()
    }
}