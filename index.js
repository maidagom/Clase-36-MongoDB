import mongoose from "mongoose";

const URL = "mongodb://localhost:27017";
const Base_datos = "personas";

mongoose.connect(`${URL}/${Base_datos}`)

const esquemaUser = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        email: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const modelUser = mongoose.model("User", esquemaUser)

const agregar = await modelUser.insertOne({
    nombre: "lu",
    apellido: "Cass",
    email: "lu.lucass@example.com"
})
const datos = await modelUser.find()
console.log(datos)