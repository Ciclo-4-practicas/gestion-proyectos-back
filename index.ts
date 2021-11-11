import conectarBD from "./db/db";
import {UserModel} from "./models/user";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        correo:"dsl@c.com",
        identificacion: "12343452",
        nombre: "pepito",
        apellido: "Ramirez"

    })
    .then((u) => {
        console.log("usuario creado", u);
    })
    .catch((e) => {
        console.error("Error creando el ususario", e)
    });
};

main()