"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCharacterController = void 0;
const CreateCharacterService_1 = require("../../services/Character/CreateCharacterService");
class CreateCharacterController {
    async handle(request, response) {
        const { hero, user_id, identity, secret_identity, gender, age, height, weight, eyes, hair, affiliate_group, base_of_operations, power_level, } = request.body;
        const service = new CreateCharacterService_1.CreateCharacterService();
        const result = await service.execute({
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
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.CreateCharacterController = CreateCharacterController;
