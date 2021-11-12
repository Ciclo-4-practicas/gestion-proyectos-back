import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objective";

const main = async () => {
    await conectarBD();
    // const objet = await ObjectiveModel.create({
    //     descripcion: "Este es el objetivo específico",
    //     tipo: Enum_TipoObjetivo.especifico,
    // })
        //CREAR PROYECTO
    // ProjectModel.create({
    //     nombre: "Proyecto 3",
    //     presupuesto:125,
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date ("2022/11/10"),
    //     lider: "618d7673464ac96a96cdddc2",
    //     objetivos: [ "618dd94f50d8c67712c061e1", "618dd8c3c574d7588f0cf263"]

    // })

    const proyecto = await ProjectModel.find({nombre: "Proyecto 3"})
    .populate("lider")
    .populate("objetivos");
    console.log("el proyecto es: ", JSON.stringify(proyecto));

  
};
main()