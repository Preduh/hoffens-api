import { getRepository } from "typeorm";
import { validate } from "uuid";
import { Character } from "../../entities/Character";

export class GetAllCharactersOfUserService {
  async execute(user_id: string): Promise<Character[] | Error> {
    const checkId = validate(user_id);

    if (!checkId) {
      return new Error("Invalid user ID");
    }

    const characterRepo = getRepository(Character);

    const characters = await characterRepo.find({
      where: { user_id },
      select: [
        "hero",
        "identity",
        "affiliate_group",
        "base_of_operations",
        "power_level",
      ],
    });

    return characters;
  }
}
