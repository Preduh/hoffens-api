import { getRepository } from "typeorm";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { User } from "../../entities/User";
import AuthConfig from "../../config/Auth";
import { Character } from "../../entities/Character";

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
  characters: Character[];
}

export class CreateSessionService {
  async execute({ email, password }: RequestDTO): Promise<ResponseDTO | Error> {
    const userRepo = getRepository(User);
    const characterRepo = getRepository(Character);

    const user = await userRepo.findOne({ email });

    if (!user) {
      return new Error("Email/Password is invalid.");
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      return new Error("Email/Password is invalid.");
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      expiresIn,
      subject: user.id,
    });

    const characters = await characterRepo.find({
      where: { user_id: user.id },
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

    return { user, characters, token };
  }
}
