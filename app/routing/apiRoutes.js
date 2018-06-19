var dinnder = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(dinnder);
      });


      app.post("/api/friends", function(req, res) {

        dinnder.push(req.body);
      });





}