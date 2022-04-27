import express from 'express';
import { router } from './routes';

const server = express();

server.use(router);

server.listen(8000, () => {
    console.log('Server started...', 'http://localhost:8000/')
});
