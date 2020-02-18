let dis_nav=false
let stk=false
let clr="b&w"
let NoofParticles=5;
let side=4;
let max_speed=2;
const display_nav=()=>{
    let nav=document.querySelector("nav")
    let btn_div=document.getElementsByClassName("btn_div")
    if(dis_nav){
        nav.style.transform="translateY(0%)"
        
        btn_div[0].style.transform="rotateZ(47deg)"
        btn_div[1].style.transform="translateY(500%)"
        btn_div[2].style.transform="rotateZ(-40deg)"
    }
        
    else{
        nav.style.transform="translateY(-100%)"
        
        
        btn_div[0].style.transform="rotateZ(0deg)"
        btn_div[1].style.transform="translateY(0%)"
        btn_div[2].style.transform="rotateZ(0deg)"
    }
        

    dis_nav=!dis_nav 
              
}
const change_color=(_clr)=>{
    clr=_clr
}
const change_sides=(_side)=>{
    side=parseInt(_side.target.value);
    console.log(_side);
    
    
}
const change_particles=(_val)=>{
    NoofParticles=parseInt(_val.target.value);
}
const change_speed=(_val)=>{
    max_speed=parseInt(_val.target.value);
}
console.log("in");
