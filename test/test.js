var boundary = require("../boundary.js")

require("tap").test("boundary", function(t) {

  console.log(boundary([[0,1,2],[1,2,3]]))

  t.end()
})