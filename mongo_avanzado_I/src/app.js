import express from 'express'
import mongoose from 'mongoose'
import studentModel from './models/student.js'
import courseModel from './models/courses.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const environment = async () => {
    await mongoose.connect("MONGO_URL")
    /*     await studentModel.create({
            first_name: "Leonardo",
            last_name: "Pereyra",
            email: "leopareyra@gmail.com",
            gender: "Male"
        }) */
    /*   await courseModel.create({
          title: "Programación backend",
          description: "Último curso fullstack",
          difficulty: 2,
          topics: ["Classes", "Fs", "HBS", "Express", "Nestjs", "MongoDb"],
          professor: "El tio Omar"
      }) */

    /*     let student = await studentModel.findOne({ _id: "6643f0a6aa7dccce016a17f1" })
        console.log(student) */

    /*      student.courses.push({ course: "6643f25e1227e984d33934ca" })
           let result = await studentModel.updateOne({ _id: "6643f0a6aa7dccce016a17f1" }, student)
           console.log(result) */

    /*    let student = await studentModel.find({ _id: "6643f0a6aa7dccce016a17f1" }).populate("courses.course")
       console.log(JSON.stringify(student, null, '\t')) */
}

environment()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})