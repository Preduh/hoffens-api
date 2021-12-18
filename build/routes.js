"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const GetUserByIdController_1 = require("./controllers/User/GetUserByIdController");
const CreateSessionController_1 = require("./controllers/Session/CreateSessionController");
const CreateCharacterController_1 = require("./controllers/Character/CreateCharacterController");
const GetAllCharactersOfUserController_1 = require("./controllers/Character/GetAllCharactersOfUserController");
const routes = (0, express_1.Router)();
// User
routes.post("/user/recovery", authMiddleware_1.default, new GetUserByIdController_1.GetUserByIdController().handle);
routes.post("/user", new CreateUserController_1.CreateUserController().handle);
// Session
routes.post("/session", new CreateSessionController_1.CreateSessionController().handle);
// Character
routes.post("/characters", new GetAllCharactersOfUserController_1.GetAllCharactersOfUserController().handle);
routes.post("/character", new CreateCharacterController_1.CreateCharacterController().handle);
exports.default = routes;
