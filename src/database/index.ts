import { createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const rootDir = process.env.NODE_ENV === "development" ? "src" : "build";
const extesionFile = process.env.NODE_ENV === "development" ? "ts" : "js";

const config: any = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  extra: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  entities: [`${rootDir}/entities/*.${extesionFile}`],
  migrations: [
    `${rootDir}/${process.env.TYPEORM_MIGRATIONS_DIR}/*.${extesionFile}`,
  ],
  cli: {
    migrationsDir: `${rootDir}/${process.env.TYPEORM_MIGRATIONS_DIR}`,
    entitiesDir: `${rootDir}/entities`,
  },
};

createConnection(config);
