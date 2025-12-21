import mongoose, { Model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    priceDiscount: { type: Number, required: false },
    discountPercentage: { type: Number, required: false },
    Category: { type: String, required: true },
    imageUrl: { type: String, required: false },
    OutofStock: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const ProductSchemaModel: Model<any> =   
    mongoose.model("Product", ProductSchema);