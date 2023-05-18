import express from 'express';
import {port} from './config/index.js';
import  Database from  './dbConnection/connection.js';
import videoRouter from '../src/routes/videoRoutes.js';
import userRoutes from './routes/userRoutes.js'


const app = express();
const db = new Database();

//routes video

//Lectura de datos en formato json
app.use(express.json());

//routes
app.use('/users', userRoutes);
app.use('/', videoRouter);




app.get('/', (request, response, error)=>{
  response.send('status: ok')
})


app.listen(port, (error) => {

  if(error) {
    console.log('Server error: Failed');
    process.exit(1);
  }
  console.log(`Server listening port ${port}`)

})

export default app;
