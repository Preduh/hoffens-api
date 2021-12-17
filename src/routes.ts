import { Router } from "express";

import authMiddleware from "./middlewares/authMiddleware";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { GetUserByIdController } from "./controllers/User/GetUserByIdController";
import { CreateSessionController } from "./controllers/Session/CreateSessionController";

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

export default routes;
