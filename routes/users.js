const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Welcome to user script");
});

module.exports = router;