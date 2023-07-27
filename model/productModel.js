import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const ProductModel = models.Product || model("Product", productSchema);

export default ProductModel;
