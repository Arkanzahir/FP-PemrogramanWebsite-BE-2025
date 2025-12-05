// File: src/api/game/game-list/game-list.router.ts
import { Router } from 'express';
import { QuizController } from './quiz/quiz.controller';
// Pastikan path ini benar & folder bernama 'pair-or-no-pair' (huruf kecil semua)
import pairOrNoPairRouter from './pair-or-no-pair/router';

const GameListRouter = Router();

GameListRouter.use('/quiz', QuizController);
GameListRouter.use('/pair-or-no-pair', pairOrNoPairRouter);

export default GameListRouter;
