import { connect } from "mongoose";

const conectarBD = async () =>{
return await connect('mongodb+srv://admin:Pruebas123@pruebasgestionproyectos.advhw.mongodb.net/PruebasGestionProyectos?retryWrites=true&w=majority'
).then(() =>{
    console.log('Conexión exitosa');
}).catch((e)=>{
    console.error("Error conectando a la bd", e);
})
};
export default conectarBD;