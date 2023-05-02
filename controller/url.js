const shortid = require("shortid");     // nanoid (shortid)
const URL = require('../models/url');

async function handleGenerateNewShortURl(req, res){
    const body = req.body;
    if(!body.url)return res.status(400).json({err:'url is required'})
    const shortID = shortid();  // assigning the legth of nanoid generated. 
    await URL.create({
        shortId : shortID,
        redirectURl :body.url,
        visitHistory : [],
    });

    return res.json({id:shortID});
}

module.exports = {
    handleGenerateNewShortURl,
}