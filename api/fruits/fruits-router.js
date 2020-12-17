const router = require("express").Router();

const Fruits = require("./fruits-model.js");

router.get("/", (req, res) => {
  Fruits.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
