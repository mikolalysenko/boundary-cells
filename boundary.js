"use strict"

var top = require("simplicial-complex")

function boundary(cells) {
  var result = []
  for(var i=0, ilen=cells.length; i<ilen; ++i) {
    var c = cells[i]
    for(var j=0, jlen=c.length; j<jlen; ++j) {
      var t = c.slice(0)
      t.splice(j,1)
      result.push(t)
    }
  }
  return top.unique(top.normalize(result))
}

module.exports = boundary