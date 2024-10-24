import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

const appLogger = winston.createLogger({
  level: 'info', // change based on your needs or implement your own severity system
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: './logs/app.log' }),
  ]
});

if (process.env.NODE_ENV === 'development') 
  appLogger.add(new winston.transports.Console());

export default appLogger;