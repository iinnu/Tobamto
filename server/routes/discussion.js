const express = require('express');
const router = express.Router();
const { Discussion } = require("../models/Discussion");

const { auth } = require("../middleware/auth");

//=================================
//             DIscussion
//=================================

router.post("/saveDiscussion", (req, res) => {
    const discussion = new Discussion(req.body)
    
    discussion.save((err, discussion) => {
        if(err) return res.json({success: false, err})
        
        Discussion.find({'_id' : discussion._id})
        .populate('userId')
        .exec((err, result) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({success: true, result})
        })
    })
});

router.get("/getDiscussions", (req, res) => {
    
    Discussion.find()
        .populate('userId')
        .exec((err, discussions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
        })
});

router.post("/mydiscussion", (req, res) => {
    
    Discussion.find({'userId':req.body.userId})
        .exec((err, discussions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, discussions })
        })
});

module.exports = router;
