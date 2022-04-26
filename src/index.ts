import express, { Request, Response } from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Test...'})
});

server.listen(8000, () => {
    console.log('Server started...', 'http://localhost:8000/')
});
