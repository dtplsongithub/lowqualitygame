js.renderl = function(){
  ctx.fillStyle="white";
  ctx.fillRect(852,0,300,864);
  ctx.fillStyle="#333";
  ctx.fillRect(852,(15-lastlap)*50+35,300,864);
  l = []
  ctx.fillStyle="black";
  for (i in players){
    if(players[i].elim){
      l.push({"y":players[i].y,"color":players[i].color,"ii":i});
    } else{
    l.push({"y":players[i].y,"color":players[i].color,"ii":i});
    }
  }
  l.push({"y":py,"color":"blue","ii":false});
  l.sort(function(a, b){return a.y - b.y});
  for (i in l){
    ctx.fillStyle=l[i].color;
    ctx.fillRect(900,i*50+40,40,40);
    ctx.fillText(`${(l[i].y/-100+6).toFixed(1)}m`,950,i*50+70);
  }
}