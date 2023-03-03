const { Schema, model } = require("mongoose");

const recipesSchema = new Schema(
{
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
);

const Recipes = model("Recipes", recipesSchema);

module.exports = Recipes;