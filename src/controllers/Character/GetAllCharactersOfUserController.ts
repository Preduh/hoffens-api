import { Request, Response } from "express";
import { GetAllCharactersOfUserService } from "../../services/Character/GetAllCharactersOfUserService";

export class GetAllCharactersOfUserController {
  async handle(request: Request, response: Response) {
    const id = request.user.id;

    const service = new GetAllCharactersOfUserService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
