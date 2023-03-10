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

router.get("/:id", (req, res) => {
    const { id } = req.params
    Item
    .findById(id)
    .then(item => {
        res.json(item)
    })
    .catch(err => console.log(err))
})

router.put("/edit/:id", (req, res) => {
    const { id } = req.params
    const {image, title, description, category} = req.body
    Item
    .findByIdAndUpdate(id, {image, title, description, category})
    .then(item => {
        res.json(item)
    })
    .catch(err => console.log(err))
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

router.post("/delete/:id" , (req,res,next) => {
    const { id } = req.params 
    Item
    .findByIdAndDelete(id)
    .then(() => {
        res.json()
    })
    .catch(err => {
        next(err)
    })
  })

module.exports = router