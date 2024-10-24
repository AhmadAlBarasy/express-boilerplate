import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

const httpLogger = winston.createLogger({
  level: 'http',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: './logs/http.log' }),
  ]
});

// log HTTP requests to the console if the node environment is 'development'
if (process.env.NODE_ENV === 'development') 
  httpLogger.add(new winston.transports.Console());

export default httpLogger;