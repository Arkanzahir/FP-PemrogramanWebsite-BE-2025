import { type ROLE } from '@prisma/client';
import { type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { JwtUtils } from '@/utils';

import { prisma } from '../config';
import { ErrorResponse } from '../response';

export const validateAuth =
  ({
    enable = true,
    allowed_roles,
  }: {
    enable?: boolean;
    allowed_roles?: ROLE[];
  }) =>
  async (request: Request, response: Response, next: NextFunction) => {
    if (!enable) {
      return next();
    }

    try {
      const requestToken = request.headers['authorization']?.split(' ');

      if (
        !requestToken ||
        requestToken[0].toLowerCase() !== 'bearer' ||
        !requestToken[1]
      )
        throw new ErrorResponse(StatusCodes.UNAUTHORIZED, 'Token required');

      const payload = JwtUtils.verifyToken(requestToken[1]);

      if (!payload)
        throw new ErrorResponse(StatusCodes.FORBIDDEN, 'Invalid token');

      const userData = await prisma.users.findUnique({
        where: {
          id: payload.user_id,
          role: payload.role,
        },
        select: {
          id: true,
          email: true,
          role: true,
        },
      });

      if (!userData)
        throw new ErrorResponse(
          StatusCodes.FORBIDDEN,
          'Invalid token, user not found',
        );

      if (
        allowed_roles &&
        userData.role !== 'SUPER_ADMIN' &&
        ![...allowed_roles].some(role => userData.role.includes(role))
      ) {
        throw new ErrorResponse(
          StatusCodes.FORBIDDEN,
          'This role is not allowed to access the endpoint',
        );
      }

      response.locals.user = {
        user_id: userData.id,
        email: userData.email,
        role: userData.role,
      };

      next();
    } catch (error) {
      return next(error);
    }
  };
