js.move = function(){
  if(keyb.indexOf(37)/* left key */!=-1){
		vx=-10;
	} else if(keyb.indexOf(39)/* right key */!=-1){
		vx=10;
	} else {
    vx = 0;
  }
}