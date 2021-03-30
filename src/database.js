import Mongoose from 'mongoose';
import {config} from 'dotenv';
config(); 

Mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jxp3o.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})
.then(()=>{console.log('conectado a la base de datos')})
.catch((error)=>{console.log(error)})  