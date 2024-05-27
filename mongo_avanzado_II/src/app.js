import express from 'express'
import mongoose from 'mongoose'
import usersModel from './models/users.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const environment = async () => {
    await mongoose.connect("MONGO_URL")
    let users = await usersModel.paginate({ gender: "Female" }, { limit: 20, page: 2 })
    console.log(users)


    /*     let orders = await orderModel.aggregate([
            {
                $match: { size: "medium" }
            },
            {
                $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
            },
            {
                $sort: { totalQuantity: -1 }
            },
            {
                $group: { _id: 1, orders: { $push: "$$ROOT" } }
            },
            {
                $project: { "_id": 0, orders: "$orders" }
            },
            {
                $merge: {
                    into: "reports"
                }
            }
        ]) */


}

environment()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})