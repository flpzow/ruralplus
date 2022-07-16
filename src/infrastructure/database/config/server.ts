require('dotenv').config();

const serverConfig = {
  api: {
    port: process.env.PORT || 3333,
    environment: process.env.NODE_ENV,
    protocol: process.env.PROTOCOL || 'http',
    baseURL: process.env.BASE_URL || '0.0.0.0',
  },
  databases: {
    postgreSQL: {
      dbHost: process.env.PG_DB_HOST,
      dbPort: process.env.PG_DB_PORT,
      dbName: process.env.PG_DB_NAME,
      dbUser: process.env.PG_DB_USER,
      dbPass: process.env.PG_DB_PASS,
      dbDialect: process.env.PG_DB_DIALECT,
    },
  },
};

export default serverConfig;
