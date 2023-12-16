function MAINLOAD(){
   for (i in playlist) {
  sounds[`${playlist[i]}`] = new Audio(`${playlistdir}/${playlist[i]}.${playlistfile[i]}`);
    log.push(`loaded file /sounds/${playlist[i]}.ogg`);
}
  fetch("/f.json")
  .then(data => data.text())
  .then(body => {
    log.push("loaded file /f.json");
    var ee = JSON.parse(body);
    for (a = 0; a < (ee.length); a++) {
      if (ee[a]) {
        (function (ee, a) {
          fetch("/js/" + (ee[a]))
            .then(data => data.text())
            .then(body => {
              (function (body) {
                log.push("loaded file /js/" + ee[a]);
                try {
                  eval(body);
                } catch (e) {
                  console.error(e, "file " + ee[a]);
                }
              })(body);
            });
        })(ee, a);
      }
    }
  });
  
loadImages(imgtoload);
}
var playlist = ["elim","first","lap","powerup2","powerup","gameover","click","music/titlescreen"];
var playlistdir = "sounds";
var playlistfile = ["ogg","ogg","ogg","ogg","ogg","ogg","wav","mp3"]
var sounds = {}
var tlap = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var log = []
pr=0
// load sounds
 
// load functions
js={}


var Images = {};

function loadImages(list){
  var total = 0;
  for(var i = 0; i < list.length; i++){
    var img = new Image();
    Images[list[i].name] = img;
    img.onload = (()=>{
      total++;
      log.push(`loaded file /images/${gallery[total-1]}.png`)
    });
    img.src = list[i].url;
  }
}
var gallery = ["arrow_01","arrow_02","face_1","face_2","face_3","face_4","title_screen"]
var imgtoload = []
for (i in gallery) {
  imgtoload.push({
    "name":gallery[i],
    "url":`/images/${gallery[i]}.png`
  })
}

var c = document.getElementById("canvas");
var ctx = c.getContext('2d');
var FPS = 60;
var vx,vy,px,py;
var cx, cy;
var tsh=[],menu=0;
c.width = 1152;
c.height = 864;
cx = c.width / 2;
cy = c.height / 2;
px=cx;
py=cy;
vx=0;
vy=0
var platforms = [{"x":0,"y":600,"w":1152,"h":400}];
var s =0;
var lasts = 0
var players =[];
var l =[]
var le = [];
var elim = false
for (let j = 0;j<40*14;j++){
  if (random(0,1)==1){
    s+=random(500,0)
  } else {
    s-=random(0,500)
  }
  if (isoffscreen(s,true)){
    s=random(0,700)
  }

  lasts = s
  platforms.push({"x":s,"y":-j*200+600,"w":random(40,300-(j/20)),"h":40});
  if((j/40)%1==0){
    platforms.push({"x":0,"y":-j*200+600,"w":1000,"h":20});
  }
}
var color = ["red","orange","yellow","lightgreen","cyan","navy","purple","black","gray","pink","maroon","darkgreen","lightseagreen","lightcoral"]
for (let j = 0;j<14;j++){
  players.push({"x":random(0,852),"y":cy,"color":color[j],"vx":0,"vy":0,"lastbounce":0,"lap":1,"nextbounce":0})
}
var keyb = [];
var realypos = 0;
document.addEventListener("keydown",function(e){
	if(keyb.indexOf(e.keyCode)==-1){
		keyb.push(e.keyCode)
	}
})

document.addEventListener("keyup",function(e){
	if(keyb.indexOf(e.keyCode)!=-1){
		keyb.splice(keyb.indexOf(e.keyCode), 1);
	}
})
var lap, lastlap
lastlap = 0
lap=1
var camy = 0;
let background=true
var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
var difficulty =[2,3]//1,1 is easy, 1,3 is medium, 2,3 is hard, 3,3 is impossible
var reallap = 0
var errhandling=false;
var messages = []
var th = ["0nd 😪😪😪😪","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th"];
var t = 0
var soundtitlescreenplayed = false
var wintimer = ""
var creditsshown = false
setInterval(update, 1000 / FPS);


                  
function update() {
  ctx.fillStyle = "#aaa";
  ctx.font="28px Arial"
  if (background){
  ctx.fillRect(0, 0, c.width, c.height)
  }
if (isMobile) {
  ctx.fillStyle="black"
  ctx.font="28px Arial"
  ctx.fillText("this game is pc only ._.",0,300)
} else if (log.length < 28){
  ctx.fillStyle="black"
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.fillStyle="white"
  ctx.font="12px Consolas"
  for (i in log){
     ctx.fillText(log[i],0,130+i*14);
  }
} else if (!soundtitlescreenplayed) {
  sounds["music/titlescreen"].loop = true
  sounds["music/titlescreen"].play();
  soundtitlescreenplayed = true;
  t = 0
} else if(t<FPS*1 && !creditsshown){
  ctx.fillStyle="black"
  ctx.fillRect(0, 0, c.width, c.height)
  js.drawlogo(0);
  js.tick();
}else if (menu==3){ // means that someone won
  showl("won");
   if(l[0].ii == false){
     document.getElementById("whowon").innerText = "YOU"
    document.getElementById("timer").innerText = "with a time of "+js.timerify(wintimer);
     if(!localStorage.getItem("hiscore")){
       localStorage.setItem("hiscore",wintimer)
       document.getElementById("timer").innerText += "\n THATS A NEW RECORD!!"
     } else {
       if((~~localStorage.getItem("hiscore"))>wintimer){
         localStorage.setItem("hiscore",wintimer)
          document.getElementById("timer").innerText += "\n THATS A NEW RECORD!!"
       }
     }
   } else {
     document.getElementById("whowon").innerText = (l[0].color).toUpperCase();
   }
  showl("restartback");
  menu=4
} else {
  js.tick();
  if (menu==1){
    js.render();
  if(!elim){
    js.phi();
    js.move();
    js.renderplayer();
  }
  try{
    js.ai();
  } catch (e) {
    //bruh
  }
  js.renderl();
  js.lapcheck();
  js.msghandling();
  js.timerhandling();
  js.image();
  } else if (menu==0){
    js.ts();
    creditsshown = true
  }
}
}
function isoffscreen(v,cq){   // true for x, false for y
  if(cq){
    return v < 0 || v > c.width -300
  }else{
    return v < 0 || v > c.height
  }
}
function random(a, b) {
  if (a > b) {
    var _c = a;
    a = b;
    b = _c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}
function boxcollission(xd,yd,rect2){
return xd < rect2.x + rect2.w &&xd + 40 > rect2.x &&yd < rect2.y + rect2.h &&yd + 40 > rect2.y
}
function checkforcollission(px_,py_,j,vy_){
  for (ii in platforms){
    if (!boxcollission(px_,py_,platforms[ii]) )continue;
    if(j!=null&&vy_>0){
      players[j].lastbounce = ii;
      players[j].nextbounce=random(difficulty[0],difficulty[1]);
    }      
    return true
  }
  return false
}

function hidel(x) {
  document.getElementById(x).style.display = "none";
}
function showl(x) {
  document.getElementById(x).style.display = "block";
}

var diflist = [[1,2],[1,3],[2,3]]
          // FORM HANDLING
function testResults (form) {
   difficulty = diflist[form.dif.value]
}

// something
document.addEventListener('click', function(e){   
  if(e.target.tagName == 'BUTTON' || e.target.type == 'button'){
    sounds.click.play()
  }
})