const express = require("express"); //Importando a biblioteca express
const app = express();

app.get("/listar/10", (req, res) => { //Criando rotas
  res.status(200).send("LISTAR Nº10");// Status 200 - OK
});

app.get("/listar/50", (req, res) => {
  res.status(404).send("Não existe"); //Status 404 - Erro
});

app.all("*", (req, res) => {
  res.status(404).send("Página não encontrada"); //Erro em qualquer rota não existente
});

app.listen(8080, () => { //Local onde será iniciado o servidor
  console.log("Servidor iniciado na porta 8080");
});