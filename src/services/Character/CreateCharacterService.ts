import { getRepository } from "typeorm";
import { Character } from "../../entities/Character";
import { validate } from "uuid";

interface RequestDTO {
  hero: string;
  user_id: string;
  identity: string;
  secret_identity: boolean;
  gender: string;
  age: number;
  height: number;
  weight: string;
  eyes: string;
  hair: string;
  affiliate_group: string;
  base_of_operations: string;
  power_level: string;
}

export class CreateCharacterService {
  async execute({
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
  }: RequestDTO): Promise<Character | Error> {
    const characterRepo = getRepository(Character);

    const checkId = validate(user_id);

    if (!checkId) {
      return new Error("Invalid user ID");
    }

    const character = characterRepo.create({
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

    await characterRepo.save(character);

    return character;
  }
}
