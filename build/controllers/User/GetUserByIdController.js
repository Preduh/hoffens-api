"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdController = void 0;
const GetUserByIdService_1 = require("../../services/User/GetUserByIdService");
class GetUserByIdController {
    async handle(request, response) {
        const id = request.user.id;
        const service = new GetUserByIdService_1.GetUserByIdService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        delete result.password;
        return response.status(200).json(result);
    }
}
exports.GetUserByIdController = GetUserByIdController;
