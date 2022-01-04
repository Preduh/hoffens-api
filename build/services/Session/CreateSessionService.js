"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entities/User");
const Auth_1 = __importDefault(require("../../config/Auth"));
const Character_1 = require("../../entities/Character");
class CreateSessionService {
    async execute({ email, password }) {
        const userRepo = (0, typeorm_1.getRepository)(User_1.User);
        const characterRepo = (0, typeorm_1.getRepository)(Character_1.Character);
        const user = await userRepo.findOne({ email });
        if (!user) {
            return new Error("Email/Password is invalid.");
        }
        const checkPassword = await (0, bcrypt_1.compare)(password, user.password);
        if (!checkPassword) {
            return new Error("Email/Password is invalid.");
        }
        const { secret, expiresIn } = Auth_1.default.jwt;
        const token = (0, jsonwebtoken_1.sign)({}, secret, {
            expiresIn,
            subject: user.id,
        });
        const characters = await characterRepo.find({
            where: { user_id: user.id },
        });
        for (const character of characters) {
            delete character.user_id;
            delete character.secret_identity;
            delete character.gender;
            delete character.age;
            delete character.height;
            delete character.weight;
            delete character.eyes;
            delete character.hair;
        }
        return { user, characters, token };
    }
}
exports.CreateSessionService = CreateSessionService;
