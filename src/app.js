import express from 'express';
import {port} from './config/index.js';
import {routes} from './routes/index.routes.js';
const app = express();

//Routes
 
app.use(require('./routes/index.routes.js'));


app.listen(port, (error) => {

  if(error) {
    console.log('Server error: Failed');
    process.exit(1);
  }
  console.log(`Server listening port ${port}`)

})
