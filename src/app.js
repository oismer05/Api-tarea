import Express from 'express'; 
import Morgan from 'morgan'
import pkg from '../package.json' 
import cors from 'cors';

import rutasTarea from './routes/Tareas.routes';

const app = Express();  

app.use(Morgan('dev')) 
app.use(Express.json()) 
app.use(cors())

app.set('pkg',pkg); 

app.get('/',(req,res)=>{
   res.json({
       nombre:app.get('pkg').name,
       autor:app.get('pkg').author,
       descripcion:app.get('pkg').description,
       version:app.get('pkg').version
   }) 
}) 

app.use('/Tareas',rutasTarea); 


export default app; 