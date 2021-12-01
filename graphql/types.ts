import {gql} from 'apollo-server-express'; 
import { tiposEnums } from '../models/enums/tipos';
import { tiposUsuario } from '../models/usuario/tipos';
import { tiposProyecto } from '../models/proyecto/tipos';
import { tiposAvance } from '../models/avance/tipos';

const tiposGlobales = gql`
    scalar Date
`;

<<<<<<< HEAD
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto]
=======
export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance]
>>>>>>> 54cd491aa528a07d79f3b1de158b0f5afa2f150d
