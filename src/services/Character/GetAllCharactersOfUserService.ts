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

    const character = await characterRepo.find({ user_id });

    return character;
  }
}
