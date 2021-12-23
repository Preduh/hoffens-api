import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const userRepo = getRepository(User);

    const users = await userRepo.find({ select: ["username"] });

    return users;
  }
}
