js.lapcheck = function(){
   for (let j = 0; j<14;j++){
    reallap = Math.floor((-players[j].y+600)/8000+1)
    if(players[j].lap<reallap){
      players[j].lap=reallap;
    }
  }
  reallap = Math.floor((-py+600)/8000+1);
    if(lap<reallap){
      lap=reallap;
      sounds.lap.play();
      if(!l[0].ii){
        sounds.first.play();
        messages.push({
            "text":`you are the first one to enter leg ${lap}!`,
            "t":240,
            "color":`blue`
        })
      } else {
        messages.push({
            "text":`you have now entered leg ${lap}`,
            "t":240,
            "color":`blue`
        })
      }
      
      
    }

  if(l[13-lastlap].ii){
    if(l[14-lastlap].ii){
      if(players[l[13-lastlap].ii].lap!=players[l[14-lastlap].ii].lap){
        messages.push({
            "text":`${players[l[14-lastlap].ii].color} got eliminated at ${th[15-lastlap]} place`,
            "t":240,
            "color":`${players[l[14-lastlap].ii].color}`
        })
        players[l[14-lastlap].ii].elim=true
        lastlap++
        sounds.elim.play()
        
      }
  } else {
    if(players[l[13-lastlap].ii].lap!=lap){
        elim=true
      lastlap++
      messages.push({
            "text":`you got eliminated at ${th[15-lastlap+1]} place`,
            "t":240,
            "color":`blue`
        })
      sounds.elim.play()
      sounds.gameover.play()
      }
  }
  } else {
    if(l[14-lastlap].ii){
    if(players[l[14-lastlap].ii].lap!=lap){
            messages.push({
            "text":`${players[l[14-lastlap].ii].color} got eliminated at ${th[15-lastlap]} place`,
            "t":240,
            "color":`${players[l[14-lastlap].ii].color}`
        })
      sounds.elim.play()
        players[l[14-lastlap].ii].elim=true
          lastlap++

    }
  } else {
    throw("what the fu")
  }
  }
    // check if someone won
    for(i in players){
      if(players[i].lap==15){
        for(j in players){
          if(i==j)continue
          players[j].elim==true
        }
        messages.push({
            "text":`${players[i].color} won!`,
            "t":600000,
            "color":`${players[i].color}`
        })
        menu = 3
        wintimer = t;
      }
    }
    if(lap==15){
      for(j in players){
          players[j].elim==true
      }
      messages.push({
            "text":`you won!`,
            "t":600000,
            "color":`blue`
        })
      wintimer = t;
      menu = 3
      elim=true
    }
}