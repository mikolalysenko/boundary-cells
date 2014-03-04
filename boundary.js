"use strict"

var top = require("simplicial-complex")

function boundary(cells) {
  var bnd = top.boundary(cells)
  var ptr = 0
  for(var i=0,ilen=bnd.length; i<ilen; ) {
    var j
    for(j=i+1; j<ilen; ++j) {
      if(top.compareCells(bnd[i], bnd[j])) {
        break
      }
    }
    if((j-i)%2) {
      bnd[ptr++] = bnd[i]
    }
    i = j
  }
  bnd.length = ptr
  return bnd
}

module.exports = boundary