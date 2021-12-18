"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacterService = void 0;
const typeorm_1 = require("typeorm");
const Character_1 = require("../../entities/Character");
const uuid_1 = require("uuid");
class CreateCharacterService {
    async execute({ hero, user_id, identity, secret_identity, gender, age, height, weight, eyes, hair, affiliate_group, base_of_operations, power_level, }) {
        const characterRepo = (0, typeorm_1.getRepository)(Character_1.Character);
        const checkId = (0, uuid_1.validate)(user_id);
        if (!checkId) {
            return new Error("Invalid user ID");
        }
        const character = characterRepo.create({
            hero,
            user_id,
            identity,
            secret_identity,
            gender,
            age,
            height,
            weight,
            eyes,
            hair,
            affiliate_group,
            base_of_operations,
            power_level,
        });
        await characterRepo.save(character);
        return character;
    }
}
exports.CreateCharacterService = CreateCharacterService;
