"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
exports.default = {
    dest: path_1.default.resolve(__dirname, "..", "..", "tmp", "uploads"),
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path_1.default.resolve(__dirname, "..", "..", "tmp", "uploads"));
        },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err, null);
                else {
                    const filename = `${hash.toString("hex")}-${file.originalname}`;
                    cb(null, filename);
                }
            });
        },
    }),
    limits: {
        fileSize: 8 * 1024 * 1024,
    },
};
