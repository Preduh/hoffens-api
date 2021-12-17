import { Request, Response } from "express";

import { CreateUserService } from "../../services/User/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, email, password, masterKey } = request.body;

    const service = new CreateUserService();

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
