import fastify from "fastify";

// inicializando o app
const app = fastify();

app.get("/hello", () => {
  return "Hello World";
});

// definindo a porta do projeto
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando na porta 3333");
  });
