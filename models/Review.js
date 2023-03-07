const { Schema, model } = require ("mongoose");

const reviewSchema = new Schema (
    {
        title:{
            type:String,
        },
        comments: {
            type: String,
        },
        image:{
            type:String,
        },
        rating: {
            type: Number,
        },
        producer: {
            type: String,
        },
        quality: {
            type: String,
        },
        origin: {
            type: String,
        },
        process: {
            type: String,
        },
        varietal: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;