import express from 'express';
import {port} from './config/index.js';

const app = express();

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