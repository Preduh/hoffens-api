"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCharactersOfUserController = void 0;
const GetAllCharactersOfUserService_1 = require("../../services/Character/GetAllCharactersOfUserService");
class GetAllCharactersOfUserController {
    async handle(request, response) {
        const id = request.user.id;
        const service = new GetAllCharactersOfUserService_1.GetAllCharactersOfUserService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.status(200).json(result);
    }
}
exports.GetAllCharactersOfUserController = GetAllCharactersOfUserController;
