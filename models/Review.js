const { Schema, model } = require ("moongose");

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
        raiting: {
            type: String,
        },
        property: {
            type: String,
        },
        quality: {
            type: String,
        },
        origin: {
            type: String,
        },
        processing: {
            type: String,
        },
        variety: {
            type: String,
        },

    },
    {
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;