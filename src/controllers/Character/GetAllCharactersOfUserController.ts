import { Request, Response } from "express";
import { GetAllCharactersOfUserService } from "../../services/Character/GetAllCharactersOfUserService";

export class GetAllCharactersOfUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.body;

    const service = new GetAllCharactersOfUserService();

    const result = await service.execute(user_id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
