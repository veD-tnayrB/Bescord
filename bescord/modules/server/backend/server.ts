import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());

export const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

const PORT = 3003;

export 
function init() {
    server.listen(PORT, () => console.log(`---- SERVER STARTED ON ${PORT} ----`));
}