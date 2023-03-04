const { Schema, model } = require ("moongose");

const reviewSchema = new Schema (
    {
        title:{
            type:String,
        },
        details: {
            type: String,
        },
        image:{
            type:String,
        },
        raiting: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;