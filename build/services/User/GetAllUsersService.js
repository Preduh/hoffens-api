"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersService = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
class GetAllUsersService {
    async execute() {
        const userRepo = (0, typeorm_1.getRepository)(User_1.User);
        const users = await userRepo.find({ select: ["username"] });
        return users;
    }
}
exports.GetAllUsersService = GetAllUsersService;
