"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionController = void 0;
const CreateSessionService_1 = require("../../services/Session/CreateSessionService");
class CreateSessionController {
    async handle(request, response) {
        const { email, password } = request.body;
        const service = new CreateSessionService_1.CreateSessionService();
        const result = await service.execute({ email, password });
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        delete result.user.password;
        return response.status(200).json(result);
    }
}
exports.CreateSessionController = CreateSessionController;
