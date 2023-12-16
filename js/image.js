js.image = function () {
  for (i in players) {
    
  }
}
js.imageplayer = function () {
  // ctx.drawImage(Images.face_1,px,py+camy);
}
js.drawlogo = function (logo) {
  switch (logo) {
    case 0: {
      ctx.fillStyle="white";
      ctx.font = "24px Consolas";
      ctx.textAlign = "center";
      ctx.fillText("made by: ", cx, 100)
      ctx.strokeStyle = "#0888ff"
      ctx.lineWidth = 27;
      ctx.lineJoin = "round";
      ctx.lineCap = "round"
      // d
      beginPath()
      moveTo(75, 135)
      lineTo(60, 206)
      lineTo(93, 187)
      lineTo(99, 155)
      lineTo(75, 135)
      closePath();
      stroke();
      // d line
      beginPath()
      moveTo(70, 168)
      lineTo(417, 165)
      closePath()
      stroke();
      // a
      beginPath()
      moveTo(109, 191)
      lineTo(131, 143)
      closePath()
      stroke();
      beginPath()
      moveTo(131, 143)
      lineTo(139, 187)
      closePath()
      stroke();
      // t
      beginPath()
      moveTo(149, 140)
      lineTo(179, 136)
      closePath()
      stroke();
      beginPath()
      moveTo(163, 142)
      lineTo(155, 193)
      closePath()
      stroke();
      // e
      beginPath()
      moveTo(227, 140)
      lineTo(200, 143)
      lineTo(190, 196)
      lineTo(214, 195)
      lineTo(190, 196)
      lineTo(200, 143)
      closePath()
      stroke();
      // p
      beginPath()
      moveTo(248, 133)
      lineTo(241, 203)
      closePath()
      stroke();
      beginPath()
      moveTo(248, 133)
      lineTo(273, 133)
      lineTo(269, 165)
      lineTo(273, 133)
      closePath()
      stroke();
      // l
      beginPath()
      moveTo(299, 140)
      lineTo(290, 210)
      lineTo(358, 205)
      lineTo(290, 210)
      closePath()
      stroke();
      // a
      beginPath()
      moveTo(300, 227)
      lineTo(326, 167)
      lineTo(327, 167)
      lineTo(334, 226)
      lineTo(327, 167)
      closePath()
      stroke();
      // y
      beginPath()
      moveTo(354, 166)
      lineTo(358, 205)
      lineTo(358, 230)
      lineTo(358, 205)
      closePath()
      stroke();
      beginPath()
      moveTo(377, 166)
      lineTo(358, 205)
      closePath()
      stroke();
      // s
      beginPath()
      moveTo(405, 166)
      lineTo(386, 186)
      lineTo(397, 200)
      lineTo(383, 226)
      lineTo(397, 200)
      lineTo(386, 186)
      closePath()
      stroke();
      ctx.textAlign = "start"
    }
    case 1: {
      
    }
  }
}
function beginPath(){ctx.beginPath()}
function moveTo(x,y){ctx.moveTo(x*2+100,y*2+100)}
function lineTo(x,y){ctx.lineTo(x*2+100,y*2+100)}
function closePath(){ctx.closePath()}
function stroke(){ctx.stroke()}