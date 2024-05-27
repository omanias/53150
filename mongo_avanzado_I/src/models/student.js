import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
});

const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;
