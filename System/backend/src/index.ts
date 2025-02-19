// backend/src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoute/authRoutes';
import  departmentalUsers from './routes/adminRoute/allUser/allUserRoute'
import selectUserRoute from './routes/adminRoute/selectRoute/selectUserRoute'
import * as errorController from './controllers/error/error';
import { testDbConnection } from './util/database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// CORS middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Define the routes
app.use('/auth', authRoutes);
app.use('/register', departmentalUsers);
app.use('/admin', selectUserRoute);

// Error handling middleware
app.use(errorController.get404);
app.use(errorController.get500);

// Export the app and testDbConnection for `server.js` to use
export { app, testDbConnection };
