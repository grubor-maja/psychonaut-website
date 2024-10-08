import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from './routes/contactMessage.route.js';
import sessionRoutes from './routes/freeSession.route.js';
import connectDB from './configuration/db.js';
import { FreeSession } from './models/freeSession.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5006;

connectDB();
await FreeSession.syncIndexes();

app.use(express.json());
app.use('/api/messages',messageRoutes);
app.use('/api/sessions',sessionRoutes);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});
