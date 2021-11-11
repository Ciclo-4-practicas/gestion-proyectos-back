import { Schema, model } from "mongoose";
import {Enum_EstadoUsuario, Enum_Rol} from "./enums"



interface User{
    correo:string;
    identificacion:string;
    nombre:string;
    apellido:string;
    rol: Enum_Rol;
    estado:Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
    correo:{
        type:String,
        required: true,
        unique: true,
        validate:{
              validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
              },
              message: 'Please enter a valid email',
            },
    },    
                //Forma muy bàsica de hacer validaciòn tiene errores pues se podrìa escribir correos tipo:
                // del.con@algo
                // (email) =>{
                //     if (email.includes("@") && email.includes('.')){
                //         return true;
                //     }else{
                //         return false;
                //     }
                // },
                // message: "El formato del correo electrónico está malo"
  
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
        enum:Enum_Rol,
    },
    estado:{
        type:String,
        enum: Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.pendiente,
    }
});
const UserModel = model("User", userSchema);
export { UserModel }