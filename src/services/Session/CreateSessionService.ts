import { getRepository } from "typeorm";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { User } from "../../entities/User";
import AuthConfig from "../../config/Auth";

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

export class CreateSessionService {
  async execute({ email, password }: RequestDTO): Promise<ResponseDTO | Error> {
    const userRepo = getRepository(User);

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

    return { user, token };
  }
}
