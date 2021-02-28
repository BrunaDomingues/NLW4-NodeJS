import 'reflect-metadata'; // importante sempre vir primeiro
import express from "express";
import './database';
const app = express();
/*
    GET => Busca
    POST => Salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica
*/
// http://localhost:3333/users
app.get("/users", (request, response) => {
   // return response.send("Hello Word - NLW04");
   return response.json({ message: "Hello Word - NLW04"});
});

//Criando o servidor
app.listen("3333", () =>console.log("Server is running!"));