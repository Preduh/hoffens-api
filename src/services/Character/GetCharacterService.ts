import { getRepository } from "typeorm";
import { Character } from "../../entities/Character";

export class GetCharacterService {
  async execute(id: string): Promise<Character | Error> {
    const characterRepo = getRepository(Character);

    const character = await characterRepo.findOne(id);

    if (!character) {
      return new Error("Invalid character ID.");
    }

    return character;
  }
}
