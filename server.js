import fastify from 'fastify';
import cors from '@fastify/cors';
import { connection } from './db/db.js';
import { produtosRoute } from './routes/produtos.routes.js';

const PORT = 5000
// para subir no render o HOST precisa ser adicionado como '0.0.0.0' quando não houver variavel de ambiente HOST o servido '127.0.0.1'
const HOST = process.env.HOST ||'127.0.0.1'

const app = fastify({ logger: false });

app.register(cors, {
    origin: '*',
});

connection()

app.get('/', (res, reply) => {
    return {
        "code": 200,
        status: "UP",
        message: "Servidor Rodando!"
    }
})

produtosRoute(app)

app.listen({  host: HOST,  port: `5000` }, (err, address) => {
    if (err) {

        console.log(`Erro ao rodar os ervidor: ${err}`);
        return;
    }
    app.log.info(`Server listening on ${address}`);
    console.log(`Server listening on ${address}`);
});
