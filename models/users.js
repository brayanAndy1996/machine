import { Schema, model, models } from 'mongoose';

const UsuariosSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    apellido: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    celular: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'El email es único']
    },
    password: {
        type: String,
        select: false
    }
})
const UserModel = models?.Usuarios || model( 'Usuarios', UsuariosSchema )

export default UserModel