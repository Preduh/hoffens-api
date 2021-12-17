"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdService = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
class GetUserByIdService {
    async execute(id) {
        if (!id) {
            return new Error("Missing user ID in JWT");
        }
        const userRepo = (0, typeorm_1.getRepository)(User_1.User);
        const user = await userRepo.findOne(id);
        if (!user) {
            return new Error("Invalid user ID.");
        }
        return user;
    }
}
exports.GetUserByIdService = GetUserByIdService;
