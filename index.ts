import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";

const main = async () => {
    await conectarBD();

  //CREAR UN USUARIO
    // await UserModel.create({
    //     correo: "dan@Calo.com", /* Si quitamos el ""." o "@" se genera un error de validación*/ 
    //     identificacion: "506070",
    //     nombre: "Danilo",
    //     apellido: "Herrera",
    //     rol: Enum_Rol.administrador,
        

    // })
    // .then((u) => {
    //     console.log("usuario creado", u);
    // })
    // .catch((e) => {
    //     console.error("Error creando el usuario", e)
    // });
//        OBTENER USUARIOS
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

        // CREAR PROYECTO
    // ProjectModel.create({
    //     nombre: "Proyecto 2",
    //     presupuesto:120,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date ("2022/11/10"),
    //     lider: "618dd05ec3cff4bc787a1cfe"

    // })
      //REFERENCIA FUERTE
    //   const proyecto = await ProjectModel.find({nombre: "Proyecto 2"}).populate("lider");
    //   console.log("el proyecto es: ", proyecto);
     //REFERENCIA DÉBIL
      // const proyecto: any = await ProjectModel.find({nombre:"Proyecto 1"});
      // console.log("El proyecto es: ", proyecto, proyecto.lider) 
      // const lider = await UserModel.find({_id: proyecto[0].lider})
      // console.log ("El líder del proyecto es: ", lider)
}
main()