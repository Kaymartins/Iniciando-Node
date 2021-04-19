import express, { request, response } from "express";

const app = express();

/**
 * GET = BUSCAS 
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO 
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇAO ESPECIFICA (EX SENHA DE USUARIO)
 */
app.get("/",(request,response)=>{
    return response.json({
        message: "Olá NLW#05"
    })
});

app.post("/users", (request, response)=>{
    return response.json({message:"usuario salvo com sucesso!"});
})

app.listen(3333, () => console.log("server is runnig on port 3333"));