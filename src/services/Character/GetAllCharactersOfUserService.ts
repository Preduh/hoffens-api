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
    });

    for (const character of characters) {
      delete character.user_id;
      delete character.secret_identity;
      delete character.gender;
      delete character.age;
      delete character.height;
      delete character.weight;
      delete character.eyes;
      delete character.hair;
    }

    return characters;
  }
}
