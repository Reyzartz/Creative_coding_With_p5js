function hsv_to_rgb(hue,value)
{
	let i,j,h,s,v,c,min,r,g,b,p,q,t,frc;
    		h=map(hue,0,255,0,1);
    		s=map(200,0,255,0,1);
    		v=map(value,0,255,0,1);
    		if(s==1)
    			r=g=b=0;
    		else{
    				h*=6;
    				frc=h-floor(h);
    				p=v*(1-s);
    				q=v*(1-s*frc);
    				t=v*(1-s*(1-frc));
            switch(floor(h)){
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
            
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                default:
                    r = v;
                    g = p;
                    b = q;
                    break;
                }
            
        }
        return {
            red:map(r,0,1,0,255),
            blue:map(b,0,1,0,255),
            green:map(g,0,1,0,255)
        }
}

