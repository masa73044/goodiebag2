const Candy = require("../db/models/Candy");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
