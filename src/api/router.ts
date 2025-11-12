/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
import { Router } from 'express';

import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

const AppRouter = Router();

AppRouter.use('/auth', AuthController);
AppRouter.use('/user', UserController);

export default AppRouter;
