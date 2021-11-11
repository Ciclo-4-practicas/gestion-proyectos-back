import conectarBD from "./db/db";
import {UserModel} from "./models/user";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo:"dsl@c.com",
        identificacion: "1234",
        nombre: "pepito",
        apellido: "Ramirez",
        rol: "Estudiante",

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