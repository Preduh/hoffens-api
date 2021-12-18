"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCharactersOfUserService = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Character_1 = require("../../entities/Character");
class GetAllCharactersOfUserService {
    async execute(user_id) {
        const checkId = (0, uuid_1.validate)(user_id);
        if (!checkId) {
            return new Error("Invalid user ID");
        }
        const characterRepo = (0, typeorm_1.getRepository)(Character_1.Character);
        const character = await characterRepo.find({ user_id });
        return character;
    }
}
exports.GetAllCharactersOfUserService = GetAllCharactersOfUserService;
