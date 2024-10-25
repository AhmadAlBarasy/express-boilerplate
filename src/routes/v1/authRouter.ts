import { Router, Request, Response } from 'express';
import { SUCCESS } from '../../constants/responseConstants';
import { notAllowedMethod, notFoundEndpoint } from '../../middlewares/notAllowedHandler';

const authRouter = Router();

authRouter.route('/login')
  .post((req: Request, res: Response) => {
    res.status(200).json({
      status: SUCCESS,
      message: 'Successfully logged in.'
    });
  })
  .all(notAllowedMethod); // to handle any requests that uses a wrong method sent to this path

authRouter.route('*').all(notFoundEndpoint);

export default authRouter;