import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controller/settingsController";
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

routes.post("/settings", settingsController.create);
export { routes };