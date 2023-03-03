const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
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
    category: {
      type: String,
      enum:["Method", "Recipe"]
    }

  },
);

const Item = model("Item", itemSchema);

module.exports = Item;