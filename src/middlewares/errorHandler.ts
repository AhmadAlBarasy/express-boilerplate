import { NextFunction, Request, Response } from "express";
import APIError from "../types/classes/APIError";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof APIError){

  }
  else {

  }
};