js.render = function(){
  ctx.fillStyle="black";
  for (i in platforms){
    if(platforms[i].y+camy<-40||platforms[i].y+camy>864){
      continue
    }
    ctx.fillRect(platforms[i].x,platforms[i].y+camy,platforms[i].w,platforms[i].h);
  } 
}
js.renderplayer = function(){
  ctx.fillStyle ="blue";
  ctx.fillRect(px,py+camy,40,40);
}