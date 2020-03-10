const express = require("express");

let router = express.Router();

router.post("/", function(req, res) {
  console.log(req.body);
  res.json({ status: "ok", mailer: req.data });
});

module.exports = router;
