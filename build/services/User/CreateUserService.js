"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const User_1 = require("../../entities/User");
class CreateUserService {
    async execute({ username, email, password, }) {
        const userRepo = (0, typeorm_1.getRepository)(User_1.User);
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
        await userRepo.save(user);
        return user;
    }
}
exports.CreateUserService = CreateUserService;
