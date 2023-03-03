import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
const { CREATED, OK } = StatusCodes;
import { success } from '@constants';
import userController from '@controllers/user';

// Constants
const router = Router();

// Paths
export const p = {
    signUp: '/signup',
    login: '/login'  
} as const;

router.post(p.signUp, async (req: any, res: Response) => {
    const data = await userController.signUp(req.body );
    return res.status(CREATED).send({ data, code: CREATED, message: success.en.signupSuccessful });
});

router.post(p.login,  async (req: Request, res: Response) => {
    const data = await userController.login(req.body ,req.headers);
    return res.status(OK).send({ data, code: OK, message: success.en.loginSuccessful });
});

// Export default
export default router;
