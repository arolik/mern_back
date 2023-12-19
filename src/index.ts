import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (request: Request, response: Response) => {
    response.send('hello how are you?')
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})



