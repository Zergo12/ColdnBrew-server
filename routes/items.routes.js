const express = require("express");
const router = express.Router();
const Item = require ('../models/Item')

router.get("/brewing-methods", (req, res, next) => {
    Item
    .find({category:"Method"})
    .then((AllMethods) => {
        res.json(AllMethods)
        }) 
    .catch(err => next(err))
    })

router.get("/recipes", (req, res, next) => {
    Item
    .find({category:"Recipe"})
    .then((AllRecipes) => {
        res.json(AllRecipes)
        }) 
    .catch(err => next(err))
    })

router.get("/:id", (req, res, next) => {
    const { id } = req.params

    Item
    .findById(id)
    .then(Item => {
        res.json('/:id', {item:Item})
    })
    .catch(err => next(err))
})


router.post("/create", ( req, res, next ) => {
    const { title, description, image, category} = req.body
    Item
    .create({ title, description, image, category})
    .then((item) => {
        res.json(item)
    })
    .catch((err) => next(err))
})


module.exports = router