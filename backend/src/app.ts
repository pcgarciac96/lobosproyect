import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';
import users from './routes/userRouter';



const app = express();
app.use(morgan("dev"), cors(), express.json());
app.use("/api",routes,users);

export default app;