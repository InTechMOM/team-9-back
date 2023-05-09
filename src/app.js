import express from 'express';
import {port} from './config/index.js';
import  Database from  './dbConnection/connection.js';
import router from './router.js';


const app = express();
const db = new Database();

//routes video


app.use(express.json());

app.use('/', router);

//Preguntar como poner la ruta aca
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
