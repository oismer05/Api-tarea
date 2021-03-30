import ModelTare from '../models/Tareamodel'; 

export const Addutarea = async (req,res) => {
   const {nombre_tarea,materia_tarea,descripcion_tarea} = req.body
   const newTarea = new ModelTare({nombre_tarea,materia_tarea,descripcion_tarea})
   await newTarea.save()
   res.json('Tarea guardada')
}  

export const Gettarea = async (req,res) => {
    const Tarea = await ModelTare.find();
    res.json(Tarea) 
} 

export const GettareaId =  async (req,res) => {
   const GettareaId = await ModelTare.findById(req.params.id);
   res.json(GettareaId)
}

export const Updatetarea = async (req,res) => {
    await ModelTare.findByIdAndUpdate(req.params.id,req.body,{
       new:true
    })
    res.json('Tarea actualizada !!!')
}

export const Deletetarea = async (req,res) => {
   await ModelTare.findByIdAndDelete(req.params.id)
   res.json('Tarea eliminada')
}