import dbConfig from "../../db.config.js";
import { Sequelize } from "sequelize";
import model from "./code.model.js";
import { configDotenv } from "dotenv";
import mysql2 from "mysql2";
configDotenv({ path: "./.env" });
const sequelize = new Sequelize(
  process.env.DBUSER,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    logging: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.code = model(sequelize, Sequelize);

export default db;
