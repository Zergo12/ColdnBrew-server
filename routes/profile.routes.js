const express = require("express");
const router = express.Router();
const Model = require ('../models/User.model.js')

router.get("/:id", (req, res) => {
    const { id } = req.params
    Model
    .findById(id)
    .then(user => {
        res.json(user)
    })
    .catch(err => console.log(err))
})

router.put("/update/:id", (req, res) => {
    const { id } = req.params
    const {picture, title, description} = req.body
    Model
    .findByIdAndUpdate(id, {picture, title, description})
    .then(user => {
        res.json(user)
    })
    .catch(err => console.log(err))
})

module.exports = router