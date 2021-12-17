"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/User/CreateUserService");
class CreateUserController {
    async handle(request, response) {
        const { username, email, password, masterKey } = request.body;
        const service = new CreateUserService_1.CreateUserService();
        const result = await service.execute({
            username,
            email,
            password,
            masterKey,
        });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        delete result.user.password;
        return response.status(201).json(result);
    }
}
exports.CreateUserController = CreateUserController;
