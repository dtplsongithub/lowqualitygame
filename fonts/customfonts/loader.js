function getCharcodeList(h,name) {
  let splith = h.split("");
  let result = []
  for (i in splith){
    if (!result.includes(splith[i].charCodeAt(0))) result.push(splith[i].charCodeAt(0))
  }
  result.sort(function(a, b){return a - b})
  return `"${name}",[${result.join(",")}],`
}
function log(eee){
  document.getElementById("logger").innerHTML += `<p>${eee}</p>`
}
log(getCharcodeList("custom test font","test"))
var text = {}
fetch("list.json")
  .then(data => data.text())
  .then(body => {
    var load = JSON.parse(body);
    for (i in load){
      if (i % 2 == 0) continue
    }
  });