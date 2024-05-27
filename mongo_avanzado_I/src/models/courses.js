import mongoose from "mongoose";

const courseCollection = "courses";

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    difficulty: Number,
    topics: {
        type: Array,
        default: []
    },
    professor: String,
    students: {
        type: Array,
        default: []
    }
});

const courseModel = mongoose.model(courseCollection, courseSchema);

export default courseModel;
