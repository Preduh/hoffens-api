"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const rootDir = process.env.NODE_ENV === "development" ? "src" : "build";
const extesionFile = process.env.NODE_ENV === "development" ? "ts" : "js";
const config = {
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
    migrations: [`${rootDir}/database/migrations/*.${extesionFile}`],
    cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    },
};
(0, typeorm_1.createConnection)(config);
