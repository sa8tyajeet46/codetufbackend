import express from 'express';
import {configDotenv} from "dotenv"
import appRouter from './routes/appRoutes';
import bodyParser from 'body-parser';
import cors from "cors"
import db from './models';
import { createClient } from 'redis';



const app = express();


configDotenv({path:'./.env'});

const cluster = createClient({url:process.env.REDIS});

cluster.on('error', (err) => console.log('Redis Cluster Error', err));

await cluster.connect();



await db.sequelize.sync();


app.use(bodyParser.urlencoded({ extended:true  }))
app.use(bodyParser.json())
app.use(cors());

app.use("/api/v1",appRouter);

app.listen(process.env.PORT, () => {
  return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});

export {cluster};
