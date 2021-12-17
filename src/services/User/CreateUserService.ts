import { getRepository } from "typeorm";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import { User } from "../../entities/User";
import AuthConfig from "../../config/Auth";

interface RequestDTO {
  username: string;
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

export class CreateUserService {
  async execute({
    username,
    email,
    password,
  }: RequestDTO): Promise<ResponseDTO | Error> {
    const userRepo = getRepository(User);

    const usernameAlreadyExists = await userRepo.findOne({ username });

    if (usernameAlreadyExists) {
      return new Error("This username already exists.");
    }

    const emailAlreadyExists = await userRepo.findOne({ email });

    if (emailAlreadyExists) {
      return new Error("This email already exists.");
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepo.create({ username, email, password: hashedPassword });

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      expiresIn,
      subject: user.id,
    });

    await userRepo.save(user);

    return { user, token };
  }
}