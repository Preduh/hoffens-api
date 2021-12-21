"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCharacterController = void 0;
const GetCharacterService_1 = require("../../services/Character/GetCharacterService");
class GetCharacterController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new GetCharacterService_1.GetCharacterService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.GetCharacterController = GetCharacterController;
