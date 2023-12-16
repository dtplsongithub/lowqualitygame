js.ts = function(){
  ctx.drawImage(Images.title_screen,cx-180*3/2,300+Math.sin(t/33)*30,180*3,22*3);
  document.getElementById("ts").style.display = "block";
  
}