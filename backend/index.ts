import app from './src/app';
import {startConnection} from './src/conecction';

startConnection();
app.listen(3000)
console.log("serve up in port 3000");
