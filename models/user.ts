import { Schema, model } from "mongoose";

const userSchema = new Schema({
    correo:{
        type:String,
        required: true,

    },
    identificacion:{
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required: true,
    },
    rol:{
        type:String,
        required:true,
        enum:["Estudiante", "Líder", "Administrador"],
    }
});
const UserModel = model("User", userSchema);
export { UserModel }