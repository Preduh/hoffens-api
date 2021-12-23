import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/User/GetAllUsersService";

export class GetAllUsersController {
  async handle(request: Request, response: Response) {
    const service = new GetAllUsersService();

    const users = await service.execute();

    return response.status(200).json(users);
  }
}
