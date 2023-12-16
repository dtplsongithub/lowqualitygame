js.msghandling = function(){
  for (i in messages){
    
    if(!messages[i].or)messages[i].or=messages[i].t
    messages[i].t--;
    

    ctx.fillStyle=messages[i].color
    if(messages[i].or-30<messages[i].t){
          ctx.fillText(messages[i].text,(messages[i].or-messages[i].t)*(messages[i].text.length/2)-(messages[i].text.length/2*45-20),c.height-30-4*(i+1))
    } else if(messages[i].t<30){
          ctx.fillText(messages[i].text,messages[i].t*(messages[i].text.length/2)-(messages[i].text.length/2*45-20),c.height-30-4*(i+1))
    } else {
    ctx.fillText(messages[i].text,20,c.height-30-4*(i+1))
    }
        if(messages[i].t==0){
      messages.splice(i,1);
    }
  }
}