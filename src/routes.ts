import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessageController } from "./controller/messagesController";
import { SettingsController } from "./controller/settingsController";
import { UsersController } from "./controller/usersController";
import { SettingsRepository } from "./repositories/settingsRepository";

const routes = Router();

/**
 * tipos de parametros: 
 * Routes Params=> Parametros de rotas
 * EX: http://localhost:3333/settings/1
 * Query Params=> Filtros e buscas
 * EX: http://localhost:3333/settings/1?search=algumacoisa
 * Body Params=> {
 * 
 * }
 * 
 */

 const settingsController = new SettingsController();
 const usersController = new UsersController();
 const messageController = new MessageController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);

export { routes };