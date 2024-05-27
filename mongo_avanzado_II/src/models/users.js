import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String
});

usersSchema.plugin(mongoosePaginate)
const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;
