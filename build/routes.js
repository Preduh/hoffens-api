"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
const Multer_1 = __importDefault(require("./config/Multer"));
const CreateUserController_1 = require("./controllers/User/CreateUserController");
const GetUserByIdController_1 = require("./controllers/User/GetUserByIdController");
const CreateSessionController_1 = require("./controllers/Session/CreateSessionController");
const CreateCharacterController_1 = require("./controllers/Character/CreateCharacterController");
const GetAllCharactersOfUserController_1 = require("./controllers/Character/GetAllCharactersOfUserController");
const GetCharacterController_1 = require("./controllers/Character/GetCharacterController");
const GetAllUsersController_1 = require("./controllers/User/GetAllUsersController");
const routes = (0, express_1.Router)();
// User
routes.post("/user/recovery", authMiddleware_1.default, new GetUserByIdController_1.GetUserByIdController().handle);
routes.post("/user", (0, multer_1.default)(Multer_1.default).single("file"), new CreateUserController_1.CreateUserController().handle);
routes.get("/users", new GetAllUsersController_1.GetAllUsersController().handle);
// Session
routes.post("/session", new CreateSessionController_1.CreateSessionController().handle);
// Character
routes.get("/characters", authMiddleware_1.default, new GetAllCharactersOfUserController_1.GetAllCharactersOfUserController().handle);
routes.post("/character", new CreateCharacterController_1.CreateCharacterController().handle);
routes.get("/character/:id", authMiddleware_1.default, new GetCharacterController_1.GetCharacterController().handle);
exports.default = routes;
