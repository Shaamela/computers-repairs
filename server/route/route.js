const express = require('express');
const router = express.Router();
const Information  = require ('../model/Information');




router.post("/", async (req, res, next) =>  {
    const my_post = req.body;
    await Information.create(my_post);
    res.json(my_post);
    
    
})


module.exports = router;