js.ai = function() {
  let nextplatx = 0
  let e = 0
  for (let j = 0; j < 14; j++) {
    if (players[j].elim) continue
    ctx.fillStyle = players[j].color;
    if (!(players[j].y + camy < -40 || players[j].y + camy > 864)) {
      ctx.fillRect(players[j].x, players[j].y + camy, 40, 40);
    } else {
      if (players[j].y - py < 0) {
        ctx.fillRect(players[j].x, 100 - (players[j].y - py) / -100, 15, (players[j].y - py) / -100 + 5);
        ctx.beginPath();
        ctx.moveTo(players[j].x - 10, 100 - (players[j].y - py) / -100);
        ctx.lineTo(players[j].x + 10 + 15, 100 - (players[j].y - py) / -100);
        ctx.lineTo(players[j].x + 7.5, 100 - (players[j].y - py) / -100 - 20);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(players[j].x, 752, 15, (players[j].y - py) / 100 + 5);
        ctx.beginPath();
        ctx.moveTo(players[j].x - 10, 752 + (players[j].y - py) / 100);
        ctx.lineTo(players[j].x + 10 + 15, 752 + (players[j].y - py) / 100);
        ctx.lineTo(players[j].x + 7.5, 752 + (players[j].y - py) / 100 + 20);
        ctx.closePath();
        ctx.fill();
      }
    }
    if (players[j].vy < 30) {
      players[j].vy += 1
    }
    players[j].y += players[j].vy
    players[j].x += players[j].vx
    if (checkforcollission(players[j].x, players[j].y, j, players[j].vy) && players[j].vy > 0) {
      players[j].vy = -35;
    }
    if (players[j].x < 0) {
      players[j].x = 1
    } else if (players[j].x > 812) {
      players[j].x = 811
    }
  }
  for (let j = 0; j < 14; j++) {
    if (players[j].elim) continue
    e = parseInt(players[j].lastbounce) + parseInt(players[j].nextbounce)
    nextplatx = platforms[e].x + platforms[e].w / 2
    if (players[j].x - nextplatx > 10) {
      players[j].vx = -10
    } else if (players[j].x - nextplatx < -10) {
      players[j].vx = 10
    } else {
      players[j].vx = 0
    }
  }

}