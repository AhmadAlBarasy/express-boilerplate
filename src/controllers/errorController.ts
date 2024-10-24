import { NextFunction, Request, Response } from "express";

export default function errorController(err: Error, req: Request, res: Response, next: NextFunction) {
  // write your error hanlding here
};