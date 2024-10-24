import express, { Request, Response, NextFunction } from 'express';
import errorController from './controllers/errorController';
import httpLog from './middlewares/httpLog';
import cookieParser from 'cookie-parser';

const app = express();

app.use(httpLog); // to log HTTP requests to http.log file and to the console
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorController(err, req, res, next);
});

export default app;
