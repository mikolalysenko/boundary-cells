"use strict"

var boundary = require("../boundary.js")
var top = require("simplicial-complex")

require("tap").test("boundary", function(t) {

  t.same(boundary([[0,1,2],[1,2,3]]),
    top.normalize([
      [0, 1],
      [0, 2],
      [2, 3],
      [1, 3]]))

  t.end()
})