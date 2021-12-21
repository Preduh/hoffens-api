import { Request, Response } from "express";
import { GetCharacterService } from "../../services/Character/GetCharacterService";

export class GetCharacterController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetCharacterService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
