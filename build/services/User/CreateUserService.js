"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entities/User");
const Auth_1 = __importDefault(require("../../config/Auth"));
class CreateUserService {
    async execute({ username, email, password, masterKey, }) {
        const userRepo = (0, typeorm_1.getRepository)(User_1.User);
        if (masterKey !== "hoffens5") {
            return new Error("Invalid master key.");
        }
        const usernameAlreadyExists = await userRepo.findOne({ username });
        if (usernameAlreadyExists) {
            return new Error("This username already exists.");
        }
        const emailAlreadyExists = await userRepo.findOne({ email });
        if (emailAlreadyExists) {
            return new Error("This email already exists.");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 8);
        const user = userRepo.create({ username, email, password: hashedPassword });
        const { secret, expiresIn } = Auth_1.default.jwt;
        const token = (0, jsonwebtoken_1.sign)({}, secret, {
            expiresIn,
            subject: user.id,
        });
        await userRepo.save(user);
        return { user, token };
    }
}
exports.CreateUserService = CreateUserService;
