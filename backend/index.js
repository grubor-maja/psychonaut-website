import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from './routes/contactMessage.route.js';
import sessionRoutes from './routes/freeSession.route.js';
import connectDB from './configuration/db.js';
import { FreeSession } from './models/freeSession.model.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

connectDB();
await FreeSession.syncIndexes();

app.use(cors());

app.use(express.json());
app.use('/api/messages',messageRoutes);
app.use('/api/sessions',sessionRoutes);


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});
