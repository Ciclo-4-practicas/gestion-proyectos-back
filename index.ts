import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo: "sa@Calo.com",
        identificacion: "543235",
        nombre: "Sara",
        apellido: "Sandoval",
        rol: Enum_Rol.lider,

    })
    .then((u) => {
        console.log("usuario creado", u);
    })
    .catch((e) => {
        console.error("Error creando el ususario", e)
    });
       //OBTENER LOS USUARIOS
//    await UserModel.find().then((u) => {
//         console.log("usuarios", u);
//     })
//     .catch((e) => {
//         console.error("error obteniendo los usuarios", e)
//     });
};

main()