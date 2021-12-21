"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCharacterService = void 0;
const typeorm_1 = require("typeorm");
const Character_1 = require("../../entities/Character");
class GetCharacterService {
    async execute(id) {
        const characterRepo = (0, typeorm_1.getRepository)(Character_1.Character);
        const character = await characterRepo.findOne(id);
        if (!character) {
            return new Error("Invalid character ID.");
        }
        return character;
    }
}
exports.GetCharacterService = GetCharacterService;
