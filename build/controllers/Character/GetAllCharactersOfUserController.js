"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCharactersOfUserController = void 0;
const GetAllCharactersOfUserService_1 = require("../../services/Character/GetAllCharactersOfUserService");
class GetAllCharactersOfUserController {
    async handle(request, response) {
        const { user_id } = request.body;
        const service = new GetAllCharactersOfUserService_1.GetAllCharactersOfUserService();
        const result = await service.execute(user_id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.GetAllCharactersOfUserController = GetAllCharactersOfUserController;
