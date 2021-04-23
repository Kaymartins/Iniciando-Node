import { http } from "./http"
import "./websocket/client"

/**
 * GET = BUSCAS 
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO 
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇAO ESPECIFICA (EX SENHA DE USUARIO)
 */
http.listen(3333, () => console.log("server is runnig on port 3333"));