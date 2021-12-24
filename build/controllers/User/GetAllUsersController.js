"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersController = void 0;
const GetAllUsersService_1 = require("../../services/User/GetAllUsersService");
class GetAllUsersController {
    async handle(request, response) {
        const service = new GetAllUsersService_1.GetAllUsersService();
        const users = await service.execute();
        return response.status(200).json(users);
    }
}
exports.GetAllUsersController = GetAllUsersController;
