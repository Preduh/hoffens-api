import { Router } from "express";

import authMiddleware from "./middlewares/authMiddleware";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { GetUserByIdController } from "./controllers/User/GetUserByIdController";
import { CreateSessionController } from "./controllers/Session/CreateSessionController";
import { CreateCharacterController } from "./controllers/Character/CreateCharacterController";
import { GetAllCharactersOfUserController } from "./controllers/Character/GetAllCharactersOfUserController";

const routes = Router();

// User
routes.post(
  "/user/recovery",
  authMiddleware,
  new GetUserByIdController().handle
);
routes.post("/user", new CreateUserController().handle);

// Session
routes.post("/session", new CreateSessionController().handle);

// Character
routes.get(
  "/characters",
  authMiddleware,
  new GetAllCharactersOfUserController().handle
);
routes.post("/character", new CreateCharacterController().handle);

export default routes;
