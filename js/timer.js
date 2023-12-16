js.timerhandling = function() {
  ctx.fillStyle = "black";
  ctx.fillText(`${js.timerify(t)}`,30,30);
  if (t>100) return false; // to say h
  return true; // to say "hey, i exist now!"
}
js.timerify = function(_t){
  let b = _t/FPS;
  let s = (b%1).toFixed(3)*1000
  return `${Math.floor(b/60).toString().padStart(2,"0")}:${(Math.floor(b)%60).toString().padStart(2,"0")}.${s.toString().padStart(3,"0")}`
}
js.tick=function(){
  t++
}