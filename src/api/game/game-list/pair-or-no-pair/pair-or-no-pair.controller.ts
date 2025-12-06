import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { StatusCodes } from 'http-status-codes';

import { SuccessResponse, validateBody } from '@/common';

import { UpdatePlayCountSchema } from './schema';
import { getPairOrNoPairQuestions, updatePlayCount } from './service';

export const PairOrNoPairController = Router()
  .get(
    '/start',
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        const game_template_id = request.query.game_template_id as
          | string
          | undefined;

        const data = await getPairOrNoPairQuestions(game_template_id);

        const result = new SuccessResponse(
          StatusCodes.OK,
          'Game Started',
          data.items,
        );

        return response.status(result.statusCode).json(result.json());
      } catch (error) {
        next(error);
      }
    },
  )
  .post(
    '/play-count',
    validateBody({ schema: UpdatePlayCountSchema }),
    async (request: Request, response: Response, next: NextFunction) => {
      try {
        const { game_id } = request.body as { game_id: string };

        await updatePlayCount(game_id);

        const result = new SuccessResponse(
          StatusCodes.OK,
          'Play count updated successfully',
          { success: true },
        );

        return response.status(result.statusCode).json(result.json());
      } catch (error) {
        next(error);
      }
    },
  );
