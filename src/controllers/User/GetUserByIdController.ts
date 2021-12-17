import { Request, Response } from "express";
import { GetUserByIdService } from "../../services/User/GetUserByIdService";

export class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const id = request.user.id;

    const service = new GetUserByIdService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    delete result.password;

    return response.status(200).json(result);
  }
}
