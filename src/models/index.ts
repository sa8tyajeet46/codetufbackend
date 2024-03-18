import dbConfig from "../../db.config";
import {Sequelize} from "sequelize";
import model from "./code.model";
import { configDotenv } from "dotenv";

configDotenv({path:"./.env"})
const sequelize = new Sequelize(process.env.DBUSER, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  dialect: "mysql",
  logging:false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  
});

const db:any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.code=model(sequelize,Sequelize);

export default db;
