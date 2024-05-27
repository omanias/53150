import mongoose from "mongoose";

const productsCollection = "products";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
});

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;
