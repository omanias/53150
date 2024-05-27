import mongoose from "mongoose";

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    userId: String
});

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

export default cartsModel;
