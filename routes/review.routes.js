const express = require("express");
const router = express.Router();
const Review = require ('../models/Review')

router.get("/reviews", (req, res, next) => {
    Review
    .find()
    .then((AllReviews) => {
        res.json(AllReviews)
        }) 
    .catch(err => next(err))
    })
