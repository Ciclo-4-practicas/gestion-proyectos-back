import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
    await conectarBD();


  //CREAR UN USUARIO
    await UserModel.create({
        correo: "dan@Calo.com",
        identificacion: "506070",
        nombre: "Danilo",
        apellido: "Herrera",
        rol: Enum_Rol.administrador,
    

    })
    .then((u) => {
        console.log("usuario creado", u);
    })
    .catch((e) => {
        console.error("Error creando el usuario", e)
    });
       //OBTENER USUARIOS
//    await UserModel.find().then((u) => {
//         console.log("usuarios", u);
//     })
//     .catch((e) => {
//         console.error("error obteniendo los usuarios", e)
//     });
  //OBTENER UN USUARIO
//   await UserModel.findOne({identificacion:"543235"})
//   .then((u) =>{
//     console.log("usuario encontrado", u);
//     }).catch((e) => {
//         console.error(e);
//     })
   //EDITAR UN USUARIO
//    await UserModel.findOneAndUpdate({correo: "sa@Calo.com"},{
//     nombre: "Sarita",
//     apellido: "López",

//     }).then((u) =>{
//         console.log('usuario actualizado', u);
//     }).catch((e) =>{
//         console.error('Error actualizando')
//     });
//    //ELIMINAR UN USUARIO
//    await UserModel.findOneAndDelete({correo: "dsl@c.com"}).then((u) =>{
//     console.log("usuario eliminado: ", u);
//     }).catch((e) =>{
//         console.error(e);
//     });
//};

//    }).then((u) =>{
//        console.log('usuario actualizado', u);
//    }).catch((e) =>{
//        console.error('Error actualizando')
//    });
// };
//   //ELIMINAR UN USUARIO
//   await UserModel.findOneAndDelete({correo: "dsl@c.com"}).then((u) =>{
//       console.log("usuario eliminado: ", u);
//   }).catch((e) =>{
//       console.error(e);
//   })
  
};
main()