import { Request, Response } from "express";
import { CreateSessionService } from "../../services/Session/CreateSessionService";

export class CreateSessionController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new CreateSessionService();

    const result = await service.execute({ email, password });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    delete result.user.password;

    return response.status(200).json(result);
  }
}
