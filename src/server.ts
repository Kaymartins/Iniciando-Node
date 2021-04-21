import express, { json, request, response } from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json())

app.use(routes);
/**
 * GET = BUSCAS 
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO 
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇAO ESPECIFICA (EX SENHA DE USUARIO)
 */
app.listen(3333, () => console.log("server is runnig on port 3333"));