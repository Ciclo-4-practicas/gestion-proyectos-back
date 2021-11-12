import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";

const main = async () => {
    await conectarBD();

    // ProjectModel.create({
    //     nombre: "Proyecto 2",
    //     presupuesto:120,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date ("2022/11/10"),
    //     lider: "618d7673464ac96a96cdddc2"

    // })
      //REFERENCIA FUERTE
    const proyecto = await ProjectModel.find({nombre: "Proyecto 2"}).populate("lider");
    console.log("el proyecto es: ", proyecto);
   //REFERENCIA DÉBIL
    // const proyecto: any = await ProjectModel.find({nombre:"Proyecto 1"});
    // console.log("El proyecto es: ", proyecto, proyecto.lider) 
    // const lider = await UserModel.find({_id: proyecto[0].lider})
    // console.log ("El líder del proyecto es: ", lider)

  
};
main()