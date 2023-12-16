js.tsh = function(){
  for (i in tsh) {
    tsh[i].t--
    if(tsh[i].t<1){
      tsh[i].e()
    }
  }
}
// used for running code either once or like a setTimeout