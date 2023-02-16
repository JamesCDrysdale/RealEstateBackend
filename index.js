import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from "./mongodb/connect.js";

// Import the routes
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Dummy route
app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
})

// Use routes via middleware
app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

const startServer = async() => {
    try {
        // Connect to the database...
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => console.log('Server started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
}

startServer();