js.phi = function(){
   if (vy<30){
    vy+=1
  }
  

  
  realypos= py-(camy*-1)
  if (realypos<250&&vy<0) {
    camy +=-vy
  } else if (realypos>800&&vy>0) {
    camy +=-vy;
  } else {
    
  }
  py+=vy;
  px+=vx;
  
    if(checkforcollission(px,py,null,null)&&vy>0){
      vy= -35;
    }
  
if(px<0){
    px=1;
  } else if(px>812) {
    px=811;
  }
}