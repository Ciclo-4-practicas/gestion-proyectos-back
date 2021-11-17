import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Usuario {
        nombre: String!
    }

    type Query{ 
        Usuarios: [Usuarios]
    }
    
    `;
export {typeDefs};