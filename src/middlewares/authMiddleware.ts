import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import AuthConfig from "../config/Auth";

interface DecodedToken {
  iat: number;
  exp: number;
  sub: string;
}

const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) return response.status(401).json("Missing JWT.");

    const [, token] = authHeader.split(" ");

    const { secret } = AuthConfig.jwt;

    const { sub } = verify(token, secret) as DecodedToken;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    return response.status(401).json("Invalid JWT.");
  }
};

export default authMiddleware;
