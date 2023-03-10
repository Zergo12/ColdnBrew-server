const express = require("express");
const router = express.Router();
const Review = require ('../models/Review')


// Cloudinary
const cloudinary = require('../config/cloudinary.config')

router.get("/reviews", (req, res, next) => {
    Review
    .find()
    .then((AllReviews) => {
        res.json(AllReviews)
        }) 
    .catch(err => next(err))
    })

    
router.get("/review/:id", (req, res) => {
    const { id } = req.params
    Review
    .findById(id)
    .then(review => {
        res.json(review)
    })
    .catch(err => console.log(err))
})

router.post("/review/create", ( req, res, next ) => {
    const {  title, comments, rating, producer, quality, origin, process, varietal} = req.body
    const result = cloudinary.uploader.upload(image, )
    Review
    .create({ title, comments, image, rating, producer, quality, origin, process, varietal})
    .then((review) => {
        res.json(review)
    })
    .catch((err) => next(err))
})

module.exports = router