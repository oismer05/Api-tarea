import app from './app'; 
import './database'
app.set('port',process.env.PORT || 8000); 

app.listen(app.get('port'), () => {
    console.log('estas en el puerto',app.get('port')) 
}) 