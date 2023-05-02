const express = require("express");
const {handleGenerateNewShortURl} = require('../controller/url')

const router = express.Router();

router.post("/", handleGenerateNewShortURl);

module.exports = router;