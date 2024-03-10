
import express from 'express';
const server = express();
import dotenv from 'dotenv';
import cors from 'cors';
server.use(cors());
server.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

import { router } from './routes/index.js'; 


server.use(router);

server.use((req, res) => {
    res.send("Page not found");
});

server.listen(port, () => {
    console.log(`Running on ${port}`);
});
