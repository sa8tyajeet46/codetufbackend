import express from "express";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { createClient } from "redis";
import appRouter from "./src/routes/appRoutes.js";
import db from "./src/models/index.js";

const app = express();

configDotenv({ path: "./.env" });


await db.sequelize.sync();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1", appRouter);

app.listen(process.env.PORT, () => {
  return console.log(
    `Express is listening at http://localhost:${process.env.PORT}`
  );
});

