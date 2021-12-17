import { getRepository } from "typeorm";

import { User } from "../../entities/User";

export class GetUserByIdService {
  async execute(id: string): Promise<User | Error> {
    if (!id) {
      return new Error("Missing user ID in JWT");
    }

    const userRepo = getRepository(User);

    const user = await userRepo.findOne(id);

    if (!user) {
      return new Error("Invalid user ID.");
    }

    return user;
  }
}
