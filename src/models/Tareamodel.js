import {Schema,model} from 'mongoose' 

const EsquemasTarea = new Schema ({
    nombre_tarea:String,
    materia_tarea:String,
    descripcion_tarea:String
},{
    timestamps:false,
    versionKey:false
}) 

export default model('Tareas',EsquemasTarea);