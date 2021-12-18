import { Request, Response } from "express";
import { CreateCharacterService } from "../../services/Character/CreateCharacterService";

export class CreateCharacterController {
  async handle(request: Request, response: Response) {
    const {
      hero,
      user_id,
      identity,
      secret_identity,
      gender,
      age,
      height,
      weight,
      eyes,
      hair,
      affiliate_group,
      base_of_operations,
      power_level,
    } = request.body;

    const service = new CreateCharacterService();

    const result = await service.execute({
      hero,
      user_id,
      identity,
      secret_identity,
      gender,
      age,
      height,
      weight,
      eyes,
      hair,
      affiliate_group,
      base_of_operations,
      power_level,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
