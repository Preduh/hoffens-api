"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const Auth_1 = __importDefault(require("../config/Auth"));
const authMiddleware = (request, response, next) => {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader)
            return response.status(401).json("Missing JWT.");
        const [, token] = authHeader.split(" ");
        const { secret } = Auth_1.default.jwt;
        const { sub } = (0, jsonwebtoken_1.verify)(token, secret);
        request.user = {
            id: sub,
        };
        return next();
    }
    catch {
        return response.status(401).json("Invalid JWT.");
    }
};
exports.default = authMiddleware;
