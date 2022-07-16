/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import * as pg from 'pg';
import serverConfig from '../config/server';

const sequelize = new Sequelize(
  serverConfig.databases.postgreSQL.dbName!,
  serverConfig.databases.postgreSQL.dbUser!,
  serverConfig.databases.postgreSQL.dbPass!,
  {
    dialect: 'postgres',
    host: serverConfig.databases.postgreSQL.dbHost,
    port: Number(serverConfig.databases.postgreSQL.dbPort),
    logging: console.log,
    dialectModule: pg,
  },
);

sequelize.addModels([path.resolve(__dirname, './schemas')]);

export default sequelize;
